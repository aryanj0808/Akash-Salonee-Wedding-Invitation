# Akash & Salonee — Wedding Invitation

A premium, mobile-first digital wedding invitation with a **sage-green,
cream & rose botanical theme** — inspired by an elegant floral design with
ornate calligraphy. Self-contained static site (no build step) — ready for
WhatsApp sharing, GitHub Pages, or installing to a phone's home screen.

**Sunday · 26 July 2026 · 4:50 PM Muhurta**
Yashodip Mangal Karyalaya, Satara Road (Palshi), Ta. Koregaon, Dist. Satara

## Preview locally
Open `index.html` in a browser. (For the PWA / service worker to work you
need to serve it over http — e.g. `npx serve` — but everything else works
straight from the file.)

## Files
| File | Purpose |
|------|---------|
| `index.html` | Content & structure |
| `style.css`  | Sage-green/cream/rose theme, layout, animations, dark mode |
| `script.js`  | All interactivity + your customisation settings (photos, date, venue) |
| `manifest.webmanifest`, `sw.js`, `icon.svg` | PWA (install to home screen + offline) |

## Design
- Fonts: **Great Vibes** (couple names), **Pinyon Script** (ornate section
  titles), **Cormorant Garamond** (body & labels), **Tiro Devanagari Marathi**
  (Marathi text).
- Palette: sage `#d9e5c5`, cream `#f7f0e1`, rose `#c2295b`, maroon `#8f1a3f`,
  gold `#c1974a`, dark-brown footer `#3a2c22`.

## Features
- ✨ Animated opening **envelope** with white floral print + gold wax seal (A & S)
- 🖼️ **Animated photo slideshow** ("Our Moments") — crossfade + Ken-Burns zoom,
  auto-advancing, with prev/next + dots
- 🎉 **Photo event cards** — Haldi · Vivah · Pooja, each with a real photo
  (replaces the illustrated couple graphics)
- 🌸 Floating **flowers & butterflies**
- 🎵 **Background music** with play/pause
- ⏳ Live **countdown** to 26 July 2026, 4:50 PM
- ✋ **Scratch-to-reveal** Save the Date + party-popper confetti
- 📍 **Google Maps** venue + **Get Directions** button
- 📱 **Share** buttons — WhatsApp, native share, copy link
- 🌙 **Dark / Light** mode toggle (remembers your choice)
- 🌐 **English / Marathi** language switch
- 🎆 **Confetti** burst when the countdown hits zero
- 📡 **PWA** — installable, works offline

---

## Photos (all local — no Google Drive dependency)
Every image is a local file in `images/`, so the site is fully self-contained
and works offline:

- **`images/moments/m01.jpg … m14.jpg`** — the "Our Moments" slideshow
  (curated, web-optimized couple photos). Listed in the `MOMENTS` array at the
  top of `script.js`.
- **`images/Haldi.png`, `Vivah.png`, `Pooja.png`** — the event-card photos
  (`EVENT_IMAGES` in `script.js`). If one is missing, the card falls back to a
  photo from `moments/` (`EVENT_FALLBACK`).
- **`images/venue.jpg`** *(optional)* — a photo of the hall becomes the Wedding
  Venue section backdrop when present.

### To change the slideshow photos
1. Drop web-sized JPGs into `images/moments/` (keep them ~1200–1400px wide,
   quality ~82 — small files load fast for guests).
2. List them in the `MOMENTS` array in `script.js`.

Full-resolution originals are kept outside the site in the `ENGEGAMENT EDIT`
folder (not part of this repo).

## Other quick edits (all in `script.js`, top of file)
- `WEDDING_DATE` — date & time of the muhurta
- `VENUE_QUERY` — venue name used for the map & calendar
- Family names / events — edit the relevant sections in `index.html`
- **Music** — replace the `<source>` URL in `index.html` (`#bgMusic`) with
  your own file, e.g. `music/theme.mp3`
- Hashtag — edit `#AKASHKISALONEE` in the footer of `index.html`

## Publish with GitHub Pages
1. Create a public repository and upload every file in this folder.
2. **Settings → Pages → Deploy from a branch → `main` / root → Save**.
3. Share the URL GitHub gives you.
