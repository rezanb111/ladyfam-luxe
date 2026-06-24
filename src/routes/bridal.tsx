import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { BRIDAL, BRIDAL_CATEGORIES } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SmokyFrame } from "@/components/SmokyFrame";
import heroBridal from "@/assets/hero-bridal.jpg";
import satinsox from "@/assets/brand-satinsox.png";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "کالکشن عروس — لیدی فم" },
      { name: "description", content: "بیش از ۲۰۰ محصول لوکس عروس از آتلیه ساتن اند ساکس؛ تاج، تور، کفش، جواهرات و دسته گل عروس." },
    ],
  }),
  component: BridalPage,
});

const PAGE = 24;

function BridalPage() {
  const [cat, setCat] = useState("");
  const [page, setPage] = useState(1);

  const filtered = cat ? BRIDAL.filter((p) => p.category === cat) : BRIDAL;
  const shown = filtered.slice(0, page * PAGE);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      {/* HERO */}
      <SmokyFrame variant={2}>
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 p-8 sm:p-12 items-center">
          <div className="text-center md:text-right">
            <img src={satinsox} alt="Satin & Sox" loading="lazy" width={400} height={200}
              className="h-20 md:h-24 mx-auto md:mr-0 md:ml-auto object-contain no-save" draggable={false}
              style={{ filter: "drop-shadow(0 4px 20px oklch(0.85 0.15 85 / 0.4))" }} />
            <p className="mt-6 text-xs tracking-[0.5em] text-[oklch(0.85_0.15_85)]">── کالکشن عروس ──</p>
            <h1 className="mt-3 font-display text-4xl sm:text-6xl font-black">
              <span className="text-gold-gradient">آتلیه ساتن اند ساکس</span>
            </h1>
            <p className="mt-5 text-base leading-9 text-[oklch(0.9_0.03_340)]">
              لیدی فم با افتخار <b className="text-gold-gradient">نماینده انحصاری</b> برند
              <b> Satin &amp; Sox </b> لندن در ایران است. مجموعه‌ای کامل از اکسسوری، تاج، تور،
              کفش، جواهرات و دسته‌گل برای رؤیایی‌ترین روز زندگی بانوی شما.
            </p>
            <p className="mt-3 text-xs text-[oklch(0.78_0.18_0)]">
              {BRIDAL.length.toLocaleString("fa-IR")} محصول · ضمانت اصالت
            </p>
          </div>
          <motion.img initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            src={heroBridal} alt="کالکشن عروس" width={1280} height={768}
            className="rounded-3xl border border-[oklch(0.85_0.15_85/0.25)] shadow-2xl" />
        </div>
      </SmokyFrame>

      {/* CATEGORY FILTER */}
      <div className="mt-10 flex flex-wrap gap-2 justify-center">
        <button onClick={() => { setCat(""); setPage(1); }}
          className={`px-4 py-2 rounded-full text-xs font-bold ${cat === "" ? "btn-luxury" : "glass text-[oklch(0.9_0.03_340)]"}`}>
          همه ({BRIDAL.length.toLocaleString("fa-IR")})
        </button>
        {BRIDAL_CATEGORIES.map((c) => (
          <button key={c.name} onClick={() => { setCat(c.name); setPage(1); }}
            className={`px-4 py-2 rounded-full text-xs font-bold ${cat === c.name ? "btn-luxury" : "glass text-[oklch(0.9_0.03_340)]"}`}>
            {c.name} ({c.count.toLocaleString("fa-IR")})
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {shown.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
      </div>

      {shown.length < filtered.length && (
        <div className="mt-10 text-center">
          <button onClick={() => setPage((p) => p + 1)} className="btn-luxury btn-luxury-hover">
            نمایش بیشتر ({(filtered.length - shown.length).toLocaleString("fa-IR")} محصول)
          </button>
        </div>
      )}
    </div>
  );
}
