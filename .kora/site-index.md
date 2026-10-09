# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: Facials in Hartford, CT | Skin Journey by Vanessa
purpose: Homepage for Facials by Vanessa CT (Skin Journey by Vanessa), a Downtown Hartford skin studio — a concern-led treatment finder, the full price menu, the virtual Complete Skin Journey Program, Vanessa's story, reviews, studio clips, visit details, FAQ and journal.
sections:
- `#top` — centered hero with headline, intro, find-my-treatment and booking buttons, rating line and a three-image gallery with category tags
- facts strip of four headline numbers: Google reviews, years of hands-on care, treatments & consults, virtual consultations
- `#concerns` "What would you like to change?" — concern finder: seven concern tabs, each panel recommending treatments with price and duration: Breakouts & acne, Dark spots & uneven tone, Dull or dehydrated, Texture & peach fuzz, Teen skin, Men's skin, I need a routine
- `#treatments` "Every treatment, every price, up front" — full menu as three category cards listing every service with price and duration, plus deposit and payment notes: Signature Facials & Targeted Treatments, Clinical Peels & Skin Resurfacing, Virtual Skin Consultations & Routine Planning, HydraFacial with Serum, Deep Pore Cleansing, Anti-Acne Facial, Anti-Acne Back, Men's Deluxe Facial, Teen Facial, Brightening Pigment Peel, Chemical Peel, Microdermabrasion, Dermaplaning, Complete Skin Journey Program, Products & Routine Consult, Virtual Consultation, Teen Consultation, Follow-up, Cherry
- `#virtual` "The Complete Skin Journey" — dark band for the three-month virtual program: price, month-by-month timeline and buttons: Month 1, Month 3
- `#about` "Skin care with patience, honesty and heart" — third-person founder story with studio photo, name card, signature quote and three pillars: Vanessa Gordon-McFarlene, Listen first, Eco-friendly, No pressure
- `#reviews` "Loved by clients across Hartford" — horizontally scrolling row of six Google review excerpts, link to all reviews
- `#studio` "A peek inside the treatment room" — four short looping clips filmed in the studio: HydraFacial infusion, Steam & prep, Detox mask, The after-glow
- `#visit` "Your first appointment, simplified" — four visit steps with amenity chips, the weekly hours table with today highlighted, and the address card with Google map: Wheelchair accessible, Valet parking
- `#faq` "Good to know" — seven-question FAQ accordion
- `#journal` "Skin advice from Vanessa" — three latest journal posts with category and published date, linking to the posts on the Zoca host
- `#closing-title` "Your skin journey starts with one visit" — closing badge logo with booking and call/text buttons
also: Treatment prices and durations appear in both the concern finder panels (#concerns) and the full menu cards (#treatments), plus the hero gallery tags and the program band (#virtual).
also: Studio hours live in the hours table (#visit), in site.js (the HOURS object that drives the open/closed status) and in the JSON-LD openingHoursSpecification.
also: Every Book button links to the Zoca booking platform rather than a page on this site, because booking is handled by Zoca.
also: Concern finder panels are hidden tab panels switched by site.js; a treatment shown in one concern must also stay in the full menu.
also: The open/closed status line is written by site.js from its own HOURS object, so an hours change must update site.js as well as the table.

## 404.html → /404
title: Page not found | Skin Journey by Vanessa
purpose: Platform not-found page (noindex) that sends visitors back to the homepage or to call.
sections:
- `#nf-title` "This page has moved on." — not-found message with homepage and call buttons

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `llms.txt` — business summary for AI crawlers, carried over from the previous site: Virtual Skin Consultations & Routine Planning, Signature Facials & Targeted Treatments, Clinical Peels & Skin Resurfacing  [content]
- `robots.txt` — 95 bytes — too small to hold content
- `sitemap.xml` — sitemap listing the homepage
- `assets/site.js` — behaviour only: header state, mobile menu, tabs, studio hours table highlight and open/closed status (with an HOURS object), scroll reveal, studio clips, 404 anchors: HOURS  [content]

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
