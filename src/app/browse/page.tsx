import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-card";
import { SearchBox } from "@/components/search-box";
import { JsonLd } from "@/components/json-ld";
import { products } from "@/data/products";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Browse Hipobuy Spreadsheet Finds",
  description:
    "Browse the full Findsheet Hipobuy spreadsheet directory — search brands and categories, open source listings, paste into your shopping agent.",
  path: "/browse",
});

export default function BrowsePage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "All Hipobuy spreadsheet finds",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/p/${product.slug}`),
      name: product.title,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <JsonLd data={itemListLd} />
      <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
        Browse spreadsheet
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
        Seed catalog shown for SEO structure. Replace with your live product feed — keep unique slugs and category pages.
      </p>
      <div className="mt-8 max-w-xl">
        <SearchBox />
      </div>
      <div className="mt-12">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
