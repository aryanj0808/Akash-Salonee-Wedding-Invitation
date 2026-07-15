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
- 👪 **The Families** — Groom's & Bride's sides
- 📷 **Photo gallery** with lightbox (arrow-key navigation)
- 📍 **Google Maps** venue + **Get Directions** button
- 📱 **Share** buttons — WhatsApp, native share, copy link
- 🌙 **Dark / Light** mode toggle (remembers your choice)
- 🌐 **English / Marathi** language switch
- 🎆 **Confetti** burst when the countdown hits zero
- 📡 **PWA** — installable, works offline

---

## Photos (Google Drive)
The slideshow, event-card photos and gallery all read from the **`PHOTOS`**
list near the top of `script.js`. It is **already filled in** with the 92
image file IDs from your shared Drive folder, so photos appear automatically.

The images are loaded through Google Drive's thumbnail endpoint:
`https://drive.google.com/thumbnail?id=<FILE_ID>&sz=w1600`

> ⚠️ For the photos to be visible to guests, the Drive folder (or the
> individual files) must be shared as **"Anyone with the link → Viewer"**.

### To change which photos are used
Edit the `PHOTOS` array in `script.js`. To add a new photo:
1. In Google Drive, right-click the image → **Share** → *"Anyone with the link"* → **Copy link**:
   `https://drive.google.com/file/d/`**`1AbCd...XyZ`**`/view?usp=sharing`
2. Copy the bold middle part — that's the **file ID** — and add it to `PHOTOS`.

The site then picks:
- **14** evenly-spread photos for the slideshow,
- **12** for the gallery grid,
- **3** for the Haldi / Vivah / Pooja event cards.

Change these counts in `script.js` (`SLIDES`, `GALLERY`, `EVENT_PHOTOS`).

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
