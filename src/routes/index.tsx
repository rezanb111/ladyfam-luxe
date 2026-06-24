import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PRODUCTS, CATEGORIES, BRANDS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SmokyFrame } from "@/components/SmokyFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "لیدی فم | بوتیک لاکچری بانوان — LADYFAM.BEAUTY" },
      { name: "description", content: "صدها محصول منتخب آرایش، اکسسوری و کالای اختصاصی بانوان در بوتیک لیدی فم؛ ارسال سراسری، پرداخت درب منزل." },
    ],
  }),
  component: Home,
});

const LINGERIE_CAT_META: { name: string; icon: string; tag: string }[] = [
  { name: "سوتین لاکچری", icon: "👙", tag: "بانوی خاص" },
  { name: "ست لباس زیر", icon: "💎", tag: "هارمونی کامل" },
  { name: "شورت اسلیپ", icon: "🌸", tag: "نرم و لطیف" },
  { name: "بادی لاکچری", icon: "💃", tag: "اندامی مجلل" },
  { name: "روب و لباس خواب", icon: "🌙", tag: "شب‌های رؤیایی" },
  { name: "لباس زیر زنانه", icon: "✨", tag: "منتخب برند" },
];

function Home() {
  const beautyHero = PRODUCTS.filter((p) => !p.isLingerie).slice(0, 8);
  const accessoryHero = PRODUCTS.filter((p) => !p.isLingerie).slice(8, 16);
  const lingerieCount = PRODUCTS.filter((p) => p.isLingerie).length;

  return (
    <div className="overflow-hidden">
      {/* HERO — image-free for lingerie, all-typographic luxury */}
      <section className="relative px-4 pt-12 pb-20 sm:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass-pink rounded-full px-4 py-1.5 text-xs font-bold text-[oklch(0.95_0.1_90)]">
              ✨ بوتیک لاکچری بانوان · کیش
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.05]">
              <span className="text-rose-gradient">لیدی فم</span>
              <br />
              <span className="text-gold-gradient">LADYFAM.BEAUTY</span>
            </h1>
            <p className="mt-8 text-lg leading-9 text-[oklch(0.9_0.03_340)] max-w-2xl mx-auto">
              هنر زنانگی در قاب طلایی؛ مجموعه‌ای بی‌نظیر از آرایش، اکسسوری و کالای اختصاصی بانوان —
              منتخب برای بانوی خاصِ خاص.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <Link to="/auth" className="btn-luxury btn-luxury-hover">
                ورود به بخش اختصاصی بانوان ↖
              </Link>
              <Link
                to="/shop"
                className="rounded-full glass px-7 py-3.5 text-sm font-bold text-[oklch(0.95_0.12_85)] hover:scale-105 transition-transform"
              >
                مشاهده فروشگاه
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 justify-center text-xs text-[oklch(0.8_0.04_340)]">
              <span>🚚 ارسال اکسپرس</span>
              <span>💸 پرداخت درب منزل</span>
              <span>🔒 بسته‌بندی محرمانه</span>
              <span>👑 ضمانت اصالت</span>
            </div>
          </motion.div>

          {/* Decorative floating orbs (no product imagery) */}
          <div className="relative mt-16 h-40 pointer-events-none" aria-hidden>
            <div className="absolute left-1/4 top-0 h-32 w-32 rounded-full blur-3xl opacity-60 animate-blob"
              style={{ background: "radial-gradient(circle, oklch(0.78 0.18 0 / 0.7), transparent 70%)" }} />
            <div className="absolute right-1/4 top-4 h-40 w-40 rounded-full blur-3xl opacity-50 animate-blob"
              style={{ background: "radial-gradient(circle, oklch(0.85 0.15 85 / 0.6), transparent 70%)", animationDelay: "2s" }} />
            <div className="absolute left-1/2 -translate-x-1/2 top-8 h-28 w-28 rounded-full blur-3xl opacity-40 animate-blob"
              style={{ background: "radial-gradient(circle, oklch(0.5 0.22 350 / 0.7), transparent 70%)", animationDelay: "4s" }} />
          </div>
        </div>
      </section>

      {/* PRIVATE COLLECTION GATE — replaces lingerie images on homepage */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <SmokyFrame variant={2}>
            <div className="p-8 sm:p-12 text-center">
              <div className="text-5xl">🔒</div>
              <p className="mt-4 text-xs tracking-[0.5em] text-[oklch(0.85_0.15_85)]">── کالکشن اختصاصی ──</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                <span className="text-rose-gradient">مجموعهٔ خصوصی بانوان</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-8 text-[oklch(0.9_0.03_340)] max-w-2xl mx-auto">
                بیش از <b className="text-gold-gradient">{lingerieCount.toLocaleString("fa-IR")}</b> مدل لباس زیر لاکچری از برندهای جهانی،
                در فضایی کاملاً محرمانه و با احترام به حریم بانو. مشاهدهٔ این بخش
                نیازمند <b>ثبت‌نام و تأیید ایمیل</b> است و تصاویر با حالت اسپویل امن نمایش داده می‌شوند.
              </p>

              <div className="mt-9 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
                {LINGERIE_CAT_META.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="glass rounded-2xl p-5 text-center"
                  >
                    <div className="text-3xl">{c.icon}</div>
                    <div className="mt-2 text-sm font-bold text-[oklch(0.95_0.1_90)]">{c.name}</div>
                    <div className="mt-1 text-[10px] tracking-widest text-[oklch(0.78_0.18_0)]">{c.tag}</div>
                  </motion.div>
                ))}
              </div>

              <Link to="/auth" className="btn-luxury btn-luxury-hover inline-block mt-10">
                ثبت‌نام و ورود به بخش اختصاصی ←
              </Link>
            </div>
          </SmokyFrame>
        </div>
      </section>

      {/* GENERAL CATEGORIES (non-lingerie) */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="دسته‌بندی‌ها" title="گردش در بوتیک لیدی فم" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.filter((c) => !LINGERIE_CAT_META.some((m) => m.name === c.name))
              .slice(0, 8)
              .map((c, i) => (
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
                    <div className="text-3xl">✨</div>
                    <h3 className="mt-3 font-bold text-sm text-[oklch(0.95_0.1_90)] group-hover:text-gold-gradient">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-[10px] text-[oklch(0.78_0.18_0)]">
                      {c.count.toLocaleString("fa-IR")} محصول
                    </p>
                  </Link>
                </motion.div>
              ))}
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

      {/* BEAUTY (non-lingerie products only) */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="ویترین لاکچری" title="آرایش و زیبایی بانو" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {beautyHero.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSORIES (non-lingerie) */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="انتخاب سردبیر" title="اکسسوری و کالاهای منتخب" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {accessoryHero.map((p, i) => (
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
