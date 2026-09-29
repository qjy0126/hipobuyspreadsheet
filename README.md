# Findsheet — SEO-first Hipobuy spreadsheet directory

Independent product-discovery site built to outrank guide-only competitors over time.

## Why this structure ranks better

- **Unique product pages** (`/p/[slug]`) for long-tail brand/item queries
- **Category hubs** (`/c/[slug]`) for head terms like “hipobuy spreadsheet shoes”
- **Guides + agents** for informational keywords without burying the catalog
- **Sitemap, robots, canonicals, JSON-LD** (WebSite, ItemList, Product, FAQ, HowTo, Article, Breadcrumb)

## Stack

- Next.js App Router (static generation for catalog routes)
- TypeScript + Tailwind CSS v4
- Server Components by default (fast Core Web Vitals)

## Setup

```bash
export PATH="$HOME/.local/node/bin:$PATH"   # if using local Node install
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before launch

1. Set your real domain in `src/data/site.ts` (`url` / `domain`)
2. Replace seed products in `src/data/products.ts` with your live catalog (CSV/API import)
3. Add real marketplace `sourceUrl` values and product images
4. Create `public/og.png` (1200×630)
5. Submit `https://YOURDOMAIN/sitemap.xml` in Google Search Console
6. Add analytics + affiliate disclosure if you use invite links

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
