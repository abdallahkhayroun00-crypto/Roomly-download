# Roomly for Android

Public GitHub Pages website: https://abdallahkhayroun00-crypto.github.io/Roomly-download/

The app is currently an Android private beta. Invited testers receive the APK from the organizer; this repository has no public APK release yet. The website only offers a public APK when one is actually present in this repository’s GitHub Releases. Release lookup failures keep the organizer contact available.

## Website

- `index.html`, `site.css`, `site.js`: Android landing page, real screenshot gallery, installation guide, FAQ, private-beta limitations, privacy overview and feedback.
- `locales.json`: complete English, French, Turkish, German and Arabic website translations. Arabic uses RTL; the app screenshots remain in their captured English language.
- `share.html`: share the public website link only, preserving the chosen language.
- `assets/screenshots/`: unmodified PNG screenshots from the successful Android visual audit, run 37202441501, commit 3e2ec19f7f60509c77691b1973d6bf45bc9bb1dd. They show synthetic QA/demo data, not real roommate information. Home, expenses, chores, supplies and members are included. Debug labels are retained so screenshots are not misrepresented as a production release.
- `assets/roomly-mark.svg`, `assets/roomly-logo-horizontal.svg`, `assets/roomly-share-card.png`: existing Roomly branding.

No desktop section, desktop concept, installer detection or desktop download is included.

## Privacy and beta scope

Do not commit credentials, keystores, private user data or account invitation codes. The static website loads Google Fonts and requests public GitHub release metadata. The privacy overview is not a complete legal privacy policy. Shared apartment data in the app is subject to member access rights.

Automatic notifications/reminders and trusted account/apartment lifecycle features are unavailable in the Spark private beta. The website explains these limits. Account/deletion requests should go to the organizer.

Serve this folder with any static HTTP server to preview. GitHub Pages publishes the main branch root. Test navigation, five languages, screenshot dialog keyboard closing, download failure/empty-release states, share links and responsive layout before updating the main branch.
