package com.strikezone.game;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.Charset;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

/**
 * Minimal WebSocket server for LAN matches (plain Java, no dependencies).
 *
 * Game clients connect to any path. The hosting game talks to the server either
 * through a {@link Listener} (the Android app, via the JS bridge) or, in relay mode,
 * as a WebSocket connected to /host (desktop hosting and tests).
 *
 * Host channel protocol (strings, first char is the opcode):
 *   to host:   O{id}|{address}  client connected
 *              M{id}|{text}     message from client
 *              C{id}            client disconnected
 *   from host: S{id}|{text}     send to one client
 *              B{text}          broadcast to all clients
 *              K{id}            disconnect a client
 *              I{info}          discovery beacon payload
 */
public class LanServer {
    public interface Listener {
        void onOpen(int id, String address);
        void onMessage(int id, String text);
        void onClose(int id);
    }

    private static final Charset UTF8 = Charset.forName("UTF-8");
    private static final String WS_GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
    private static final int MAX_FRAME = 1 << 20;
    private static final int MAX_QUEUE = 400;

    private final int port;
    private Listener listener;
    private ServerSocket server;
    private volatile boolean running;
    private final Map<Integer, Conn> conns = new ConcurrentHashMap<Integer, Conn>();
    private int nextId = 1;
    private boolean relay;
    private volatile Conn hostConn;
    private File webRoot;
    private volatile String beaconInfo = "";

    public LanServer(int port, Listener listener) {
        this.port = port;
        this.listener = listener;
    }

    /** Lets a WebSocket at /host act as the game host. */
    public void enableRelay() { relay = true; }

    /** Serves static files from this directory for plain HTTP requests. */
    public void setWebRoot(File dir) { webRoot = dir; }

    public String getBeaconInfo() { return beaconInfo; }
    public void setBeaconInfo(String info) { beaconInfo = info == null ? "" : info; }
    public int getPort() { return server != null ? server.getLocalPort() : port; }
    public int clientCount() { return conns.size() - (hostConn != null ? 1 : 0); }

    public void start() throws IOException {
        server = new ServerSocket();
        server.setReuseAddress(true);
        server.bind(new InetSocketAddress(port));
        running = true;
        Thread t = new Thread(new Runnable() {
            public void run() { acceptLoop(); }
        }, "lan-accept");
        t.setDaemon(true);
        t.start();
    }

    public void stop() {
        running = false;
        try { if (server != null) server.close(); } catch (IOException ignored) { }
        for (Conn c : conns.values()) c.close();
        conns.clear();
        hostConn = null;
    }

    public void send(int id, String text) {
        Conn c = conns.get(id);
        if (c != null && c != hostConn) c.sendText(text);
    }

    public void broadcast(String text) {
        byte[] frame = frame(0x1, text.getBytes(UTF8));
        for (Conn c : conns.values()) if (c != hostConn) c.enqueue(frame);
    }

    public void kick(int id) {
        Conn c = conns.get(id);
        if (c != null) c.close();
    }

    // ---------- connections ----------

    private void acceptLoop() {
        while (running) {
            try {
                final Socket s = server.accept();
                s.setTcpNoDelay(true);
                Thread t = new Thread(new Runnable() {
                    public void run() { handle(s); }
                }, "lan-conn");
                t.setDaemon(true);
                t.start();
            } catch (IOException e) {
                if (!running) return;
            }
        }
    }

    private void handle(Socket s) {
        try {
            s.setSoTimeout(15000);
            InputStream in = s.getInputStream();
            OutputStream out = s.getOutputStream();
            String requestLine = readLine(in);
            if (requestLine == null) { s.close(); return; }
            Map<String, String> headers = new HashMap<String, String>();
            String line;
            while ((line = readLine(in)) != null && line.length() > 0) {
                int i = line.indexOf(':');
                if (i > 0) headers.put(line.substring(0, i).trim().toLowerCase(), line.substring(i + 1).trim());
            }
            String[] parts = requestLine.split(" ");
            String path = parts.length > 1 ? parts[1] : "/";
            String key = headers.get("sec-websocket-key");
            String upgrade = headers.get("upgrade");
            if (key == null || upgrade == null || !upgrade.equalsIgnoreCase("websocket")) {
                serveHttp(out, parts.length > 0 ? parts[0] : "", path);
                s.close();
                return;
            }
            String accept = base64(MessageDigest.getInstance("SHA-1").digest((key + WS_GUID).getBytes(UTF8)));
            String resp = "HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: " + accept + "\r\n\r\n";
            out.write(resp.getBytes(UTF8));
            out.flush();
            s.setSoTimeout(0);
            boolean isHost = relay && path.startsWith("/host");
            int id;
            synchronized (this) { id = nextId++; }
            Conn c = new Conn(id, s, out);
            if (isHost) {
                if (hostConn != null) { c.closeWith(4001); return; }
                hostConn = c;
            } else if (relay && hostConn == null) {
                c.closeWith(4000);
                return;
            }
            conns.put(id, c);
            c.startWriter();
            if (!isHost) emitOpen(id, s.getInetAddress().getHostAddress());
            readLoop(c, in, isHost);
        } catch (Exception e) {
            try { s.close(); } catch (IOException ignored) { }
        }
    }

    private void readLoop(Conn c, InputStream in, boolean isHost) {
        ByteArrayOutputStream message = new ByteArrayOutputStream();
        try {
            while (running) {
                int b0 = in.read();
                if (b0 < 0) break;
                int b1 = in.read();
                if (b1 < 0) break;
                boolean fin = (b0 & 0x80) != 0;
                int op = b0 & 0x0f;
                boolean masked = (b1 & 0x80) != 0;
                long len = b1 & 0x7f;
                if (len == 126) len = (readByte(in) << 8) | readByte(in);
                else if (len == 127) { len = 0; for (int i = 0; i < 8; i++) len = (len << 8) | readByte(in); }
                if (len < 0 || len > MAX_FRAME) break;
                byte[] mask = new byte[4];
                if (masked) readFully(in, mask);
                byte[] data = new byte[(int) len];
                readFully(in, data);
                if (masked) for (int i = 0; i < data.length; i++) data[i] ^= mask[i & 3];
                if (op == 0x8) break;
                if (op == 0x9) { c.enqueue(frame(0xA, data)); continue; }
                if (op == 0xA) continue;
                message.write(data);
                if (message.size() > MAX_FRAME) break;
                if (!fin) continue;
                String text = new String(message.toByteArray(), UTF8);
                message.reset();
                if (isHost) handleHostCommand(text);
                else emitMessage(c.id, text);
            }
        } catch (IOException ignored) {
        } finally {
            c.close();
            conns.remove(c.id);
            if (c == hostConn) {
                hostConn = null;
                for (Conn other : conns.values()) other.closeWith(4002);
                conns.clear();
            } else {
                emitClose(c.id);
            }
        }
    }

    private void handleHostCommand(String text) {
        if (text.length() == 0) return;
        char op = text.charAt(0);
        if (op == 'B') { broadcast(text.substring(1)); return; }
        if (op == 'I') { beaconInfo = text.substring(1); return; }
        int bar = text.indexOf('|');
        try {
            if (op == 'S' && bar > 1) send(Integer.parseInt(text.substring(1, bar)), text.substring(bar + 1));
            else if (op == 'K') kick(Integer.parseInt(text.substring(1).trim()));
        } catch (NumberFormatException ignored) { }
    }

    private void emitOpen(int id, String addr) {
        if (hostConn != null) hostConn.sendText("O" + id + "|" + addr);
        else if (listener != null) listener.onOpen(id, addr);
    }

    private void emitMessage(int id, String text) {
        if (hostConn != null) hostConn.sendText("M" + id + "|" + text);
        else if (listener != null) listener.onMessage(id, text);
    }

    private void emitClose(int id) {
        if (hostConn != null) hostConn.sendText("C" + id);
        else if (listener != null) listener.onClose(id);
    }

    private final class Conn {
        final int id;
        final Socket socket;
        final OutputStream out;
        final LinkedBlockingQueue<byte[]> queue = new LinkedBlockingQueue<byte[]>();
        volatile boolean closed;

        Conn(int id, Socket socket, OutputStream out) {
            this.id = id;
            this.socket = socket;
            this.out = out;
        }

        void startWriter() {
            Thread t = new Thread(new Runnable() {
                public void run() {
                    try {
                        while (!closed) {
                            byte[] f = queue.poll(1, TimeUnit.SECONDS);
                            if (f == null) continue;
                            out.write(f);
                            // Coalesce queued frames into one flush.
                            byte[] more;
                            while ((more = queue.poll()) != null) out.write(more);
                            out.flush();
                        }
                    } catch (Exception e) {
                        close();
                    }
                }
            }, "lan-writer");
            t.setDaemon(true);
            t.start();
        }

        void sendText(String text) { enqueue(frame(0x1, text.getBytes(UTF8))); }

        void enqueue(byte[] f) {
            if (closed) return;
            // A client that stops reading is dropped rather than buffering forever.
            if (queue.size() > MAX_QUEUE) { close(); return; }
            queue.offer(f);
        }

        void closeWith(int code) {
            try {
                byte[] payload = { (byte) (code >> 8), (byte) code };
                out.write(frame(0x8, payload));
                out.flush();
            } catch (IOException ignored) { }
            close();
        }

        void close() {
            if (closed) return;
            closed = true;
            try { socket.close(); } catch (IOException ignored) { }
        }
    }

    // ---------- static files ----------

    private void serveHttp(OutputStream out, String method, String path) throws IOException {
        int q = path.indexOf('?');
        if (q >= 0) path = path.substring(0, q);
        if (path.equals("/")) path = "/index.html";
        File f = null;
        if (webRoot != null && (method.equals("GET") || method.equals("HEAD"))) {
            File candidate = new File(webRoot, java.net.URLDecoder.decode(path, "UTF-8"));
            String root = webRoot.getCanonicalPath();
            String full = candidate.getCanonicalPath();
            if ((full.equals(root) || full.startsWith(root + File.separator)) && candidate.isFile()) f = candidate;
        }
        if (f == null) {
            byte[] body = "Not found".getBytes(UTF8);
            out.write(("HTTP/1.1 404 Not Found\r\nContent-Type: text/plain\r\nContent-Length: " + body.length + "\r\nConnection: close\r\n\r\n").getBytes(UTF8));
            out.write(body);
            out.flush();
            return;
        }
        out.write(("HTTP/1.1 200 OK\r\nContent-Type: " + contentType(f.getName()) + "\r\nContent-Length: " + f.length()
                + "\r\nCache-Control: no-cache\r\nConnection: close\r\n\r\n").getBytes(UTF8));
        if (method.equals("GET")) {
            FileInputStream in = new FileInputStream(f);
            try {
                byte[] buf = new byte[16384];
                int n;
                while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
            } finally { in.close(); }
        }
        out.flush();
    }

    private static String contentType(String name) {
        if (name.endsWith(".html")) return "text/html; charset=utf-8";
        if (name.endsWith(".js")) return "text/javascript; charset=utf-8";
        if (name.endsWith(".css")) return "text/css; charset=utf-8";
        if (name.endsWith(".png")) return "image/png";
        if (name.endsWith(".webmanifest")) return "application/manifest+json";
        if (name.endsWith(".json")) return "application/json";
        return "application/octet-stream";
    }

    // ---------- helpers ----------

    static byte[] frame(int op, byte[] data) {
        int len = data.length;
        int head = len < 126 ? 2 : len < 65536 ? 4 : 10;
        byte[] f = new byte[head + len];
        f[0] = (byte) (0x80 | op);
        if (len < 126) f[1] = (byte) len;
        else if (len < 65536) { f[1] = 126; f[2] = (byte) (len >> 8); f[3] = (byte) len; }
        else { f[1] = 127; for (int i = 0; i < 8; i++) f[9 - i] = (byte) ((long) len >> (8 * i)); }
        System.arraycopy(data, 0, f, head, len);
        return f;
    }

    private static int readByte(InputStream in) throws IOException {
        int b = in.read();
        if (b < 0) throw new IOException("eof");
        return b;
    }

    private static void readFully(InputStream in, byte[] buf) throws IOException {
        int off = 0;
        while (off < buf.length) {
            int n = in.read(buf, off, buf.length - off);
            if (n < 0) throw new IOException("eof");
            off += n;
        }
    }

    private static String readLine(InputStream in) throws IOException {
        StringBuilder sb = new StringBuilder();
        int c;
        while ((c = in.read()) >= 0) {
            if (c == '\n') break;
            if (c != '\r') sb.append((char) c);
            if (sb.length() > 8192) throw new IOException("header too long");
        }
        if (c < 0 && sb.length() == 0) return null;
        return sb.toString();
    }

    private static final char[] B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".toCharArray();

    static String base64(byte[] d) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < d.length; i += 3) {
            int b = (d[i] & 0xff) << 16 | (i + 1 < d.length ? (d[i + 1] & 0xff) << 8 : 0) | (i + 2 < d.length ? d[i + 2] & 0xff : 0);
            sb.append(B64[(b >> 18) & 63]).append(B64[(b >> 12) & 63]);
            sb.append(i + 1 < d.length ? B64[(b >> 6) & 63] : '=');
            sb.append(i + 2 < d.length ? B64[b & 63] : '=');
        }
        return sb.toString();
    }
}
