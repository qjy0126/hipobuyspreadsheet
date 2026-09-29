export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
  sections: { heading: string; body: string }[];
};

export const guides: Guide[] = [
  {
    slug: "what-is-a-hipobuy-spreadsheet",
    title: "What is a Hipobuy spreadsheet?",
    excerpt:
      "A Hipobuy spreadsheet is a curated directory of Weidian, Taobao and 1688 links you paste into a shopping agent — not an official Hipobuy Excel file.",
    publishedAt: "2026-09-20",
    seoTitle: "What is a Hipobuy Spreadsheet? Clear Definition (2026)",
    seoDescription:
      "Learn what a Hipobuy spreadsheet is, how Findsheet organizes finds, and how to move from a product link to warehouse QC and international shipping.",
    sections: [
      {
        heading: "Short definition",
        body: "A Hipobuy spreadsheet is community shorthand for a browsable collection of Chinese marketplace product links. You discover an item, open the live seller page, then paste that URL into Hipobuy (or another agent) to buy, store, QC and ship.",
      },
      {
        heading: "What Findsheet adds",
        body: "Findsheet turns the old slow-sheet habit into category hubs and product pages that search engines can index. Each card is a discovery lead with price context — not a checkout. Stock and final quotes always live on the source listing and your agent.",
      },
      {
        heading: "What it is not",
        body: "It is not Hipobuy itself, not a payment processor, and not a guarantee of authenticity or stock. Sellers change links without notice. Always re-check the live page and your own warehouse QC photos.",
      },
    ],
  },
  {
    slug: "how-to-buy-from-hipobuy",
    title: "How to buy from Hipobuy using spreadsheet links",
    excerpt:
      "Four steps: find a listing, paste into Hipobuy, review QC, then choose a shipping line.",
    publishedAt: "2026-09-22",
    seoTitle: "How to Buy from Hipobuy with Spreadsheet Links",
    seoDescription:
      "Step-by-step Hipobuy buying guide for Findsheet users: copy a Weidian / Taobao / 1688 link, pay item cost, review QC photos, and ship internationally.",
    sections: [
      {
        heading: "1. Find and verify",
        body: "Browse Findsheet by category or search. Open the source listing and confirm photos, variants, price and availability still match. Dead links are normal in this niche — skip or replace them.",
      },
      {
        heading: "2. Paste into Hipobuy",
        body: "Copy the product URL into Hipobuy (or CNFans, Kakobuy, Mulebuy, Sugargoo, AllChinaBuy, etc.). Choose size, color, batch notes and any value-added services, then pay the item stage.",
      },
      {
        heading: "3. Warehouse QC",
        body: "When the item arrives at the warehouse, review QC photos from multiple angles. GL only when you are comfortable. RL or return options depend on the agent and seller rules.",
      },
      {
        heading: "4. Ship and track",
        body: "Consolidate parcels, compare shipping lines by weight and destination, pay freight, then track to your door. Directory prices never include final international shipping.",
      },
    ],
  },
  {
    slug: "hipobuy-qc-photos-checklist",
    title: "Hipobuy QC photos checklist",
    excerpt:
      "What to inspect before you approve international shipping — shoes, tees, bags and electronics differ.",
    publishedAt: "2026-09-24",
    seoTitle: "Hipobuy QC Photos Checklist — What to Check Before Shipping",
    seoDescription:
      "A practical Hipobuy QC checklist for spreadsheet finds: silhouettes, prints, hardware, electronics rules, and when to ask for extra photos.",
    sections: [
      {
        heading: "Universal checks",
        body: "Ask for extra angles if logos, seams, stains or shape look off. Compare against the seller’s own photos and community references when you have them.",
      },
      {
        heading: "Category focus",
        body: "Shoes: toebox, heel, sole text. Tees: print edges and collar. Bags: hardware and stitching. Electronics: serial stickers and battery shipping rules for your country.",
      },
      {
        heading: "Mindset",
        body: "QC photos reduce risk; they do not eliminate it. Findsheet does not GL/RL for you — that decision stays with the buyer.",
      },
    ],
  },
  {
    slug: "best-hipobuy-spreadsheet-approach-2026",
    title: "Best Hipobuy spreadsheet approach in 2026",
    excerpt:
      "Volume alone is not enough — indexable product pages, fresh category hubs and honest disclaimers win long-term search traffic.",
    publishedAt: "2026-09-26",
    seoTitle: "Best Hipobuy Spreadsheet Approach 2026 — SEO & Buyer UX",
    seoDescription:
      "Why product-page Hipobuy spreadsheet directories outperform guide-only hubs: category SEO, unique product URLs, QC guidance and multi-agent compatibility.",
    sections: [
      {
        heading: "Match search intent",
        body: "People searching “hipobuy spreadsheet” want finds, not a sales pitch. Lead with browseable inventory, then support with guides.",
      },
      {
        heading: "Give every find a URL",
        body: "Unique product pages create long-tail rankings for brand + item queries. Category hubs capture head terms. Internal links pass relevance between them.",
      },
      {
        heading: "Stay independent and accurate",
        body: "Disclose affiliate relationships, remind buyers to verify live listings, and refresh catalog snapshots. Trust compounds into links and return visits.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
