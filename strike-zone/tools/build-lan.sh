#!/usr/bin/env bash
# Builds dist/strikezone-lan.jar: the desktop LAN host (plain Java 8+, no dependencies).
set -euo pipefail
cd "$(dirname "$0")/.."
OUT=$(mktemp -d)
trap 'rm -rf "$OUT"' EXIT
SRC=android/app/src/main/java/com/strikezone/game
javac -nowarn --release 8 -d "$OUT" "$SRC/LanServer.java" "$SRC/LanDiscovery.java" "$SRC/LanMain.java" 2>&1 | grep -v "^warning\|^Picked up" || true
printf 'Main-Class: com.strikezone.game.LanMain\n' > "$OUT/manifest.txt"
mkdir -p dist
jar cfm dist/strikezone-lan.jar "$OUT/manifest.txt" -C "$OUT" com
ls -la dist/strikezone-lan.jar
