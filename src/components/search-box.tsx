"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function SearchBox({
  initialQuery = "",
  large = false,
}: {
  initialQuery?: string;
  large?: boolean;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/browse");
  }

  return (
    <form onSubmit={onSubmit} className="w-full" role="search">
      <label htmlFor="findsheet-search" className="sr-only">
        Search Hipobuy spreadsheet finds
      </label>
      <div className={`flex border border-[var(--ink)] bg-[var(--paper)] ${large ? "h-14" : "h-11"}`}>
        <input
          id="findsheet-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search brand, item, category…"
          className="min-w-0 flex-1 bg-transparent px-4 text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 bg-[var(--ink)] px-5 text-sm font-medium uppercase tracking-[0.12em] text-[var(--paper)] transition-colors hover:bg-[var(--accent-ink)] hover:text-[var(--accent)]"
        >
          Search
        </button>
      </div>
    </form>
  );
}
