<!-- Design decision for Facials by Vanessa CT / Skin Journey by Vanessa (PROD). Source: Claude Code homepage concept B - Ivory Ritual,
     rebuilt as static HTML for Kora (homepage + 404). Concept file: homepage-variants/variant-b-ivory.html -->

# DESIGN.md: Skin Journey by Vanessa

archetype: ivory-ritual
interaction_level: L2

typography:
  display: "Cormorant Garamond"
  body: "Jost"
  script: "Great Vibes"   # accents only (a hero line, signature, CTA)

palette:
  primary: "#A87A2C"
  secondary: "#F6F1E8"
  accent: "#2A2116"
  application: |
    Ivory #F6F1E8 ground with #EFE7DA bands and #FBF8F2 cards, espresso #2A2116 text and dark bands, deep gold #A87A2C accent (italic emphasis), blush #E9D5C5 closing gradient. Cormorant Garamond display, Jost body, Great Vibes signature. Rounded 18px cards, arched image frames, pill buttons.

composition: |
  Centered hero with arched three-image gallery; facts strip; 'What would you like to change?' concern finder (7 concerns → matching treatments with prices); full menu in three cards; dark Complete Skin Journey band; About Vanessa; swipeable review row; real treatment clips; visit steps + hours + map; FAQ; journal; badge closing; espresso footer.

content_rules:
  - Display name "Facials by Vanessa CT"; brand mark "Skin Journey by Vanessa" (redrawn gold logo). Owner: Vanessa Gordon-McFarlene.
  - Prices, durations and deposits exactly as on the Zoca menu (15 services, 3 categories). $30 deposit for in-studio; virtual paid at booking.
  - Reviews are verbatim Google excerpts (surnames initialised); rating 4.9 from 66 Google reviews.
  - Hours from the Google Business Profile: Mon/Wed/Thu 11–7, Tue 11:30–7, Fri 4–7, Sat 11–5, Sun 3–6; virtual 10–5 daily.
  - Book CTAs -> https://facialsbyvanessactskinjourney.zoca.com/services (Zoca booking). No on-site forms.
  - "7+ years" (GBP) — the old site said 9; owner to confirm. About copy is a draft pending owner approval.
  - Stock lifestyle photos are Unsplash (free licence); the at-work photo and four clips are the owner's own.

files:
  - index.html / 404.html share byte-identical kora:shell header/footer blocks (header includes the top bar and mobile menu; footer includes the mobile Call/Book bar).
  - src/input.css holds @theme tokens and the page CSS in @layer components; assets/styles.css is compiled at deploy.
  - assets/site.js: header state, mobile menu, tabs, today's hours/open status, reveal, clips, 404 anchor rewrite.
  - Images are local WebP in assets/img, clips are MP4 + WebP posters in assets/video, logos are PNG in assets/logo.
