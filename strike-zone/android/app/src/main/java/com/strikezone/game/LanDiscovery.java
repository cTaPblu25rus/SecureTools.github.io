package com.strikezone.game;

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.InterfaceAddress;
import java.net.NetworkInterface;
import java.net.SocketTimeoutException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/** UDP broadcast beacons so phones on the same Wi-Fi find each other's games. */
public class LanDiscovery {
    public static final int PORT = 47777;
    private static final String MAGIC = "SZLAN1|";
    private static final Charset UTF8 = Charset.forName("UTF-8");

    public interface InfoSource { String info(); }
    public interface Listener { void onFound(String ip, String info); }

    private volatile boolean beaconOn;
    private volatile boolean listenOn;
    private DatagramSocket listenSocket;

    /** Broadcasts the host's info once a second until {@link #stopBeacon()}. */
    public void startBeacon(final InfoSource source) {
        if (beaconOn) return;
        beaconOn = true;
        Thread t = new Thread(new Runnable() {
            public void run() {
                DatagramSocket s = null;
                try {
                    s = new DatagramSocket();
                    s.setBroadcast(true);
                    while (beaconOn) {
                        byte[] data = (MAGIC + source.info()).getBytes(UTF8);
                        for (InetAddress target : broadcastTargets()) {
                            try { s.send(new DatagramPacket(data, data.length, target, PORT)); } catch (Exception ignored) { }
                        }
                        Thread.sleep(1000);
                    }
                } catch (Exception ignored) {
                } finally {
                    if (s != null) s.close();
                }
            }
        }, "lan-beacon");
        t.setDaemon(true);
        t.start();
    }

    public void stopBeacon() { beaconOn = false; }

    /** Reports every beacon heard on the local network. */
    public void startListening(final Listener listener) {
        if (listenOn) return;
        listenOn = true;
        Thread t = new Thread(new Runnable() {
            public void run() {
                try {
                    DatagramSocket s = new DatagramSocket(null);
                    s.setReuseAddress(true);
                    s.setBroadcast(true);
                    s.bind(new InetSocketAddress(PORT));
                    s.setSoTimeout(1000);
                    listenSocket = s;
                    byte[] buf = new byte[2048];
                    while (listenOn) {
                        DatagramPacket p = new DatagramPacket(buf, buf.length);
                        try { s.receive(p); } catch (SocketTimeoutException e) { continue; }
                        String msg = new String(p.getData(), 0, p.getLength(), UTF8);
                        if (msg.startsWith(MAGIC)) listener.onFound(p.getAddress().getHostAddress(), msg.substring(MAGIC.length()));
                    }
                    s.close();
                } catch (Exception ignored) {
                } finally {
                    listenOn = false;
                }
            }
        }, "lan-listen");
        t.setDaemon(true);
        t.start();
    }

    public void stopListening() {
        listenOn = false;
        if (listenSocket != null) listenSocket.close();
    }

    static List<InetAddress> broadcastTargets() {
        List<InetAddress> out = new ArrayList<InetAddress>();
        try { out.add(InetAddress.getByName("255.255.255.255")); } catch (Exception ignored) { }
        try {
            for (NetworkInterface ni : Collections.list(NetworkInterface.getNetworkInterfaces())) {
                if (!ni.isUp() || ni.isLoopback()) continue;
                for (InterfaceAddress ia : ni.getInterfaceAddresses()) {
                    if (ia.getBroadcast() != null && !out.contains(ia.getBroadcast())) out.add(ia.getBroadcast());
                }
            }
        } catch (Exception ignored) { }
        return out;
    }

    /** IPv4 addresses of this device on local networks (Wi-Fi, hotspot, Ethernet). */
    public static List<String> localIps() {
        List<String> out = new ArrayList<String>();
        try {
            for (NetworkInterface ni : Collections.list(NetworkInterface.getNetworkInterfaces())) {
                if (!ni.isUp() || ni.isLoopback()) continue;
                for (InetAddress a : Collections.list(ni.getInetAddresses())) {
                    if (a instanceof Inet4Address && !a.isLoopbackAddress()) out.add(a.getHostAddress());
                }
            }
        } catch (Exception ignored) { }
        return out;
    }
}
