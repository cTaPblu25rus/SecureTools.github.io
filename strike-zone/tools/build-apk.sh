#!/usr/bin/env bash
# Builds a signed APK without Gradle, using the classic SDK tools
# (Ubuntu packages: aapt dalvik-exchange zipalign apksigner android-sdk-platform-23).
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT=$(pwd)
SDK=/usr/lib/android-sdk
JAR=$SDK/platforms/android-23/android.jar
OUT=$ROOT/dist
WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT

node build.mjs
mkdir -p "$OUT" "$WORK/assets" "$WORK/obj"
cp -r www "$WORK/assets/www"

# Gradle supplies these from build.gradle; the raw tools need them in the manifest.
sed -e 's#<manifest #<manifest package="com.strikezone.game" #' \
    -e 's#android:versionName="1.0">#android:versionName="1.0">\n    <uses-sdk android:minSdkVersion="24" android:targetSdkVersion="34" />#' \
    android/app/src/main/AndroidManifest.xml > "$WORK/AndroidManifest.xml"

aapt package -f -M "$WORK/AndroidManifest.xml" -S android/app/src/main/res -A "$WORK/assets" \
  -I "$JAR" -F "$WORK/app.unsigned.apk"
javac -nowarn --release 8 -cp "$JAR" -d "$WORK/obj" $(find android/app/src/main/java -name '*.java') 2>&1 | grep -v 'warning' || true
$SDK/build-tools/debian/dx --dex --output="$WORK/classes.dex" "$WORK/obj"
(cd "$WORK" && aapt add app.unsigned.apk classes.dex >/dev/null)
zipalign -f 4 "$WORK/app.unsigned.apk" "$WORK/app.aligned.apk"

KS=${SZ_KEYSTORE:-$ROOT/android/debug.keystore}
if [ ! -f "$KS" ]; then
  keytool -genkeypair -keystore "$KS" -storepass android -keypass android -alias strikezone \
    -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=STRIKE ZONE, O=StrikeZone" >/dev/null 2>&1
fi
apksigner sign --ks "$KS" --ks-pass pass:${SZ_KEYSTORE_PASSWORD:-android} --ks-key-alias ${SZ_KEY_ALIAS:-strikezone} \
  --key-pass pass:${SZ_KEY_PASSWORD:-android} --min-sdk-version 24 --out "$OUT/StrikeZone.apk" "$WORK/app.aligned.apk"
apksigner verify --print-certs "$OUT/StrikeZone.apk" | head -3
ls -la "$OUT/StrikeZone.apk"
