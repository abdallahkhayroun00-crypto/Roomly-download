# Roomly — Android & Windows download page

The public, static landing page for **Roomly — Live together better.** Android and Windows have **separate download sections**: Android appears in the opening mobile hero, while Windows has its own desktop-focused section and independent download button. The six selectable desktop screens are illustrative HTML/CSS design previews using sample data; they are **not** binary screenshots from the concept ZIP, and they do not imply that a Windows build has been published.

Roomly's Flutter application code is kept separately in a private repository. This repository contains **only** the download website and the official, non-sensitive logo artwork. Do not add API keys, signing keystores, passwords, Firebase credentials, private screenshots, or private roommate information.

## Website languages

The page includes a language selector for **English, العربية, Français, Türkçe, and Deutsch**. Switching languages updates the Android and Windows download sections, release states, installation instructions, and the interactive desktop concept, while preserving right-to-left layout for Arabic. This translates the download website itself; it does not change the language settings of the Android or Windows applications.

## Publish this site with GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main**, choose **/(root)**, then **Save**.
4. After GitHub deploys the site, open https://abdallahkhayroun00-crypto.github.io/Roomly-download/.

## Make the Android download button work

The site checks public Releases in **this repository** and keeps each platform's download button disabled until a matching installable file is actually published. Android requires an `.apk`; Windows requires a `.exe` installer, `.msi` installer, or a Windows-labeled desktop `.zip`. No file is currently attached to a public release, so both platform buttons are shown as coming soon.

1. On your Windows machine, build and test the Android release in the original Flutter app repository. Use your own properly backed-up **release signing key**, not a disposable debug key. Build the APK with `flutter build apk --release` after configuring release signing.
2. In **Roomly-download → Releases → Draft a new release**, create a tag such as `v1.0.0-alpha.1`.
3. Upload the signed Android APK as a release asset (prefer the clear filename `Roomly.apk`) and publish the release. A prerelease is supported.
4. Refresh the GitHub Pages site. It reads the public GitHub Releases API and links directly to the newest published release containing an `.apk` asset. This also works for subsequent APK updates.

If the APK was not uploaded or the GitHub API is unavailable, the Android download stays inactive. The Windows download is checked separately and remains inactive without a published Windows asset.

**Important:** The APK will be publicly downloadable by anyone with the URL. The site is not an app store, and downloading a later version still requires the recipient to install it manually. Updates over an existing installation require a compatible package ID, signing key, and increasing version code.

## Add the six Windows design screenshots

The Windows section already knows how to display the following optional WebP design-concept images:

```text
assets/windows/dashboard.webp
assets/windows/expenses.webp
assets/windows/chores.webp
assets/windows/bills.webp
assets/windows/supplies.webp
assets/windows/members.webp
```

Each of the six preview tabs selects the corresponding screenshot. If an image is not yet present, the website shows its built-in interactive illustrative desktop preview instead of a broken image. The screenshots are **concept images with illustrative household data, not images of a released Windows application**. The six optimized image files are available separately as `Roomly_Windows_Website_Images.zip` (not committed to this repository yet).

## Publish the Windows desktop build

1. Build and test the native Flutter Windows edition on a Windows computer (for example, `flutter build windows --release` after Windows desktop support and all platform-specific dependencies are configured). A Windows edition requires its own desktop UI and platform testing; this website does not build the app itself.
2. **Recommended:** create a signed installer named `Roomly-Setup.exe` or `Roomly-Windows.msi`. Alternatively, package **all contents** of the Flutter Windows Release output directory together as `Roomly-Windows-x64.zip`. A bare Flutter runner `Roomly.exe` is generally not sufficient: its DLLs and `data` folder must travel with it.
3. In this repository, open **Releases → Draft a new release**, attach the actual Windows installer or Windows ZIP, then publish. You may put Android and Windows assets in the same release or in separate releases. Pre-releases are supported.
4. Reload the landing page. Windows links only activate if a published release contains an installer (an `.exe` or `.msi`) or a ZIP whose name contains `windows`, `win64`, `win-x64`, or `desktop`. The button points directly to the newest eligible Windows asset.

For a Windows ZIP, recipients must **extract the entire archive**, keep all included files together, and run `Roomly.exe` from the extracted folder. The ZIP is not a one-file portable executable and should not be advertised as an installer. Do not publish a build that has not been tested. The same caveat about public access applies: all attached assets can be downloaded by anyone.

## Safety and repository scope

Brand assets in `assets/` are copies of official Roomly SVG artwork from the original app repository. The six interactive desktop screens on the page are **illustrative design previews**, not screenshots of a shipping Windows app. No app source code or private keys are included here.
