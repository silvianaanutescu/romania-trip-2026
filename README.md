# Drum Bun — Romania 2026 Trip Companion

A mobile-first trip companion site built for a real trip: nine days, four people (Silvi, Abi, Lotta, Jose), five cities across Romania, 07–15 August 2026.

**Live:** deployed via GitHub Pages (see below).

## Why this exists

Group trips fall apart in the gap between a shared spreadsheet nobody opens and a WhatsApp thread nobody can search. This site is the single source of truth for the group: what's happening today, who's where, what the address is, and what to know about the next city — on a phone, offline-friendly.

## Priorities, in order

1. **Logistics first.** The Days tab (dates, events, addresses, who's arriving/leaving) was built and correct before any content polish happened. If the trip breaks, this is the part that can't be wrong.
2. **Content second.** City guides, currency, weather, and etiquette are being filled in city-by-city, only shortly before we arrive, so the research stays current and doesn't get stale sitting unused for months.
3. **Craft as differentiator.** Once the logistics were solid, the visual identity (Romanian folk-art motifs, passport-stamp city icons, a hand-tuned image marquee) became the place to invest — this is also a portfolio piece, so the details matter.

## Stack

Vanilla HTML/CSS/JS. No framework, no build step, no dependencies. Deliberate: the entire audience is four people on their phones for nine days, and a static single-page app is the simplest thing that reliably works with no maintenance burden mid-trip.

- `index.html` — markup/structure
- `styles.css` — design system (colors, type, layout)
- `app.js` — data (crew, itinerary, city content) + render logic
- `auth.js` — Google sign-in gate + email allowlist (see below)
- `assets/images/` — trip photography for the welcome-page marquee

## Access: Google sign-in gate

The site is behind a Google sign-in screen — only the Google accounts listed in `auth.js` can see the itinerary. This is a client-side gate on a static site with no backend: it stops casual visitors and search engines, verified against a real Google identity rather than a shared password, but it doesn't hide the underlying JS data files from someone who deliberately fetches them by URL. That would need a real backend, which is out of scope for a free static site serving four people.

**One-time setup (do this yourself, it's your Google account):**

1. Go to [console.cloud.google.com](https://console.cloud.google.com) → create/select a project.
2. **APIs & Services → OAuth consent screen** → User type "External" → fill in app name + your email → add each guest's email under "Test users" (keeps the app in Testing status, which is an extra access layer — nobody outside that list can even attempt to sign in).
3. **APIs & Services → Credentials → Create Credentials → OAuth client ID** → Application type "Web application" → under "Authorized JavaScript origins" add `https://<your-username>.github.io` and `http://localhost:8743` (or whatever port you use for local testing).
4. Copy the generated client ID (ends in `.apps.googleusercontent.com`).
5. In `auth.js`, set `GOOGLE_CLIENT_ID` to that value and add each guest's email to `ALLOWED_EMAILS`.

## Notable implementation detail: the image marquee

The welcome page has a continuously scrolling photo strip. Early versions used `scrollLeft` / scroll-snap and it visibly stuttered on mobile Safari. The current version renders the image list twice back-to-back and drives a single `transform: translateX()` on a `requestAnimationFrame` loop, using delta-time (not frame count) for consistent speed regardless of frame rate, with the offset wrapped via modulo against one image-set's width so the loop is seamless. Mouse and touch input set the offset directly during interaction and hand back to the automatic drift immediately on release, with no snap-back.

## Known gaps (working through these next)

- Brașov / Bran / Constanța & Corbu city guide content (Bucharest is done, sourced and fact-checked)
- Casa Adrian (Corbu) exact address / booking link
- Live weather (planned: [Open-Meteo](https://open-meteo.com/), no API key required)
- Live/current RON exchange rate
- Do's & Don'ts section

## A note on image sourcing

One trip photo (`haystacks-countryside.jpg`) carries a visible stock-photo watermark. Fine for private/group use; if this repo is ever made public, that image should be replaced with an owned or licensed photo, or properly attributed.

## Deployment

Deployed automatically to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`. To set up on a new repo: push to `main`, then enable Pages in the repo settings with source "GitHub Actions".
