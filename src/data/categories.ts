export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

export const categories: Category[] = [
  {
    slug: "shoes",
    name: "Shoes",
    shortName: "Shoes",
    description:
      "Sneakers and footwear finds from Weidian, Taobao and 1688 — browse batches, compare prices, then paste the source link into Hipobuy.",
    seoTitle: "Hipobuy Spreadsheet Shoes — Sneakers & Footwear Finds",
    seoDescription:
      "Browse Hipobuy spreadsheet shoes finds with prices and source links. Compare sneakers, open live Weidian / Taobao listings, then order via Hipobuy with warehouse QC.",
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    shortName: "Tees",
    description:
      "Graphic tees and logo shirts curated for agent shopping — check variants on the source page before you submit the link.",
    seoTitle: "Hipobuy Spreadsheet T-Shirts — Graphic Tees & Logo Finds",
    seoDescription:
      "Hipobuy spreadsheet t-shirt finds with category browse, price context and marketplace links for Hipobuy, CNFans and other agents.",
  },
  {
    slug: "hoodies",
    name: "Hoodies",
    shortName: "Hoodies",
    description:
      "Hoodies and sweaters for haul planning — weigh shipping cost against batch quality using warehouse QC after arrival.",
    seoTitle: "Hipobuy Spreadsheet Hoodies — Sweaters & Fleece Finds",
    seoDescription:
      "Browse hoodie finds from the Hipobuy spreadsheet directory. Copy seller links into Hipobuy and review QC photos before international shipping.",
  },
  {
    slug: "jackets",
    name: "Jackets",
    shortName: "Jackets",
    description:
      "Outerwear finds with heavier shipping weight — plan parcel lines early and confirm measurements on the live listing.",
    seoTitle: "Hipobuy Spreadsheet Jackets — Outerwear Finds & Links",
    seoDescription:
      "Jacket finds for Hipobuy spreadsheet shoppers: source links, price context and category guidance for safer haul planning.",
  },
  {
    slug: "pants-shorts",
    name: "Pants & Shorts",
    shortName: "Bottoms",
    description:
      "Jeans, cargos and shorts organized for fast shortlisting — always verify size charts on the seller page.",
    seoTitle: "Hipobuy Spreadsheet Pants & Shorts — Bottoms Finds",
    seoDescription:
      "Pants and shorts from an independent Hipobuy spreadsheet directory. Browse, open source listings, paste into your agent.",
  },
  {
    slug: "bags",
    name: "Bags",
    shortName: "Bags",
    description:
      "Crossbody, tote and backpack finds — inspect hardware and stitching closely in warehouse QC photos.",
    seoTitle: "Hipobuy Spreadsheet Bags — Crossbody, Tote & Backpack Finds",
    seoDescription:
      "Bag finds for Hipobuy and multi-agent checkout. Compare prices, open Weidian / Taobao links, review QC before shipping.",
  },
  {
    slug: "accessories",
    name: "Accessories",
    shortName: "Accessories",
    description:
      "Belts, wallets, jewelry and small goods — low weight fillers that still need QC checks for finish quality.",
    seoTitle: "Hipobuy Spreadsheet Accessories — Belts, Wallets & More",
    seoDescription:
      "Accessory finds in a browsable Hipobuy spreadsheet format with prices, categories and agent-ready source links.",
  },
  {
    slug: "watches",
    name: "Watches",
    shortName: "Watches",
    description:
      "Watch finds for careful buyers — treat every listing as a lead and verify seller details before paying item cost.",
    seoTitle: "Hipobuy Spreadsheet Watches — Timepiece Finds & Links",
    seoDescription:
      "Browse watch finds from the Findsheet Hipobuy spreadsheet directory. Confirm source pages and warehouse QC before shipping.",
  },
  {
    slug: "jerseys",
    name: "Jerseys",
    shortName: "Jerseys",
    description:
      "Football and sports jerseys — check printing quality and sizing notes on the live marketplace listing.",
    seoTitle: "Hipobuy Spreadsheet Jerseys — Football & Sports Kit Finds",
    seoDescription:
      "Jersey finds organized for Hipobuy spreadsheet browsing with price context and Weidian / Taobao source links.",
  },
  {
    slug: "electronics",
    name: "Electronics",
    shortName: "Electronics",
    description:
      "Headphones and gadgets — confirm battery / plug rules for your destination country before you ship.",
    seoTitle: "Hipobuy Spreadsheet Electronics — Headphones & Gadget Finds",
    seoDescription:
      "Electronics finds for agent shopping via Hipobuy. Browse the directory, verify listings, and plan shipping carefully.",
  },
  {
    slug: "headwear",
    name: "Headwear",
    shortName: "Hats",
    description:
      "Caps and beanies that pack light — useful haul fillers when you already have heavier items in warehouse.",
    seoTitle: "Hipobuy Spreadsheet Headwear — Caps & Beanie Finds",
    seoDescription:
      "Headwear finds from Findsheet’s Hipobuy spreadsheet directory — browse, copy links, order through your preferred agent.",
  },
  {
    slug: "women",
    name: "Women",
    shortName: "Women",
    description:
      "Women’s streetwear and wardrobe finds — filter by category intent, then confirm measurements on the source page.",
    seoTitle: "Hipobuy Spreadsheet Women — Streetwear & Wardrobe Finds",
    seoDescription:
      "Women’s finds in a Hipobuy spreadsheet directory with prices, categories and marketplace links for agent checkout.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
