import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ProductGrid } from "@/components/product-card";
import { getCategory } from "@/data/categories";
import {
  formatCny,
  getProduct,
  products,
  relatedProducts,
} from "@/data/products";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.title} — Hipobuy Spreadsheet Find`,
    description: `${product.title} from the Findsheet Hipobuy spreadsheet. Est. ${formatCny(product.priceCny)} · ${product.sourceHint}. Confirm the live listing, then paste into Hipobuy for QC and shipping.`,
    path: `/p/${product.slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = relatedProducts(product);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      ...(category
        ? [{ "@type": "ListItem", position: 2, name: category.name, item: absoluteUrl(`/c/${category.slug}`) }]
        : []),
      {
        "@type": "ListItem",
        position: category ? 3 : 2,
        name: product.title,
        item: absoluteUrl(`/p/${product.slug}`),
      },
    ],
  };

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.summary,
    brand: { "@type": "Brand", name: product.brand },
    category: category?.name,
    offers: {
      "@type": "Offer",
      priceCurrency: "CNY",
      price: product.priceCny,
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/p/${product.slug}`),
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <JsonLd data={[breadcrumbLd, productLd]} />
      <nav className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--ink)]">Home</Link>
        {category ? (
          <>
            <span className="mx-2">/</span>
            <Link href={`/c/${category.slug}`} className="hover:text-[var(--ink)]">{category.name}</Link>
          </>
        ) : null}
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">Find</span>
      </nav>

      <div className="mt-8 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div className="aspect-[4/5] border border-[var(--line)] bg-[var(--ink)] p-6 text-[var(--paper)]">
          <p className="text-xs uppercase tracking-[0.18em] text-white/60">{product.sourceHint}</p>
          <p className="mt-8 font-[family-name:var(--font-display)] text-6xl leading-none">{product.brand.slice(0, 2)}</p>
          <p className="mt-auto pt-24 text-sm text-white/70">Replace with product image when catalog is connected.</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{product.brand}</p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
            {product.title}
          </h1>
          <p className="mt-4 font-[family-name:var(--font-display)] text-3xl">{formatCny(product.priceCny)}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
            Estimate · confirm on source listing
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--muted)]">{product.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={product.sourceUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-[var(--ink)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--paper)]"
            >
              Open source listing
            </a>
            <Link
              href="/how-to-buy"
              className="border border-[var(--ink)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em]"
            >
              Paste into Hipobuy
            </Link>
          </div>

          <div className="mt-10 border border-[var(--line)] bg-[var(--paper)]/70 p-5 text-sm leading-relaxed text-[var(--muted)]">
            <p className="text-[var(--ink)]">Buyer checklist</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>Confirm stock, size and photos on the live marketplace page.</li>
              <li>Paste the URL into Hipobuy (or CNFans / Kakobuy / Mulebuy / Sugargoo).</li>
              <li>Review warehouse QC photos before approving international shipping.</li>
            </ol>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">Related {category?.name ?? "finds"}</h2>
          <div className="mt-8">
            <ProductGrid products={related} />
          </div>
        </section>
      ) : null}
    </div>
  );
}
