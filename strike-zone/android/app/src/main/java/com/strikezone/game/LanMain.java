package com.strikezone.game;

import java.io.File;

/**
 * Desktop LAN host: serves the web build and relays game traffic.
 *   java -cp lan.jar com.strikezone.game.LanMain [www-dir] [port]
 * Open http://localhost:PORT/?lan=host on the hosting PC; other players open
 * http://HOST-IP:PORT/ in a browser or join from the Android app.
 */
public class LanMain {
    public static void main(String[] args) throws Exception {
        File root = new File(args.length > 0 ? args[0] : "www");
        int port = args.length > 1 ? Integer.parseInt(args[1]) : 47778;
        final LanServer server = new LanServer(port, null);
        server.enableRelay();
        if (root.isDirectory()) server.setWebRoot(root);
        server.start();
        LanDiscovery discovery = new LanDiscovery();
        discovery.startBeacon(new LanDiscovery.InfoSource() {
            public String info() { return server.getBeaconInfo(); }
        });
        System.out.println("STRIKE ZONE LAN server on port " + server.getPort());
        System.out.println("Host:    http://localhost:" + server.getPort() + "/index.html?lan=host");
        for (String ip : LanDiscovery.localIps()) System.out.println("Players: http://" + ip + ":" + server.getPort() + "/  (or join " + ip + " in the app)");
        Thread.currentThread().join();
    }
}
