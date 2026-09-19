# Roomly — Android download page

The public, static landing page for **Roomly — Live together better.**

Roomly's Flutter application code is kept separately in a private repository. This repository contains **only** the download website and the official, non-sensitive logo artwork. Do not add API keys, signing keystores, passwords, Firebase credentials, private screenshots, or private roommate information.

## Publish this site with GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main**, choose **/(root)**, then **Save**.
4. After GitHub deploys the site, open https://abdallahkhayroun00-crypto.github.io/Roomly-download/.

## Free email reminders for our small test group

GitHub Pages is a **static** website: it cannot directly collect someone else's email into your own computer or send launch notices in the background. For four roommates, Roomly now uses a straightforward **free, manual email-request flow**, with no third-party signup service, API key, or paid plan.

1. A roommate opens the site, enters their email, ticks the consent checkbox and taps **Prepare my reminder email**.
2. Their device tries to open their **own email app**, with a message addressed to `abdallah.khayroun1@gmail.com` and their typed email address in the message.
3. They **must press Send** in that email app. Until they actually send the email, the request has **not** reached you. If the device has no configured email app, ask them to email you at that address directly.
4. Open your Gmail inbox and find messages with subject **Roomly - Android launch notification request**. Keep the email addresses privately in Gmail or your own local contact list, never in this public GitHub repository.
5. When you have tested and published an APK, email the consenting roommates **manually** with the Roomly download-page link. For a small group, send individual messages; do not expose everyone's addresses in the To/CC fields.
6. If someone withdraws their request, don't contact them and remove their address from any list you maintain.

There is **no automatic collection or notification** in this arrangement. Your email address is visible in the public site source as the intended recipient of requests. If you don't want it to be public, change the address in the site's `ownerEmail` setting before sharing the site, or choose a different signup mechanism. The site does not store personal emails.

## Make the download button work

The site deliberately shows **Download not available yet** until it finds a published GitHub Release in **this repository** with an attached Android `.apk` file. It does not link to a nonexistent APK.

1. On your Windows machine, build and test the Android release in the original Flutter app repository. Use your own properly backed-up **release signing key**, not a disposable debug key. Build the APK with `flutter build apk --release` after configuring release signing.
2. In **Roomly-download → Releases → Draft a new release**, create a tag such as `v1.0.0-alpha.1`.
3. Upload the signed Android APK as a release asset (prefer the clear filename `Roomly.apk`) and publish the release. A prerelease is supported.
4. Refresh the GitHub Pages site. It reads the public GitHub Releases API and links directly to the newest published release containing an `.apk` asset. This also works for subsequent APK updates.

If the APK was not uploaded or GitHub API is unavailable, the site keeps the download button inactive. It never claims a build exists.

**Important:** The APK will be publicly downloadable by anyone with the URL. The site is not an app store, and downloading a later version still requires the recipient to install it manually. Updates over an existing installation require a compatible package ID, signing key, and increasing version code.

Brand assets in `assets/` are copies of official Roomly SVG artwork from the original app repository. No app code is included here.
