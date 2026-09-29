import Link from "next/link";
import type { Product } from "@/data/products";
import { formatCny } from "@/data/products";
import { getCategory } from "@/data/categories";

function toneFromSlug(slug: string): string {
  const tones = [
    "from-[#1a2332] to-[#2d3a4f]",
    "from-[#1f2a24] to-[#33483c]",
    "from-[#2a1f28] to-[#453040]",
    "from-[#1e2430] to-[#3a4558]",
    "from-[#242018] to-[#3f3a28]",
  ];
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) hash = (hash + slug.charCodeAt(i) * (i + 1)) % tones.length;
  return tones[hash];
}

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);

  return (
    <article className="group">
      <Link href={`/p/${product.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
        <div
          className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${toneFromSlug(product.slug)}`}
          aria-hidden
        >
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #fff 0.8px, transparent 1px)", backgroundSize: "12px 12px" }} />
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
            <span className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-white/90">
              {product.brand.slice(0, 1)}
            </span>
            <span className="text-xs uppercase tracking-[0.14em] text-white/70">{product.sourceHint}</span>
          </div>
        </div>
        <div className="mt-3 space-y-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-[0.95rem] font-medium leading-snug text-[var(--ink)] group-hover:text-[var(--ink)]">
              {product.title}
            </h3>
            <p className="shrink-0 font-[family-name:var(--font-display)] text-lg text-[var(--ink)]">
              {formatCny(product.priceCny)}
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
            {category?.shortName ?? product.category}
          </p>
        </div>
      </Link>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
