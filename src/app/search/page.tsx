import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-card";
import { SearchBox } from "@/components/search-box";
import { searchProducts } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

type Props = { searchParams: Promise<{ q?: string }> };

export const metadata: Metadata = buildMetadata({
  title: "Search Hipobuy Spreadsheet Finds",
  description: "Search Findsheet for brands, items and categories across the Hipobuy spreadsheet directory.",
  path: "/search",
  noIndex: true,
});

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const results = searchProducts(q);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-tight">Search</h1>
      <div className="mt-6 max-w-xl">
        <SearchBox initialQuery={q} />
      </div>
      <p className="mt-6 text-sm text-[var(--muted)]">
        {q ? `${results.length} results for “${q}”` : "Type a brand or item to filter the seed catalog."}
      </p>
      <div className="mt-10">
        <ProductGrid products={results} />
      </div>
    </div>
  );
}
