import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 md:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-tight">Page not found</h1>
      <p className="mt-4 text-sm text-[var(--muted)]">That find or page does not exist in the directory.</p>
      <Link href="/browse" className="mt-8 inline-block bg-[var(--ink)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--paper)]">
        Browse spreadsheet
      </Link>
    </div>
  );
}
