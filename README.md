# Roomly — Android download page

The public, static landing page for **Roomly — Live together better.**

Roomly's Flutter application code is kept separately in a private repository. This repository contains **only** the download website and the official, non-sensitive logo artwork. Do not add API keys, signing keystores, passwords, Firebase credentials, private screenshots, or private roommate information.

## Publish this site with GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main**, choose **/(root)**, then **Save**.
4. After GitHub deploys the site, open https://abdallahkhayroun00-crypto.github.io/Roomly-download/.

## Enable the Roomly email waitlist (one-time owner setup)

The site includes an English/Arabic waitlist section with an email input, required opt-in checkbox, and a disabled-by-default submit button. **No emails are currently collected.** GitHub Pages is static; it cannot store subscriber emails or send mail itself.

For the quickest hosted mailing list, this site uses Buttondown's public HTML subscribe endpoint. The first 100 subscribers are currently free under Buttondown's published pricing; check the provider's current terms before enabling. A separate account is required.

1. Create **your own** newsletter at https://buttondown.com/register and choose a username (e.g. `roomly` if available).
2. In Buttondown, enable **double opt-in**/subscription confirmation, set up the sender, and make sure subscribers can unsubscribe. Name the newsletter `Roomly launch updates`. Keep it focused on Roomly release announcements.
3. In **this** GitHub repository, edit `waitlist-config.js`. Replace only the empty value with **your actual Buttondown username**:
   ```js
   window.ROOMLY_WAITLIST_USERNAME = "YOUR_REAL_BUTTONDOWN_USERNAME";
   ```
   The username is public; **never** paste a Buttondown password, API key, contact export, or other secret into GitHub Pages.
4. Commit the change. Wait for GitHub Pages to deploy, open the website, and use **your own test email** to register. The subscribe result is displayed by Buttondown in a new tab. Confirm the opt-in email and check the address appears in your Buttondown subscriber list. Test unsubscribing too.
5. When the signed Android APK is published and tested, compose a **one-time launch announcement** in Buttondown for confirmed subscribers. Include the Roomly download-page URL. Review recipients and send from Buttondown.

**Important:** Publishing a GitHub Release does **not** automatically trigger any emails. Buttondown is handling subscriber storage and confirmation, not GitHub Pages. The launch message is sent manually by the owner after verifying the build. Do not claim that people have successfully subscribed merely because their browser submitted a form; the receiving service must confirm it.

**Privacy:** Only ask for an email address and explicit consent for Roomly release notifications. Do not put collected addresses in this public repo or in GitHub Issues. Use the service's unsubscribe and contact-deletion options to honor requests. Notify users in Arabic and English because the current form doesn't store a language preference.

Official reference: https://docs.buttondown.com/building-your-subscriber-base

## Make the download button work

The site deliberately shows **Download not available yet** until it finds a published GitHub Release in **this repository** with an attached Android `.apk` file. It does not link to a nonexistent APK.

1. On your Windows machine, build and test the Android release in the original Flutter app repository. Use your own properly backed-up **release signing key**, not a disposable debug key. Build the APK with `flutter build apk --release` after configuring release signing.
2. In **Roomly-download → Releases → Draft a new release**, create a tag such as `v1.0.0-alpha.1`.
3. Upload the signed Android APK as a release asset (prefer the clear filename `Roomly.apk`) and publish the release. A prerelease is supported.
4. Refresh the GitHub Pages site. It reads the public GitHub Releases API and links directly to the newest published release containing an `.apk` asset. This also works for subsequent APK updates.

If the APK was not uploaded or GitHub API is unavailable, the site keeps the download button inactive. It never claims a build exists.

**Important:** The APK will be publicly downloadable by anyone with the URL. The site is not an app store, and downloading a later version still requires the recipient to install it manually. Updates over an existing installation require a compatible package ID, signing key, and increasing version code.

Brand assets in `assets/` are copies of official Roomly SVG artwork from the original app repository. No app code is included here.
