import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/lingerie")({
  head: () => ({ meta: [{ title: "لباس زیر مجلل — لیدی فم" }] }),
  component: LingeriePage,
});

const PAGE = 24;
const ALL = PRODUCTS.filter((p) => p.isLingerie);
const CATS = Array.from(new Set(ALL.map((p) => p.category)));

function LingeriePage() {
  const [cat, setCat] = useState("");
  const [page, setPage] = useState(1);
  const list = cat ? ALL.filter((p) => p.category === cat) : ALL;
  const visible = list.slice(0, page * PAGE);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <header className="text-center mb-10">
        <p className="text-xs tracking-[0.5em] text-[oklch(0.85_0.15_85)]">── کالکشن مرکزی ──</p>
        <h1 className="mt-3 font-display text-5xl text-rose-gradient">لباس زیر لاکچری بانوان</h1>
        <p className="mt-4 text-sm text-[oklch(0.85_0.04_340)]">
          {ALL.length.toLocaleString("fa-IR")} مدل از برندهای جهانی · اختصاصی لیدی فم
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button
          onClick={() => { setCat(""); setPage(1); }}
          className={`rounded-full px-5 py-2 text-xs font-bold transition ${cat === "" ? "btn-luxury" : "glass text-[oklch(0.92_0.03_340)]"}`}
        >همه</button>
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => { setCat(c); setPage(1); }}
            className={`rounded-full px-5 py-2 text-xs font-bold transition ${cat === c ? "btn-luxury" : "glass text-[oklch(0.92_0.03_340)]"}`}
          >{c}</button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visible.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
      </div>

      {visible.length < list.length && (
        <div className="text-center mt-12">
          <button onClick={() => setPage((p) => p + 1)} className="btn-luxury btn-luxury-hover">
            نمایش بیشتر
          </button>
        </div>
      )}
    </div>
  );
}
