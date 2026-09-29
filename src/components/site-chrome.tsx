import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { categories } from "@/data/categories";
import { site } from "@/data/site";

const nav = [
  { href: "/browse", label: "Browse" },
  { href: "/guides", label: "Guides" },
  { href: "/agents", label: "Agents" },
  { href: "/how-to-buy", label: "How to buy" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <SiteLogo size={38} priority />
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--ink)]">
              {site.name}
            </span>
            <span className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-[var(--muted)]">
              {site.tagline}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--ink)]/80 transition-colors hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/browse"
          className="bg-[var(--accent)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-ink)]"
        >
          Open sheet
        </Link>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-2.5 md:px-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/c/${category.slug}`}
              className="shrink-0 text-xs uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              {category.shortName}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--paper-2)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <SiteLogo size={44} />
            <p className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">{site.name}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">{site.disclaimer}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--ink)]">Browse</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <li><Link href="/browse" className="hover:text-[var(--ink)]">All finds</Link></li>
            <li><Link href="/c/shoes" className="hover:text-[var(--ink)]">Shoes</Link></li>
            <li><Link href="/c/t-shirts" className="hover:text-[var(--ink)]">T-Shirts</Link></li>
            <li><Link href="/c/hoodies" className="hover:text-[var(--ink)]">Hoodies</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--ink)]">Learn</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <li><Link href="/guides/what-is-a-hipobuy-spreadsheet" className="hover:text-[var(--ink)]">What is a Hipobuy spreadsheet?</Link></li>
            <li><Link href="/how-to-buy" className="hover:text-[var(--ink)]">How to buy</Link></li>
            <li><Link href="/agents/hipobuy" className="hover:text-[var(--ink)]">Hipobuy agent</Link></li>
            <li><Link href="/about" className="hover:text-[var(--ink)]">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} {site.name}. Independent directory.</p>
          <p>Replace seed listings with your live catalog feed before launch.</p>
        </div>
      </div>
    </footer>
  );
}
