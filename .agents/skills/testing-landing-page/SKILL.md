---
name: testing-landing-page
description: How to run and visually validate the "Além do Equilíbrio" landing page (React 19 + Vite 7) locally, including mobile-viewport and broken-image checks.
---

# Testing the Além do Equilíbrio landing page

## Running the app
- The repo declares pnpm, but `pnpm` may not be on PATH. Two options that work:
  - `npx --yes pnpm@10.4.1 install --frozen-lockfile && npx --yes pnpm@10.4.1 run dev`
  - or, if deps are already installed, run Vite directly:
    `cd /home/ubuntu/repos/landing-alem-do-equilibrio && node_modules/.bin/vite --host`
- The dev server listens on **port 3000** (not Vite's default 5173). Always read the Vite startup log for the actual URL before curling; hitting 5173 returns status `000`.
- Vite may warn `You are using Node.js 20.18.1. Vite requires Node.js version 20.19+ or 22.12+`. The server still starts and the app works; if a build/tooling step fails, a newer Node (20.19+/22.12+) is the likely fix.

## Static assets
- Images live in `client/public/images/` and are referenced as `/images/<file>` from
  `client/index.html` (favicon), `Header.tsx`, `HeroSection.tsx` (CSS background), `Home.tsx` (clinical images + footer logo)
  and `ProductCard.tsx` (the 7 catalog items).
- The hero is a CSS `background-image`, not an `<img>`, so an `<img>`-only check will miss it. Verify it via
  `getComputedStyle(document.querySelector('main section div[aria-hidden="true"]')).backgroundImage`.

## Fast broken-image / regression check (browser console)
```js
JSON.stringify({
  vw: innerWidth,
  scrollW: document.documentElement.scrollWidth,
  imgs: document.images.length,                                  // expect 11
  bad: [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src), // expect []
  manus: document.documentElement.innerHTML.includes('manus-storage'),                        // expect false
  manusReqs: performance.getEntriesByType('resource').filter(r => r.name.includes('manus-storage')).length
})
```
`performance.getEntriesByType('resource')` also exposes `responseStatus`, which is a quick way to prove every
`/images/*` request returned 200 without leaving the browser.

## Mobile viewport
- Chrome on this desktop has a **minimum window width of ~500 CSS px**, so `xdotool windowsize` cannot reach a
  390px viewport and `ctrl+plus` page zoom may not register via xdotool.
- Reliable approach: maximize the window (`wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`), open DevTools
  (`F12`), toggle the device toolbar (`ctrl+shift+m`), then type the width/height into the Dimensions fields
  (e.g. 390 x 844). Confirm with `innerWidth` in the console. Toggle both off afterwards to return to desktop.

## Catalog expectations (update if the catalog changes)
- Filters and counts: Todos os produtos = 7, Leitura e orientação = 1, Apoio à mobilidade = 3, Circuito funcional = 3.

## Devin Secrets Needed
- None. The app is fully static/local; no login or API keys are required.
