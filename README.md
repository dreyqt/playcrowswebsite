# PlayCrows website

A React + Vite + Tailwind CSS website for PlayCrows V1, with server information,
news, Windows and Android downloads, community links, rewards, and rules.
Returning players can use the V2-to-V1 account guide at `#account-merge`.

## Run locally

Use Node.js 22 or later. From this folder:

```bash
corepack enable
pnpm install
pnpm dev
```

Open the address printed by Vite. The existing npm lockfile also supports
`npm ci`, `npm run dev`, and `npm run build`. Use one package manager consistently
for dependency changes.

## Validate and build

```bash
pnpm exec tsc --noEmit
pnpm build
```

The production output is `dist/`. Serve it over HTTP/HTTPS rather than opening
`index.html` directly from disk.

## Deploy on Vercel

Review the changes in GitHub Desktop, commit, and push to the branch connected
to Vercel. Use framework **Vite**, build command **pnpm build**, and output
directory **dist**. A local build does not publish the website.

## Where to make changes

| Content | File |
| --- | --- |
| V1 registration, downloads, account merge URL, community links | `src/site.ts` |
| Account merge guide layout | `src/components/AccountMergeGuide.tsx` |
| Homepage sections | `src/components/HomeSections.tsx` |
| Homepage order | `src/pages/HomePage.tsx` |
| News records and article content | `src/data.tsx` |
| English, Korean, Thai, Portuguese, Traditional Chinese text | `src/locales/*/translation.json` |
| Colors, layout, mobile styles | `src/index.css` |
| Page title, description and search indexing | `.figma/make/site.json` |

## Account merge guide

The official account merge link is
[Merged Account Lookup](https://www.playcrows.com/v3gethequacc/).
V2 has merged into V1. Returning players enter their original account ID and
password on that page, select **Find Accounts**, then use the new account paired
with their character in **Lookup Results** to sign in to the V1 client. The
lookup displays existing records; it does not create or change accounts.
It is linked from desktop/mobile navigation, downloads, and the footer.
The guide includes Discord support if the page is unavailable or lookup fails.

V1 registration and rewards are unchanged. Windows and Android downloads use
the owner-supplied HTTPS links in `src/site.ts` (PC version 16, Android version 18). Article bodies
remain in English, with a notice when another interface language is selected.

## Artwork

See `ASSET-SOURCES.md` for source information. Artwork is stored in `src/assets/`.
