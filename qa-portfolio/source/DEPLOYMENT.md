# Cloudflare Pages deployment

## Fastest: upload the included production build
1. Extract the delivery ZIP.
2. In Cloudflare, open Workers & Pages → Create application → Pages → use the drag-and-drop/direct-upload option.
3. Upload the `cloudflare-upload` folder (its root contains `index.html` and `_next`). Do not upload the entire delivery folder or the source folder.
4. Name the project and deploy.
5. Open the assigned pages.dev address. Check mobile navigation, test-case filters, CV download, sample-pack download and email link.

Cloudflare Direct Upload projects cannot later switch to Git integration; create a new Git-integrated project if that is your preferred workflow.

## Git-based deployment
1. Put the contents of `source` at the root of your chosen GitHub repository or branch.
2. In Cloudflare Pages, import that repository.
3. Framework preset: Next.js (Static HTML Export).
4. Build command: `npm run build`.
5. Build output directory: `out`.
6. Node version: 22. No secrets or environment variables required for this site.
7. Deploy. Future commits to your selected production branch trigger builds.

The existing GitHub repository and existing live website were not changed by this delivery.

## Optional custom domain
After deployment, add your domain in the Pages project's Custom domains settings and follow Cloudflare's DNS instructions. Add the final canonical URL in `src/app/layout.tsx` only after the domain is known. No old canonical domain is embedded in this build.

## Local verification
Run `npm ci`, `npm run build`, then `npm run preview` in source. Open the displayed localhost URL. Opening index.html through file:// is not a valid Next.js preview because assets use root-relative paths.

## Official references
https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
https://developers.cloudflare.com/pages/get-started/direct-upload/
