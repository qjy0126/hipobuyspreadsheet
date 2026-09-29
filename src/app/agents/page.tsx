import type { Metadata } from "next";
import Link from "next/link";
import { agents } from "@/data/agents";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shopping Agents Compatible with Hipobuy Spreadsheet Links",
  description:
    "Findsheet Hipobuy spreadsheet links work with Hipobuy, CNFans, Kakobuy, Mulebuy, Sugargoo, AllChinaBuy and more.",
  path: "/agents",
});

export default function AgentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
        Compatible agents
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
        Same marketplace links, different checkout paths. Compare fees yourself — Findsheet stays independent.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {agents.map((agent) => (
          <Link
            key={agent.slug}
            href={`/agents/${agent.slug}`}
            className="border border-[var(--line)] bg-[var(--paper)]/70 p-6 transition-colors hover:border-[var(--ink)] hover:bg-[var(--accent)]"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl">{agent.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] group-hover:text-[var(--accent-ink)]">
              {agent.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
