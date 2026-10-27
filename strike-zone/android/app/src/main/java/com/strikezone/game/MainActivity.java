package com.strikezone.game;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Vibrator;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONObject;

import java.util.List;

/** Hosts the WebGL game (assets/www) in a fullscreen WebView. */
public class MainActivity extends Activity {
    private WebView web;
    private LanServer lan;
    private final LanDiscovery discovery = new LanDiscovery();
    private WifiManager.MulticastLock multicastLock;

    /** Calls a JS function with one string argument on the UI thread. */
    private void callJs(final String fn, final String arg) {
        final String js = "window." + fn + " && window." + fn + "(" + JSONObject.quote(arg) + ")";
        web.post(new Runnable() { public void run() { web.evaluateJavascript(js, null); } });
    }

    /** Exposed to JS as window.AndroidBridge. */
    public class Bridge {
        @JavascriptInterface
        public void vibrate(int ms) {
            Vibrator v = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
            if (v == null || !v.hasVibrator()) return;
            v.vibrate((long) Math.max(1, ms));
        }

        @JavascriptInterface
        public void exit() {
            runOnUiThread(new Runnable() { public void run() { finish(); } });
        }

        // ---------- LAN play ----------

        /** Starts hosting; returns this device's IPs ("ip1,ip2") or "ERR" when the port is unavailable. */
        @JavascriptInterface
        public String netHost(int port) {
            netStop();
            try {
                lan = new LanServer(port, new LanServer.Listener() {
                    public void onOpen(int id, String address) { callJs("__lanEvent", "O" + id + "|" + address); }
                    public void onMessage(int id, String text) { callJs("__lanEvent", "M" + id + "|" + text); }
                    public void onClose(int id) { callJs("__lanEvent", "C" + id); }
                });
                lan.start();
            } catch (Exception e) {
                lan = null;
                return "ERR";
            }
            final LanServer server = lan;
            discovery.startBeacon(new LanDiscovery.InfoSource() {
                public String info() { return server.getBeaconInfo(); }
            });
            return netLocalIps();
        }

        @JavascriptInterface
        public void netStop() {
            discovery.stopBeacon();
            if (lan != null) { lan.stop(); lan = null; }
        }

        @JavascriptInterface
        public void netSend(int id, String text) { if (lan != null) lan.send(id, text); }

        @JavascriptInterface
        public void netBroadcast(String text) { if (lan != null) lan.broadcast(text); }

        @JavascriptInterface
        public void netKick(int id) { if (lan != null) lan.kick(id); }

        @JavascriptInterface
        public void netInfo(String info) { if (lan != null) lan.setBeaconInfo(info); }

        /** Starts or stops listening for games on the local network. */
        @JavascriptInterface
        public void netDiscover(boolean on) {
            if (on) {
                lockMulticast(true);
                discovery.startListening(new LanDiscovery.Listener() {
                    public void onFound(String ip, String info) { callJs("__lanFound", ip + "|" + info); }
                });
            } else {
                discovery.stopListening();
                lockMulticast(false);
            }
        }

        @JavascriptInterface
        public String netLocalIps() {
            List<String> ips = LanDiscovery.localIps();
            StringBuilder sb = new StringBuilder();
            for (String ip : ips) { if (sb.length() > 0) sb.append(','); sb.append(ip); }
            return sb.toString();
        }
    }

    // Some phones drop broadcast packets unless a multicast lock is held.
    private void lockMulticast(boolean on) {
        try {
            if (on) {
                if (multicastLock == null) {
                    WifiManager wm = (WifiManager) getApplicationContext().getSystemService(Context.WIFI_SERVICE);
                    if (wm == null) return;
                    multicastLock = wm.createMulticastLock("strikezone-lan");
                    multicastLock.setReferenceCounted(false);
                }
                multicastLock.acquire();
            } else if (multicastLock != null && multicastLock.isHeld()) {
                multicastLock.release();
            }
        } catch (Exception ignored) { }
    }

    @SuppressLint({"SetJavaScriptEnabled", "AddJavascriptInterface"})
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Window w = getWindow();
        w.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON | WindowManager.LayoutParams.FLAG_FULLSCREEN);
        if (Build.VERSION.SDK_INT >= 28) {
            // LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES = 1
            WindowManager.LayoutParams lp = w.getAttributes();
            try {
                WindowManager.LayoutParams.class.getField("layoutInDisplayCutoutMode").setInt(lp, 1);
                w.setAttributes(lp);
            } catch (Exception ignored) { }
        }

        web = new WebView(this);
        web.setBackgroundColor(Color.BLACK);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(true);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        web.setWebViewClient(new WebViewClient());
        web.setWebChromeClient(new WebChromeClient());
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        web.setVerticalScrollBarEnabled(false);
        web.setHorizontalScrollBarEnabled(false);
        web.addJavascriptInterface(new Bridge(), "AndroidBridge");
        setContentView(web);
        hideSystemUi();
        if (savedInstanceState != null) web.restoreState(savedInstanceState);
        else web.loadUrl("file:///android_asset/www/index.html");
    }

    private void hideSystemUi() {
        web.setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                | View.SYSTEM_UI_FLAG_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideSystemUi();
    }

    @Override
    public void onBackPressed() {
        web.evaluateJavascript("(window.onAndroidBack ? window.onAndroidBack() : 'exit')", new ValueCallback<String>() {
            @Override
            public void onReceiveValue(String value) {
                if (value == null || value.contains("exit")) finish();
            }
        });
    }

    @Override
    protected void onPause() {
        web.evaluateJavascript("window.onAndroidPause && window.onAndroidPause()", null);
        web.onPause();
        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume();
        web.evaluateJavascript("window.onAndroidResume && window.onAndroidResume()", null);
        hideSystemUi();
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        web.saveState(outState);
    }

    @Override
    protected void onDestroy() {
        discovery.stopBeacon();
        discovery.stopListening();
        lockMulticast(false);
        if (lan != null) lan.stop();
        if (web != null) web.destroy();
        super.onDestroy();
    }
}
