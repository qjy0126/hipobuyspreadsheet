import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ProductGrid } from "@/components/product-card";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return buildMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: `/c/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.slug);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Browse", item: absoluteUrl("/browse") },
      { "@type": "ListItem", position: 3, name: category.name, item: absoluteUrl(`/c/${category.slug}`) },
    ],
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Hipobuy spreadsheet ${category.name}`,
    itemListElement: items.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/p/${product.slug}`),
      name: product.title,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <JsonLd data={[breadcrumbLd, itemListLd]} />
      <nav className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--ink)]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/browse" className="hover:text-[var(--ink)]">Browse</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">{category.name}</span>
      </nav>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
        {category.name}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">{category.description}</p>
      <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
        {items.length} finds in seed catalog
      </p>
      <div className="mt-12">
        <ProductGrid products={items} />
      </div>
      <section className="mt-16 max-w-3xl border-t border-[var(--line)] pt-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">How to use these {category.name.toLowerCase()} finds</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Open a product page, confirm the live Weidian / Taobao / 1688 listing, then paste the URL into Hipobuy or another agent.
          Review warehouse QC before international shipping. Findsheet does not process payments.
        </p>
        <Link href="/how-to-buy" className="mt-4 inline-block text-sm uppercase tracking-[0.12em] underline-offset-4 hover:underline">
          Full buying guide
        </Link>
      </section>
    </div>
  );
}
