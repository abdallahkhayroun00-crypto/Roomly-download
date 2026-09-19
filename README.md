# Roomly — Android download page

The public, static landing page for **Roomly — Live together better.**

Roomly's Flutter application code is kept separately in a private repository. This repository contains **only** the download website and the official, non-sensitive logo artwork. Do not add API keys, signing keystores, passwords, Firebase credentials, private screenshots, or private roommate information.

## Publish this site with GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main**, choose **/(root)**, then **Save**.
4. After GitHub deploys the site, open https://abdallahkhayroun00-crypto.github.io/Roomly-download/.

## Make the download button work

The site deliberately shows **Download not available yet** until it finds a published GitHub Release in **this repository** with an attached Android `.apk` file. It does not link to a nonexistent APK.

1. On your Windows machine, build and test the Android release in the original Flutter app repository. Use your own properly backed-up **release signing key**, not a disposable debug key. Build the APK with `flutter build apk --release` after configuring release signing.
2. In **Roomly-download → Releases → Draft a new release**, create a tag such as `v1.0.0-alpha.1`.
3. Upload the signed Android APK as a release asset (prefer the clear filename `Roomly.apk`) and publish the release. A prerelease is supported.
4. Refresh the GitHub Pages site. It reads the public GitHub Releases API and links directly to the newest published release containing an `.apk` asset. This also works for subsequent APK updates.

If the APK was not uploaded or GitHub API is unavailable, the site keeps the download button inactive. It never claims a build exists.

**Important:** The APK will be publicly downloadable by anyone with the URL. The site is not an app store, and downloading a later version still requires the recipient to install it manually. Updates over an existing installation require a compatible package ID, signing key, and increasing version code.

Brand assets in `assets/` are copies of official Roomly SVG artwork from the original app repository. No app code is included here.
