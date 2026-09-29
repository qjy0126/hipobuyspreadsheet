import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { agents, getAgent } from "@/data/agents";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) return {};
  return buildMetadata({
    title: agent.seoTitle,
    description: agent.seoDescription,
    path: `/agents/${agent.slug}`,
  });
}

export default async function AgentPage({ params }: Props) {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) notFound();

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: agent.seoTitle,
    description: agent.seoDescription,
    url: absoluteUrl(`/agents/${agent.slug}`),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <JsonLd data={webPageLd} />
      <Link href="/agents" className="text-xs uppercase tracking-[0.14em] text-[var(--muted)] hover:text-[var(--ink)]">
        All agents
      </Link>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
        {agent.name}
      </h1>
      <p className="mt-5 text-base leading-relaxed text-[var(--ink)]/90">{agent.summary}</p>
      <h2 className="mt-10 font-[family-name:var(--font-display)] text-2xl">Why shoppers compare it</h2>
      <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
        {agent.strengths.map((item) => (
          <li key={item} className="border-b border-[var(--line)] pb-2">{item}</li>
        ))}
      </ul>
      <p className="mt-8 text-sm leading-relaxed text-[var(--muted)]">
        Findsheet product links are marketplace URLs. Paste them into {agent.name} after you verify the live listing.
        We are not affiliated with {agent.name}.
      </p>
      <Link href="/browse" className="mt-8 inline-block bg-[var(--ink)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--paper)]">
        Browse finds to paste
      </Link>
    </div>
  );
}
