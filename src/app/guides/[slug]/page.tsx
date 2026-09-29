import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getGuide, guides } from "@/data/guides";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    dateModified: guide.publishedAt,
    mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}`),
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <JsonLd data={articleLd} />
      <Link href="/guides" className="text-xs uppercase tracking-[0.14em] text-[var(--muted)] hover:text-[var(--ink)]">
        All guides
      </Link>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
        {guide.title}
      </h1>
      <p className="mt-4 text-sm text-[var(--muted)]">{guide.publishedAt}</p>
      <p className="mt-6 text-base leading-relaxed text-[var(--ink)]/90">{guide.excerpt}</p>
      <div className="mt-10 space-y-10">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">{section.heading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{section.body}</p>
          </section>
        ))}
      </div>
      <div className="mt-12 border-t border-[var(--line)] pt-8">
        <Link href="/browse" className="bg-[var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent-ink)]">
          Browse spreadsheet finds
        </Link>
      </div>
    </article>
  );
}
