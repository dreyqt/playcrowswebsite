# PlayCrows website

A Night Crows redesign of the supplied React + Vite project. The layout follows the Reborn reference: compact navigation, cinematic introduction, illustrated server cards, game information, download area, community links, and footer. It is adapted to two PlayCrows servers and retains the original news and rules.

## Run locally

Use Node.js 22 or later. From this folder:

```bash
corepack enable
pnpm install
pnpm dev
```

Open the address printed by Vite. If you use npm instead, `npm install`, `npm run dev`, and `npm run build` also work. Keep one package manager for subsequent dependency changes.

## Deploy on Vercel

Copy these project files into your existing website checkout, keeping your existing `.git` folder. In GitHub Desktop, review the changed files, commit, and push to the branch connected to Vercel.

Vercel settings: framework **Vite**, build command **pnpm build**, output directory **dist**. The site also includes a prebuilt `dist/` folder for a static web host. Serve the folder over HTTP/HTTPS rather than opening `index.html` directly from disk.

No new deployment or GitHub push has been made by this redesign.

## Where to make changes

| Content | File |
| --- | --- |
| V1/V2 registration, client URLs, Discord, Facebook, webshop | `src/site.ts` |
| Homepage sections | `src/components/HomeSections.tsx` |
| Homepage order | `src/pages/HomePage.tsx` |
| News records and article content | `src/data.tsx` |
| English, Korean, Thai, Portuguese, Traditional Chinese labels | `src/locales/*/translation.json` |
| Colors, layout, mobile styles | `src/index.css` |
| Page title, description and search indexing | `.figma/make/site.json` |

The UI separates server, platform, and client language. Register and download links use the selected server. All 12 original download URLs are preserved, including their original HTTP scheme. Client-host availability and installing the actual game clients were not tested. If your download host supports HTTPS, update the verified links in `src/site.ts`.

## What changed

- Reborn-inspired page structure with dedicated illustrated V1 and V2 cards.
- Authentic Night Crows character imagery and the supplied cinematic video, compressed from approximately 35 MB to 3 MB.
- Direct V1/V2 registration and webshop links supplied by the owner.
- Mobile navigation, keyboard-accessible selectors, and a persistent five-language preference.
- Background video pause control; static poster on mobile, reduced motion, or data-saving connections.
- News archives and article pages that support reload, bookmarks, and browser back/forward through hash URLs.
- Existing announcement text and dates retained. Existing article bodies remain in English, clearly indicated when another interface language is selected.
- Rewards and complete rules retained in collapsible sections.
- Unsupported hardcoded Discord member counts removed; no live server status, player count, launch date, or uptime claim added.
- Smaller brand and favicon assets, lazy-loaded secondary imagery, updated page metadata, and search indexing enabled for the public website.
- The duplicate npm lockfile from the supplied archive was removed to keep the existing pnpm workflow unambiguous. Dependency versions were retained.

## Validation

Production build and TypeScript check pass. Server registration destinations, all 12 download mappings, translation coverage, and built asset references were checked. Responsive styles are provided for desktop, tablet, and mobile. Browser-based visual and interaction testing was not performed in this session.

## Artwork

See `ASSET-SOURCES.md` for source information. Original supplied assets remain in `src/assets/` for future edits.
