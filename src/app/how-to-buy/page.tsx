import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How to Buy from Hipobuy with Spreadsheet Links",
  description:
    "Step-by-step: find a Hipobuy spreadsheet listing on Findsheet, paste into Hipobuy, review QC photos, choose shipping.",
  path: "/how-to-buy",
});

const steps = [
  {
    title: "Find the item",
    body: "Browse Findsheet categories or search. Open the product page, then verify the live Weidian / Taobao / 1688 listing still matches.",
  },
  {
    title: "Paste into your agent",
    body: "Copy the source URL into Hipobuy — or CNFans, Kakobuy, Mulebuy, Sugargoo, AllChinaBuy. Choose size, color and notes, then pay item cost.",
  },
  {
    title: "Review warehouse QC",
    body: "When photos appear, inspect logos, shape, stitching and defects. Request extra angles if needed before you GL.",
  },
  {
    title: "Ship internationally",
    body: "Consolidate, compare lines by weight and destination, pay freight, then track. Directory prices exclude final shipping.",
  },
];

export default function HowToBuyPage() {
  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to buy from Hipobuy using Findsheet spreadsheet links",
    description:
      "Find a product on Findsheet, paste the marketplace URL into Hipobuy, review QC, and ship.",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <JsonLd data={howToLd} />
      <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
        How to buy
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        Findsheet is discovery only. Checkout always happens on your chosen shopping agent.
      </p>
      <ol className="mt-12 space-y-8">
        {steps.map((step, index) => (
          <li key={step.title} className="border-b border-[var(--line)] pb-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Step {index + 1}</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">{step.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{step.body}</p>
          </li>
        ))}
      </ol>
      <Link href="/browse" className="mt-4 inline-block bg-[var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent-ink)]">
        Start browsing finds
      </Link>
    </div>
  );
}
