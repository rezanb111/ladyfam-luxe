import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PRODUCTS, CATEGORIES, BRANDS, featuredLingerie } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SmokyFrame } from "@/components/SmokyFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "لیدی فم | بوتیک لاکچری بانوان — LADYFAM.BEAUTY" },
      { name: "description", content: "صدها محصول منتخب لباس زیر، آرایش و اکسسوری لاکچری در بوتیک لیدی فم؛ ارسال سراسری، پرداخت درب منزل." },
    ],
  }),
  component: Home,
});

function Home() {
  const lingerieCats = CATEGORIES.filter((c) =>
    ["سوتین لاکچری", "ست لباس زیر", "شورت اسلیپ", "بادی لاکچری", "بوکسر و شورت", "روب و لباس خواب", "شورت زنانه", "لباس زیر زنانه"].includes(c.name)
  );
  const beautyHero = PRODUCTS.filter((p) => !p.isLingerie).slice(0, 8);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative px-4 pt-12 pb-20 sm:pt-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <div className="inline-flex items-center gap-2 glass-pink rounded-full px-4 py-1.5 text-xs font-bold text-[oklch(0.95_0.1_90)]">
              ✨ بوتیک لاکچری بانوان · کیش
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1]">
              <span className="text-rose-gradient">لیدی فم</span>
              <br />
              <span className="text-gold-gradient">LADYFAM.BEAUTY</span>
            </h1>
            <p className="mt-6 text-lg leading-9 text-[oklch(0.88_0.03_340)] max-w-xl mx-auto lg:mx-0">
              هنر زنانگی در قاب طلایی؛ مجموعه‌ای بی‌نظیر از لباس زیر مجلل، آرایش و اکسسوری لاکچری
              — منتخب برای بانوی خاصِ خاص.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link to="/lingerie" className="btn-luxury btn-luxury-hover">
                مجموعه لباس زیر ↖
              </Link>
              <Link
                to="/shop"
                className="rounded-full glass px-7 py-3.5 text-sm font-bold text-[oklch(0.95_0.12_85)] hover:scale-105 transition-transform"
              >
                مشاهده فروشگاه
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-xs text-[oklch(0.8_0.04_340)]">
              <span>🚚 ارسال اکسپرس</span>
              <span>💸 پرداخت درب منزل</span>
              <span>🔒 بسته‌بندی محرمانه</span>
              <span>👑 ضمانت اصالت</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {featuredLingerie.slice(0, 4).map((p, i) => (
                <motion.div
                  key={p.id}
                  animate={{ y: [0, i % 2 ? -10 : 10, 0] }}
                  transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                  className={i % 2 ? "mt-8" : ""}
                >
                  <SmokyFrame variant={i + 1}>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1.65rem]">
                      <img
                        src={p.images[0]}
                        alt={p.title}
                        loading="eager"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable={false}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute bottom-2 left-0 right-0 text-center text-[9px] tracking-[0.3em] text-[oklch(0.95_0.12_85/0.9)]">
                        LADYFAM.BEAUTY
                      </div>
                    </div>
                  </SmokyFrame>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="منتخب لباس زیر" title="کالکشن مجلل بانوی خاص" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {lingerieCats.slice(0, 8).map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, rotate: -1 }}
              >
                <Link
                  to="/shop"
                  search={{ category: c.name } as never}
                  className="block glass rounded-2xl p-6 text-center group hover:bg-[oklch(0.78_0.18_0/0.12)] transition-colors"
                >
                  <div className="text-3xl">
                    {c.name.includes("سوتین") ? "👙" : c.name.includes("شورت") ? "🩲" : c.name.includes("بادی") ? "💃" : c.name.includes("روب") ? "🌙" : "✨"}
                  </div>
                  <h3 className="mt-3 font-bold text-sm text-[oklch(0.95_0.1_90)] group-hover:text-gold-gradient">
                    {c.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED LINGERIE */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="ویترین لاکچری" title="منتخب لباس زیر بانوان" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredLingerie.slice(0, 16).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/lingerie" className="btn-luxury btn-luxury-hover">مشاهده همه ←</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="چرا لیدی فم" title="بوتیکی فراتر از انتظار" />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { icon: "👑", title: "اصالت لاکچری", text: "تمام محصولات از برندهای شناخته‌شدهٔ جهانی، با ضمانت اصل بودن." },
              { icon: "🎁", title: "بسته‌بندی محرمانه", text: "ارسال در جعبه شیک و بدون درج محتوا، با وسواس کامل بر حفظ حریم بانو." },
              { icon: "💎", title: "تجربه‌ای زنانه", text: "از مشاوره تخصصی تا بازگشت بدون دردسر؛ بانوی خاص لیاقت بهترین را دارد." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <SmokyFrame variant={i + 2}>
                  <div className="p-7">
                    <div className="text-4xl">{f.icon}</div>
                    <h3 className="mt-4 text-xl font-display text-gold-gradient">{f.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[oklch(0.85_0.04_340)]">{f.text}</p>
                  </div>
                </SmokyFrame>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEAUTY */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="فراتر از لباس" title="آرایش و اکسسوری لاکچری" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {beautyHero.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="منتخب ما" title="برندهای حاضر در لیدی فم" />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {BRANDS.map((b) => (
              <div key={b.name} className="glass-pink rounded-full px-6 py-3 text-sm font-bold text-[oklch(0.95_0.1_90)]">
                {b.name} <span className="text-[oklch(0.78_0.18_0)] text-xs">· {b.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDRESS */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <SmokyFrame variant={3}>
            <div className="p-10 text-center">
              <p className="text-xs tracking-[0.4em] text-[oklch(0.85_0.15_85)]">شعبه مرکزی</p>
              <h3 className="mt-3 font-display text-3xl text-gold-gradient">جزیره کیش</h3>
              <p className="mt-3 text-base text-[oklch(0.9_0.03_340)]">
                مرکز بزرگ تجاری، طبقه دوم — واحد ۳۴۶ و ۳۴۸
              </p>
              <p className="mt-6 text-xs text-[oklch(0.78_0.18_0)]">پذیرای بانوی خاص، هر روز هفته</p>
            </div>
          </SmokyFrame>
        </div>
      </section>
    </div>
  );
}

function Heading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.5em] text-[oklch(0.85_0.15_85)]"
      >
        ── {kicker} ──
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 font-display text-4xl sm:text-5xl font-black"
      >
        <span className="text-rose-gradient">{title}</span>
      </motion.h2>
    </div>
  );
}
