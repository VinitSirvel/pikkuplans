# PIKKU PLANS 🧸

Family events for international parents in Uusimaa, Finland.

Live website: https://pikku-plans.sageswift16.chatgpt.site/

Browse events by city, age, language, dates and price. Search, save favourites on your device and share with friends. Upcoming events are sorted soonest first; ongoing listings follow.

Sources: Helsinki / Helmet and Visit Espoo. Coverage is a shortlist. Dated fallback listings are labelled when live sources are unavailable. Check booking and details with the organiser.

## Upload to GitHub

1. Extract this ZIP.
2. Open https://github.com/VinitSirvel/pikkuplans.
3. Choose **uploading an existing file**, or **Add file → Upload files**.
4. Drag the CONTENTS of this PIKKU_PLANS folder into GitHub, rather than the enclosing folder.
5. Click **Commit changes**.

## Optional: publish with GitHub Pages

Open **Settings → Pages → Deploy from a branch**, select **main** and **/docs**, then Save. Use the URL GitHub displays after deployment.

The frontend in docs/ reads the public event API from the existing hosted website. GitHub Pages does not run the Worker backend. Keep the existing hosted service active for live event retrieval.

## Development

Install Node.js and run `npm run dev` from this folder. Open the address printed by the server. No packages or credentials are required.

Run `npm test` for event checks. After changing worker/index.js, run `npm run export` to regenerate docs/.

## Privacy

No signup or email service is used. Saved favourites stay in the visitor’s browser on their device.
