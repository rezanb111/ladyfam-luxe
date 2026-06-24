import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PRODUCTS, CATEGORIES, BRANDS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { z } from "zod";

const searchSchema = z.object({
  category: z.string().optional(),
  brand: z.string().optional(),
  q: z.string().optional(),
});

export const Route = createFileRoute("/shop")({
  validateSearch: searchSchema,
  head: () => ({ meta: [{ title: "فروشگاه — لیدی فم" }] }),
  component: Shop,
});

const PAGE_SIZE = 24;

function Shop() {
  const search = Route.useSearch();
  const [category, setCategory] = useState(search.category || "");
  const [brand, setBrand] = useState(search.brand || "");
  const [q, setQ] = useState(search.q || "");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        (!category || p.category === category) &&
        (!brand || p.brand === brand) &&
        (!qq || p.title.toLowerCase().includes(qq) || p.category.includes(qq))
    );
  }, [category, brand, q]);

  const visible = filtered.slice(0, page * PAGE_SIZE);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <header className="text-center mb-10">
        <p className="text-xs tracking-[0.5em] text-[oklch(0.85_0.15_85)]">── فروشگاه ──</p>
        <h1 className="mt-3 font-display text-5xl text-rose-gradient">بوتیک لاکچری لیدی فم</h1>
        <p className="mt-4 text-sm text-[oklch(0.85_0.04_340)]">
          {filtered.length.toLocaleString("fa-IR")} محصول منتخب — برای بانوی خاص
        </p>
      </header>

      <div className="glass rounded-3xl p-5 mb-8 grid md:grid-cols-4 gap-3">
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setPage(1); }}
          placeholder="جستجو..."
          className="rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm text-[oklch(0.97_0.02_340)] outline-none border border-[oklch(0.85_0.15_85/0.25)] focus:border-[oklch(0.85_0.15_85/0.6)]"
        />
        <select
          value={category}
          onChange={(e) => { setCategory(e.target.value); setPage(1); }}
          className="rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm text-[oklch(0.97_0.02_340)] outline-none border border-[oklch(0.85_0.15_85/0.25)]"
        >
          <option value="">همه دسته‌ها</option>
          {CATEGORIES.map((c) => <option key={c.name} value={c.name}>{c.name} ({c.count})</option>)}
        </select>
        <select
          value={brand}
          onChange={(e) => { setBrand(e.target.value); setPage(1); }}
          className="rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm text-[oklch(0.97_0.02_340)] outline-none border border-[oklch(0.85_0.15_85/0.25)]"
        >
          <option value="">همه برندها</option>
          {BRANDS.map((b) => <option key={b.name} value={b.name}>{b.name} ({b.count})</option>)}
        </select>
        <button
          onClick={() => { setCategory(""); setBrand(""); setQ(""); setPage(1); }}
          className="rounded-full glass-pink px-5 py-3 text-sm font-bold text-[oklch(0.95_0.1_90)]"
        >
          حذف فیلترها
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visible.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
      </div>

      {visible.length < filtered.length && (
        <div className="text-center mt-12">
          <button onClick={() => setPage((p) => p + 1)} className="btn-luxury btn-luxury-hover">
            نمایش بیشتر ({(filtered.length - visible.length).toLocaleString("fa-IR")})
          </button>
        </div>
      )}
      {filtered.length === 0 && (
        <div className="glass rounded-3xl p-12 text-center text-[oklch(0.85_0.04_340)]">
          محصولی با این فیلترها یافت نشد.
        </div>
      )}
    </div>
  );
}
