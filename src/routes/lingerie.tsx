import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SmokyFrame } from "@/components/SmokyFrame";
import { useAuth } from "@/lib/store";

export const Route = createFileRoute("/lingerie")({
  head: () => ({ meta: [{ title: "لباس زیر مجلل — لیدی فم" }] }),
  component: LingeriePage,
});

const PAGE = 24;
const ALL = PRODUCTS.filter((p) => p.isLingerie);
const CATS = Array.from(new Set(ALL.map((p) => p.category)));

function LingeriePage() {
  const { user } = useAuth();
  const [cat, setCat] = useState("");
  const [page, setPage] = useState(1);

  if (!user || !user.isVerified) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20">
        <SmokyFrame variant={2}>
          <div className="p-10 text-center">
            <div className="text-5xl">🔒</div>
            <h1 className="mt-4 font-display text-3xl text-rose-gradient">دسترسی محدود</h1>
            <p className="mt-5 text-sm leading-8 text-[oklch(0.9_0.03_340)]">
              مشاهدهٔ بخش لباس زیر بانوان نیازمند <b>ثبت‌نام و تأیید ایمیل</b> است.
              لطفاً وارد حساب کاربری خود شوید یا ثبت‌نام را تکمیل کنید.
            </p>
            <Link to="/auth" className="btn-luxury btn-luxury-hover inline-block mt-7">
              ثبت‌نام / ورود
            </Link>
          </div>
        </SmokyFrame>
      </div>
    );
  }

  const list = cat ? ALL.filter((p) => p.category === cat) : ALL;
  const visible = list.slice(0, page * PAGE);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <header className="text-center mb-8">
        <p className="text-xs tracking-[0.5em] text-[oklch(0.85_0.15_85)]">── کالکشن مرکزی ──</p>
        <h1 className="mt-3 font-display text-5xl text-rose-gradient">لباس زیر لاکچری بانوان</h1>
        <p className="mt-4 text-sm text-[oklch(0.85_0.04_340)]">
          {ALL.length.toLocaleString("fa-IR")} مدل از برندهای جهانی · اختصاصی لیدی فم
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8 mx-auto max-w-3xl glass-pink rounded-2xl px-5 py-3 text-center text-xs text-[oklch(0.92_0.05_340)]"
      >
        ✨ به دلیل حفظ حریم بصری، تصاویر این بخش با حالت <b>اسپویل</b> نمایش داده می‌شوند — برای دیدن هر تصویر روی آن لمس/کلیک کنید.
      </motion.div>

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
        {visible.map((p, i) => <ProductCard key={p.id} product={p} index={i} spoiler />)}
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
