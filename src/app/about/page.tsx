import type { Metadata } from "next";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `About ${site.name} — Independent Hipobuy Spreadsheet Directory`,
  description: site.disclaimer,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">About</h1>
      <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">{site.description}</p>
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{site.disclaimer}</p>
      <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl">Built for long-term SEO</h2>
      <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
        <li>Unique product URLs for brand/item long-tail queries</li>
        <li>Category landing pages with helpful copy and internal links</li>
        <li>Guide + agent clusters for informational keywords</li>
        <li>Sitemap, canonicals, robots and JSON-LD included</li>
      </ul>
    </div>
  );
}
