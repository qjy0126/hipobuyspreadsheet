export type Product = {
  slug: string;
  title: string;
  brand: string;
  category: string;
  priceCny: number;
  summary: string;
  sourceHint: "Weidian" | "Taobao" | "1688";
  /** Placeholder marketplace URL pattern — replace with real seller links when loading catalog */
  sourceUrl: string;
  tags: string[];
  updatedAt: string;
};

function p(
  partial: Omit<Product, "updatedAt" | "sourceUrl"> & { id: string },
): Product {
  return {
    slug: partial.slug,
    title: partial.title,
    brand: partial.brand,
    category: partial.category,
    priceCny: partial.priceCny,
    summary: partial.summary,
    sourceHint: partial.sourceHint,
    tags: partial.tags,
    updatedAt: "2026-09-28",
    sourceUrl: `https://example.com/listing/${partial.id}`,
  };
}

/**
 * Seed catalog for structure / SEO. Replace with your real directory feed
 * (CSV/JSON API) — keep slug + category + unique title for long-tail ranking.
 */
export const products: Product[] = [
  p({
    id: "1001",
    slug: "comme-des-garcons-play-grey-tee",
    title: "Comme des Garçons Play Grey T-Shirt",
    brand: "Comme des Garçons",
    category: "t-shirts",
    priceCny: 117,
    summary:
      "Grey heart logo tee find — confirm print placement and size chart on the live listing before submitting to Hipobuy.",
    sourceHint: "Weidian",
    tags: ["tee", "logo", "streetwear"],
  }),
  p({
    id: "1002",
    slug: "nocta-black-short-sleeve-tee",
    title: "Nocta Black Short Sleeve T-Shirt",
    brand: "Nocta",
    category: "t-shirts",
    priceCny: 147,
    summary:
      "Black short-sleeve Nocta-style tee — check fabric weight photos and seller variants before you order.",
    sourceHint: "Weidian",
    tags: ["tee", "black", "nocta"],
  }),
  p({
    id: "1003",
    slug: "stussy-black-dice-graphic-tee",
    title: "Stussy Black Dice Graphic T-Shirt",
    brand: "Stussy",
    category: "t-shirts",
    priceCny: 114,
    summary:
      "Dice graphic tee — compare print sharpness across seller photos and community QC when available.",
    sourceHint: "Taobao",
    tags: ["tee", "graphic", "stussy"],
  }),
  p({
    id: "1004",
    slug: "supreme-white-logo-tee",
    title: "Supreme White Logo T-Shirt",
    brand: "Supreme",
    category: "t-shirts",
    priceCny: 111,
    summary:
      "White box-logo style tee — treat as a discovery lead; verify batch notes on the source page.",
    sourceHint: "Weidian",
    tags: ["tee", "logo", "supreme"],
  }),
  p({
    id: "1005",
    slug: "bape-white-short-sleeve-tee",
    title: "A Bathing Ape White Short Sleeve T-Shirt",
    brand: "A Bathing Ape",
    category: "t-shirts",
    priceCny: 116,
    summary:
      "White Bape-style tee — inspect ape head print edges in warehouse QC before approving shipment.",
    sourceHint: "1688",
    tags: ["tee", "bape", "white"],
  }),
  p({
    id: "1006",
    slug: "travis-fragment-low-sneakers",
    title: "Travis Fragment Low Sneakers",
    brand: "Nike",
    category: "shoes",
    priceCny: 420,
    summary:
      "Fragment low silhouette find — confirm size availability and sole batch photos on the live seller page.",
    sourceHint: "Weidian",
    tags: ["sneakers", "travis", "fragment"],
  }),
  p({
    id: "1007",
    slug: "dunk-panda-low-sneakers",
    title: "Panda Dunk Low Sneakers",
    brand: "Nike",
    category: "shoes",
    priceCny: 289,
    summary:
      "Black/white Dunk low find — check toebox shape and leather texture carefully in QC.",
    sourceHint: "Weidian",
    tags: ["sneakers", "dunk", "panda"],
  }),
  p({
    id: "1008",
    slug: "new-balance-550-white-grey",
    title: "New Balance 550 White Grey",
    brand: "New Balance",
    category: "shoes",
    priceCny: 310,
    summary:
      "550 white/grey colorway find — weigh shipping early; sneakers add parcel mass quickly.",
    sourceHint: "Taobao",
    tags: ["sneakers", "nb550"],
  }),
  p({
    id: "1009",
    slug: "salomon-xt6-black-sneakers",
    title: "Salomon XT-6 Black Trail Sneakers",
    brand: "Salomon",
    category: "shoes",
    priceCny: 398,
    summary:
      "XT-6 trail silhouette — confirm sole unit and mesh panels against reference photos before GL.",
    sourceHint: "Weidian",
    tags: ["sneakers", "salomon", "trail"],
  }),
  p({
    id: "1010",
    slug: "jordan-4-military-black",
    title: "Jordan 4 Military Black",
    brand: "Jordan",
    category: "shoes",
    priceCny: 455,
    summary:
      "Military Black Jordan 4 find — cage shape and heel tab are common QC focus points.",
    sourceHint: "Weidian",
    tags: ["sneakers", "jordan", "aj4"],
  }),
  p({
    id: "1011",
    slug: "essentials-fear-of-god-hoodie-black",
    title: "Essentials Fear of God Black Hoodie",
    brand: "Essentials",
    category: "hoodies",
    priceCny: 198,
    summary:
      "Black Essentials-style hoodie — check flocking/print and oversized fit notes on the listing.",
    sourceHint: "Weidian",
    tags: ["hoodie", "essentials", "fog"],
  }),
  p({
    id: "1012",
    slug: "stussy-basic-logo-hoodie-ash",
    title: "Stussy Basic Logo Hoodie Ash",
    brand: "Stussy",
    category: "hoodies",
    priceCny: 176,
    summary:
      "Ash grey logo hoodie — useful mid-weight haul piece; confirm sleeve length in size chart.",
    sourceHint: "Taobao",
    tags: ["hoodie", "stussy"],
  }),
  p({
    id: "1013",
    slug: "nike-tech-fleece-hoodie-grey",
    title: "Nike Tech Fleece Hoodie Grey",
    brand: "Nike",
    category: "hoodies",
    priceCny: 245,
    summary:
      "Tech fleece style hoodie — zipper quality and cuff finish are worth a close QC pass.",
    sourceHint: "Weidian",
    tags: ["hoodie", "tech-fleece"],
  }),
  p({
    id: "1014",
    slug: "canada-goose-expedition-parka-navy",
    title: "Canada Goose Expedition Parka Navy",
    brand: "Canada Goose",
    category: "jackets",
    priceCny: 680,
    summary:
      "Heavy parka find — expect high shipping weight; compare badges and zipper pull details carefully.",
    sourceHint: "Weidian",
    tags: ["jacket", "parka", "winter"],
  }),
  p({
    id: "1015",
    slug: "the-north-face-nuptse-black",
    title: "The North Face Nuptse Black Puffer",
    brand: "The North Face",
    category: "jackets",
    priceCny: 320,
    summary:
      "Nuptse-style puffer — loft and stitching lines should be checked in multi-angle QC photos.",
    sourceHint: "Taobao",
    tags: ["jacket", "puffer", "tnf"],
  }),
  p({
    id: "1016",
    slug: "carhartt-detroit-jacket-brown",
    title: "Carhartt Detroit Jacket Brown",
    brand: "Carhartt",
    category: "jackets",
    priceCny: 268,
    summary:
      "Detroit-style work jacket — blanket lining and pocket stitching are common QC checkpoints.",
    sourceHint: "1688",
    tags: ["jacket", "carhartt", "workwear"],
  }),
  p({
    id: "1017",
    slug: "cargo-pants-black-wide",
    title: "Black Wide Cargo Pants",
    brand: "Unbranded",
    category: "pants-shorts",
    priceCny: 129,
    summary:
      "Wide cargo pants — measure inseam and thigh on the seller chart; fits vary heavily by batch.",
    sourceHint: "Weidian",
    tags: ["pants", "cargo", "wide"],
  }),
  p({
    id: "1018",
    slug: "denim-tears-jeans-indigo",
    title: "Denim Tears Indigo Jeans",
    brand: "Denim Tears",
    category: "pants-shorts",
    priceCny: 210,
    summary:
      "Indigo denim find — wash and embroidery placement need a careful QC review.",
    sourceHint: "Weidian",
    tags: ["jeans", "denim"],
  }),
  p({
    id: "1019",
    slug: "nike-sportswear-shorts-black",
    title: "Nike Sportswear Shorts Black",
    brand: "Nike",
    category: "pants-shorts",
    priceCny: 89,
    summary:
      "Black sportswear shorts — light haul filler; still confirm logo embroidery before shipping.",
    sourceHint: "Taobao",
    tags: ["shorts", "nike"],
  }),
  p({
    id: "1020",
    slug: "lv-keepall-bandouliere-bag",
    title: "Louis Vuitton Keepall Bandouliere Bag",
    brand: "Louis Vuitton",
    category: "bags",
    priceCny: 520,
    summary:
      "Keepall-style travel bag — leather/canvas texture and hardware stamp are priority QC items.",
    sourceHint: "Weidian",
    tags: ["bag", "keepall", "lv"],
  }),
  p({
    id: "1021",
    slug: "chrome-hearts-cross-body-bag",
    title: "Chrome Hearts Cross Body Bag",
    brand: "Chrome Hearts",
    category: "bags",
    priceCny: 340,
    summary:
      "Cross-body bag find — zipper pull and leather edges deserve a close warehouse photo pass.",
    sourceHint: "Weidian",
    tags: ["bag", "chrome-hearts"],
  }),
  p({
    id: "1022",
    slug: "hermes-belt-black-gold",
    title: "Hermès Black Gold Buckle Belt",
    brand: "Hermès",
    category: "accessories",
    priceCny: 188,
    summary:
      "Belt find — buckle finish and leather stamp clarity are the main QC focus.",
    sourceHint: "Taobao",
    tags: ["belt", "accessory"],
  }),
  p({
    id: "1023",
    slug: "chrome-hearts-cross-pendant",
    title: "Chrome Hearts Cross Pendant",
    brand: "Chrome Hearts",
    category: "accessories",
    priceCny: 95,
    summary:
      "Cross pendant find — check casting sharpness and chain clasp in close-up QC shots.",
    sourceHint: "Weidian",
    tags: ["jewelry", "pendant"],
  }),
  p({
    id: "1024",
    slug: "rolex-submariner-homage",
    title: "Submariner Style Dive Watch",
    brand: "Homage",
    category: "watches",
    priceCny: 450,
    summary:
      "Dive watch homage — movement type and bezel action should be confirmed with the seller before paying.",
    sourceHint: "1688",
    tags: ["watch", "dive"],
  }),
  p({
    id: "1025",
    slug: "casio-gshock-black",
    title: "G-Shock Style Black Digital Watch",
    brand: "Casio",
    category: "watches",
    priceCny: 120,
    summary:
      "Digital watch find — lighter shipping than mechanical pieces; still verify module functions.",
    sourceHint: "Taobao",
    tags: ["watch", "digital"],
  }),
  p({
    id: "1026",
    slug: "brazil-home-jersey-2024",
    title: "Brazil Home Football Jersey",
    brand: "Nike",
    category: "jerseys",
    priceCny: 99,
    summary:
      "Brazil home kit style jersey — print heat and collar stitching are common RL reasons.",
    sourceHint: "Weidian",
    tags: ["jersey", "football", "brazil"],
  }),
  p({
    id: "1027",
    slug: "argentina-away-jersey-messi",
    title: "Argentina Away Jersey Messi Print",
    brand: "Adidas",
    category: "jerseys",
    priceCny: 105,
    summary:
      "Argentina away jersey find — name/number set alignment should be checked in QC.",
    sourceHint: "Weidian",
    tags: ["jersey", "argentina", "messi"],
  }),
  p({
    id: "1028",
    slug: "airpods-max-silver-homage",
    title: "AirPods Max Style Over-Ear Headphones",
    brand: "Homage",
    category: "electronics",
    priceCny: 280,
    summary:
      "Over-ear headphone find — confirm battery rules for your country before international shipping.",
    sourceHint: "1688",
    tags: ["headphones", "audio"],
  }),
  p({
    id: "1029",
    slug: "sony-wh1000xm-style-headphones",
    title: "WH-1000XM Style Noise Cancelling Headphones",
    brand: "Homage",
    category: "electronics",
    priceCny: 260,
    summary:
      "ANC headphone find — electronics can face stricter customs; declare carefully with your agent.",
    sourceHint: "Taobao",
    tags: ["headphones", "anc"],
  }),
  p({
    id: "1030",
    slug: "new-era-yankees-fitted-cap",
    title: "New Era Yankees Fitted Cap",
    brand: "New Era",
    category: "headwear",
    priceCny: 78,
    summary:
      "Yankees fitted cap find — brim curve and embroidery density are the usual QC checks.",
    sourceHint: "Weidian",
    tags: ["cap", "new-era", "yankees"],
  }),
  p({
    id: "1031",
    slug: "stussy-stock-beanie-black",
    title: "Stussy Stock Logo Beanie Black",
    brand: "Stussy",
    category: "headwear",
    priceCny: 65,
    summary:
      "Black stock logo beanie — light filler item for parcels that still need QC on knit quality.",
    sourceHint: "Taobao",
    tags: ["beanie", "stussy"],
  }),
  p({
    id: "1032",
    slug: "acne-studios-scarf-women",
    title: "Acne Studios Style Wool Scarf",
    brand: "Acne Studios",
    category: "women",
    priceCny: 145,
    summary:
      "Wool scarf find — fringe finish and logo tag placement should be reviewed in QC.",
    sourceHint: "Weidian",
    tags: ["women", "scarf"],
  }),
  p({
    id: "1033",
    slug: "skims-style-bodysuit-black",
    title: "Skims Style Black Bodysuit",
    brand: "Skims",
    category: "women",
    priceCny: 98,
    summary:
      "Bodysuit find — stretch fabric and seam placement vary; use size chart + QC photos.",
    sourceHint: "Taobao",
    tags: ["women", "bodysuit"],
  }),
  p({
    id: "1034",
    slug: "ugg-style-platform-boot-women",
    title: "UGG Style Platform Boot",
    brand: "UGG",
    category: "women",
    priceCny: 230,
    summary:
      "Platform boot find — sole height and lining density add weight; plan shipping early.",
    sourceHint: "Weidian",
    tags: ["women", "boots"],
  }),
  p({
    id: "1035",
    slug: "amiri-black-white-tee",
    title: "Amiri Black and White Short Sleeve T-Shirt",
    brand: "Amiri",
    category: "t-shirts",
    priceCny: 109.82,
    summary:
      "Amiri-style contrast tee — print crackling and collar shape are worth a QC pause.",
    sourceHint: "Weidian",
    tags: ["tee", "amiri"],
  }),
  p({
    id: "1036",
    slug: "balenciaga-triple-s-white",
    title: "Balenciaga Triple S White Sneakers",
    brand: "Balenciaga",
    category: "shoes",
    priceCny: 480,
    summary:
      "Triple S silhouette find — sole stack and mudguard paint are common QC focus areas.",
    sourceHint: "Weidian",
    tags: ["sneakers", "balenciaga"],
  }),
];

export function getProduct(slug: string): Product | undefined {
  return products.find((item) => item.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((item) => item.category === category);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((item) => {
    const hay = `${item.title} ${item.brand} ${item.tags.join(" ")} ${item.summary}`.toLowerCase();
    return hay.includes(q);
  });
}

export function relatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .slice(0, limit);
}

export function formatCny(amount: number): string {
  return `¥${amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2)}`;
}
