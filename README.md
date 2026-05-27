# Expensplit — Marketing & Legal Website

Next.js 14 (App Router) marketing site for **Expensplit**, deployed at
`https://expensplit.futureoxtech.com`.

## What's inside

- App Router with full SEO metadata (Open Graph, Twitter cards, JSON-LD for Organization, MobileApplication, WebSite, FAQ).
- Auto-generated `sitemap.xml`, `robots.txt`, and PWA `manifest.webmanifest`.
- Tailwind CSS with the Expensplit brand palette (purple → mint gradient).
- Pages: Home, Download, FAQ, Support, Contact, Privacy Policy, Terms & Conditions, Cookie Policy, Delete Account, 404.
- SVG logo set (color, mono, favicon, og-image) in `public/`.
- Strict-Transport-Security and other security headers in `next.config.js`.

## Quick start

```bash
cd website
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Deploy

The site is a static-friendly Next.js app. Deploy options:

- **Vercel** (recommended): push to GitHub and point the project's domain to `expensplit.futureoxtech.com`.
- **Self-host**: `npm run build && npm start` behind nginx/Caddy. Set `NODE_ENV=production`.
- **Static export**: add `output: 'export'` to `next.config.js` and run `npm run build` to produce `out/`.

### DNS for the subdomain

At your DNS provider for `futureoxtech.com`, add:

```
CNAME  expensplit  ->  <your-host>.vercel.app
```

(For Vercel) or an `A`/`AAAA` record pointing to your server's IP.

## Play Store readiness

This site fulfils Google Play Console requirements:

- **Privacy Policy URL**: `https://expensplit.futureoxtech.com/privacy-policy`
- **Account deletion URL**: `https://expensplit.futureoxtech.com/delete-account`
- **Support email**: configured in `src/lib/site.ts` (`SITE.email`)

The Privacy Policy explicitly covers Google Play Data Safety declarations
(data collected, purpose, sharing, security practices, and deletion).

## Editing content

- Brand strings, emails, dates, URLs: `src/lib/site.ts`
- Global metadata: `src/app/layout.tsx`
- Theme colors: `tailwind.config.ts`
- Legal copy: `src/app/privacy-policy/page.tsx`, `src/app/terms/page.tsx`, `src/app/cookies/page.tsx`
