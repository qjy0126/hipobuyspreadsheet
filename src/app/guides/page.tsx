import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hipobuy Spreadsheet Guides & QC Tips",
  description:
    "Practical Findsheet guides: what a Hipobuy spreadsheet is, how to buy through agents, and QC photo checklists.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">Guides</h1>
      <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
        Informational pages that support catalog SEO — answer “how / what / best” queries without hiding the spreadsheet.
      </p>
      <div className="mt-12 space-y-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="block border border-[var(--line)] bg-[var(--paper)]/70 p-6 transition-colors hover:border-[var(--ink)]"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{guide.publishedAt}</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">{guide.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{guide.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
