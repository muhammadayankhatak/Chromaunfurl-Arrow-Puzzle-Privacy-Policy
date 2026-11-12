# Chromaunfurl Arrow Puzzle — Privacy Policy Website

A static website built from three files: `index.html`, `style.css`, `script.js`.
No npm, build tools, backend, tracking, fonts, or images required. The website is styled to match the game's paper-and-stitches UI.

## YOU MUST EDIT THE PRIVACY POLICY BEFORE PUBLISHING

This is a **draft template, not verification of your app's actual data processing**. It assumes:
- Google Mobile Ads / AdMob SDK is integrated, with banner/interstitial/rewarded advertisements.
- Game data (levels, coins, boosters and settings) is saved only locally on the device.
- No game accounts, server-side sync, separate analytics SDK, crash-reporting SDK, or other SDK collecting user data.
- Game is **not specifically directed to children under 13**.
- No direct in-app purchase handling is disclosed in this draft.

**Check every assumption against the actual exported Android app / AndroidManifest / Godot plugins.** If a third-party SDK is not actually integrated, revise all advertising language. If you use Play Games Services, Firebase Analytics, Crashlytics, mediation, IAP, cloud sync, account sign-in, notifications, or other data-collecting tools, update the policy with accurate specifics and update Google Play's Data safety form accordingly. If the game targets children, adjust children's privacy and consent/advertising disclosures and actual SDK configuration.

Edit `index.html` before uploading:
1. Replace **every** `[YOUR DEVELOPER OR STUDIO NAME]` with the publisher/developer name from Google Play.
2. Replace **every** `YOUR_EMAIL@example.com` with a working email address you control (including the `mailto:` link).
3. Change the effective date `12 November 2026` / `2026-11-12` if your publication date differs.
4. Verify the statement about locally stored progress, ads, purchases, player accounts, data retention, customer support, and target audience.
5. If you process personal data with other service providers, name them and describe their processing.
6. If the game offers accounts, provide suitable in-app and web account deletion instructions. If purchases are offered, explain Google Play billing and any purchase records you receive.
7. Add a clickable Privacy Policy link in the Game (Settings/About screen), matching the published website URL.
8. Match Google Play Console's **Data safety** answers to the policy AND actual app/SDK behavior.

## LOCAL PREVIEW

Double-click `index.html` or open it with Chrome/Edge. Keep `index.html`, `style.css`, and `script.js` in the same folder.

## FREE GITHUB PAGES DEPLOYMENT

1. Log in to https://github.com and create a new **Public** repository named `chromaunfurl-privacy`.
2. Open the repository, choose **Add file > Upload files** (or the upload area of the new repository).
3. Upload `index.html`, `style.css`, `script.js` to the **repository root** (NOT the ZIP; NOT inside a subfolder). Commit the changes.
4. Choose **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**.
5. Set **Branch: main** and **Folder: /(root)**, then select **Save**.
6. After deployment, click **Visit site** on the Pages settings screen.
7. Expected URL format (not real until published): `https://YOUR-GITHUB-USERNAME.github.io/chromaunfurl-privacy/`.
8. Test the page in a private browser tab and on a phone. Check the email link, all sections, and mobile layout.
9. Play Console > **Policy and programs > App content > Privacy policy** > **Start/Manage**. Paste your live HTTPS address and save. Also link to it inside the actual game.

GitHub Docs: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
Google Play policy: https://support.google.com/googleplay/android-developer/answer/10144311
Google Mobile Ads data disclosure: https://developers.google.com/admob/android/privacy/play-data-disclosure

## IMPORTANT

Making a policy public doesn't guarantee approval. You must ensure the statements are complete and accurate, particularly for advertising/consent, third-party SDKs, age audience, and data deletion/retention.
