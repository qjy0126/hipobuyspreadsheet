import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ProductGrid } from "@/components/product-card";
import { SearchBox } from "@/components/search-box";
import { SiteLogo } from "@/components/site-logo";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { site } from "@/data/site";
import { guides } from "@/data/guides";
import { absoluteUrl } from "@/lib/seo";

const faqs = [
  {
    question: "What is the best Hipobuy spreadsheet to use?",
    answer:
      "Use a directory with unique product pages, fresh category hubs, and clear QC guidance. Findsheet is built as an independent Hipobuy spreadsheet alternative focused on browse speed and long-term search visibility.",
  },
  {
    question: "Is Findsheet affiliated with Hipobuy?",
    answer:
      "No. Findsheet is independent and does not sell products or process orders. Paste source links into Hipobuy or another agent to checkout.",
  },
  {
    question: "How do I check Hipobuy QC photos?",
    answer:
      "After the item reaches the warehouse, open QC photos in your agent account. Inspect logos, shape, stitching and defects before approving international shipping.",
  },
];

export default function HomePage() {
  const latest = products.slice(0, 12);

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: absoluteUrl(site.logo),
    description: site.description,
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { "@type": "Organization", name: site.name, logo: absoluteUrl(site.logo) },
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latest Hipobuy spreadsheet finds",
    itemListElement: latest.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/p/${product.slug}`),
      name: product.title,
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={[orgLd, websiteLd, itemListLd, faqLd]} />

      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden>
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-end md:px-6 md:py-24">
          <div>
            <div className="flex items-center gap-4 md:gap-5">
              <SiteLogo size={88} priority className="size-[4.5rem] md:size-[5.5rem]" />
              <p className="font-[family-name:var(--font-display)] text-5xl leading-[0.92] tracking-tight text-[var(--ink)] md:text-7xl">
                {site.name}
              </p>
            </div>
            <h1 className="mt-6 max-w-xl text-xl leading-snug text-[var(--ink)] md:text-2xl">
              Hipobuy spreadsheet built for search — product pages, category hubs, and QC-first shopping guidance.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
              Browse finds, open Weidian / Taobao / 1688 listings, paste into Hipobuy. Independent directory — not operated by Hipobuy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/browse"
                className="bg-[var(--ink)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--paper)]"
              >
                Browse spreadsheet
              </Link>
              <Link
                href="/how-to-buy"
                className="border border-[var(--ink)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink)]"
              >
                How to buy
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <SearchBox large />
            <div className="grid grid-cols-3 gap-3 border border-[var(--line)] bg-[var(--paper)]/70 p-4">
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl">{site.listingCountLabel}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-[var(--muted)]">Target listings</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl">{categories.length}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-[var(--muted)]">Categories</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl">SEO</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-[var(--muted)]">Product URLs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">Browse by category</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Each hub is a unique, indexable landing page for long-term SEO.</p>
          </div>
          <Link href="/browse" className="text-sm uppercase tracking-[0.12em] text-[var(--ink)] underline-offset-4 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/c/${category.slug}`}
              className="border border-[var(--line)] bg-[var(--paper)] px-3 py-4 transition-colors hover:border-[var(--ink)] hover:bg-[var(--accent)]"
            >
              <span className="font-[family-name:var(--font-display)] text-lg">{category.shortName}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--paper)]/50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">Latest spreadsheet finds</h2>
            <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
              Seed catalog for structure. Swap in your live feed — every product already has its own URL for long-tail ranking.
            </p>
          </div>
          <ProductGrid products={latest} />
          <div className="mt-10">
            <Link href="/browse" className="bg-[var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent-ink)]">
              Browse all finds
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">Why Findsheet ranks better over time</h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
              <li><strong className="text-[var(--ink)]">Unique product pages</strong> — long-tail brand/item queries competitors leave on the homepage.</li>
              <li><strong className="text-[var(--ink)]">Category hubs</strong> — one clear page per shopping intent with internal links into products.</li>
              <li><strong className="text-[var(--ink)]">Agent + guide cluster</strong> — capture informational keywords without burying the catalog.</li>
              <li><strong className="text-[var(--ink)]">Schema + sitemap</strong> — ItemList, Product, FAQ and Breadcrumb JSON-LD ready for Google.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">Guides</h2>
            <div className="mt-6 space-y-4">
              {guides.map((guide) => (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block border-b border-[var(--line)] pb-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{guide.publishedAt}</p>
                  <p className="mt-1 text-lg text-[var(--ink)]">{guide.title}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{guide.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--paper-2)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">FAQ</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-[var(--line)] pb-6">
                <h3 className="text-lg text-[var(--ink)]">{faq.question}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
