IMAGES — all local, no Google Drive dependency
================================================

Event-card photos (Events Schedule):
  Haldi.png   ->  Haldi card
  Vivah.png   ->  Vivah (wedding) card
  Pooja.png   ->  Pooja card
  (If one is missing, the card falls back to a photo from moments/.)

Slideshow photos ("Our Moments"):
  moments/m01.jpg ... m14.jpg   (web-optimized, ~1400px, curated couple shots)
  The list lives in EVENT_FALLBACK / MOMENTS near the top of ../script.js.

Optional venue backdrop:
  venue.jpg   ->  becomes the background of the Wedding Venue section
                  (drop a landscape photo of the hall here; optional).

To change slideshow photos: add web-sized JPGs to moments/ and update the
MOMENTS array in ../script.js. Keep them small (~1200-1400px, quality ~82)
so the page loads fast for guests.

Full-resolution originals are kept separately in the "ENGEGAMENT EDIT" folder.
