import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PRODUCTS, CATEGORIES, BRIDAL } from "@/lib/products";
import { BRAND_REGISTRY } from "@/lib/brands";
import { ProductCard } from "@/components/ProductCard";
import { SmokyFrame } from "@/components/SmokyFrame";
import {
  IconCrown, IconDiamond, IconRose, IconMoon, IconRibbon,
  IconSparkle, IconHeart, IconLipstick, IconVeil, IconRing, IconLock, IconShield,
} from "@/components/LuxIcon";
import heroLuxury from "@/assets/hero-luxury.jpg";
import heroBridal from "@/assets/hero-bridal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "لیدی فم | بوتیک لاکچری بانوان — LADYFAM.BEAUTY" },
      { name: "description", content: "بوتیک لاکچری بانوان؛ آرایش، عروس و کالکشن خصوصی. نماینده انحصاری برندهای جهانی، با ضمانت اصالت." },
    ],
  }),
  component: Home,
});

const LINGERIE_CATS = [
  { name: "سوتین لاکچری", Icon: IconHeart, tag: "بانوی خاص" },
  { name: "ست لباس زیر", Icon: IconDiamond, tag: "هارمونی کامل" },
  { name: "شورت اسلیپ", Icon: IconRose, tag: "نرم و لطیف" },
  { name: "بادی لاکچری", Icon: IconSparkle, tag: "اندامی مجلل" },
  { name: "روب و لباس خواب", Icon: IconMoon, tag: "شب‌های رؤیایی" },
  { name: "لباس زیر زنانه", Icon: IconCrown, tag: "منتخب برند" },
];

const CAT_ICONS: Record<string, typeof IconRose> = {
  "اکسسوری عروس": IconRibbon,
  "تاج و گل سر عروس": IconCrown,
  "جواهرات عروس": IconDiamond,
  "کفش عروس": IconHeart,
  "تور عروس": IconVeil,
  "لباس مجلسی": IconSparkle,
  "روب ساتن": IconMoon,
  "بالشتک حلقه و سبد گل": IconRing,
};

function Home() {
  const beautyHero = PRODUCTS.filter((p) => !p.isLingerie && !p.isBridal).slice(0, 8);
  const bridalHero = BRIDAL.slice(0, 8);
  const lingerieCount = PRODUCTS.filter((p) => p.isLingerie).length;

  return (
    <div className="overflow-hidden">
      {/* HERO — luxury image + typographic centerpiece */}
      <section className="relative px-4 pt-10 pb-20 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-right"
            >
              <div className="inline-flex items-center gap-2 glass-pink rounded-full px-4 py-1.5 text-[11px] font-bold text-[oklch(0.95_0.1_90)]">
                <IconSparkle size={14} glow={false} /> بوتیک لاکچری بانوان · کیش
              </div>
              <h1 className="mt-6 font-display text-5xl sm:text-7xl font-black leading-[1.05]">
                <span className="text-rose-gradient">لیدی فم</span>
                <br />
                <span className="text-gold-gradient text-4xl sm:text-6xl">LADYFAM.BEAUTY</span>
              </h1>
              <p className="mt-8 text-base sm:text-lg leading-9 text-[oklch(0.9_0.03_340)]">
                هنر زنانگی در قاب طلایی؛ مجموعه‌ای بی‌نظیر از آرایش، کالکشن عروس و کالای اختصاصی
                بانوان — منتخب برای بانوی خاصِ خاص.
              </p>
              <div className="mt-9 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link to="/auth" className="btn-luxury btn-luxury-hover">
                  ثبت‌نام رایگان بانوان ←
                </Link>
                <Link to="/shop" className="rounded-full glass px-7 py-3.5 text-sm font-bold text-[oklch(0.95_0.12_85)] hover:scale-105 transition-transform">
                  مشاهده فروشگاه
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-60"
                style={{ background: "radial-gradient(circle, oklch(0.78 0.18 0 / 0.5), oklch(0.85 0.15 85 / 0.3), transparent 70%)" }} />
              <img
                src={heroLuxury}
                alt="کالکشن لاکچری لیدی فم"
                width={960}
                height={1280}
                className="relative rounded-[2rem] shadow-2xl border border-[oklch(0.85_0.15_85/0.25)]"
                style={{ filter: "drop-shadow(0 30px 60px oklch(0 0 0 / 0.6))" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* HUGE REGISTRATION CALLOUT — bold, simple, unmissable */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <SmokyFrame variant={1}>
            <div className="p-8 sm:p-12 text-center">
              <div className="flex justify-center"><IconLock size={64} /></div>
              <h2 className="mt-5 font-display text-3xl sm:text-5xl font-black leading-tight">
                <span className="text-gold-gradient">برای دیدن کامل محصولات لباس‌زیر</span>
                <br />
                <span className="text-rose-gradient">و کالکشن منتخب، ابتدا ثبت‌نام کنید</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-9 text-[oklch(0.92_0.03_340)] max-w-3xl mx-auto">
                دسترسی به <b className="text-gold-gradient">{lingerieCount.toLocaleString("fa-IR")} محصول</b> اختصاصی
                لباس‌زیر، روب و لباس خواب، بدون ثبت‌نام ممکن نیست. این کار برای حفظ حریم بانوی شما و رعایت کرامت کاربران است.
                ثبت‌نام در کمتر از <b>۳۰ ثانیه</b> با ایمیل و شمارهٔ موبایل انجام می‌شود.
              </p>
              <div className="mt-9 flex flex-wrap gap-3 justify-center">
                <Link to="/auth" className="btn-luxury btn-luxury-hover text-base">
                  همین حالا ثبت‌نام می‌کنم
                </Link>
                <Link to="/auth" className="rounded-full glass-pink px-7 py-3.5 text-sm font-bold text-[oklch(0.97_0.02_340)] hover:scale-105 transition-transform">
                  قبلاً ثبت‌نام کرده‌ام · ورود
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
                {LINGERIE_CATS.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass rounded-2xl p-5"
                  >
                    <div className="flex justify-center"><c.Icon size={36} /></div>
                    <div className="mt-3 text-sm font-bold text-[oklch(0.95_0.1_90)]">{c.name}</div>
                    <div className="mt-1 text-[10px] tracking-widest text-[oklch(0.78_0.18_0)]">{c.tag}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SmokyFrame>
        </div>
      </section>

      {/* BRIDAL FEATURE */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={heroBridal}
              alt="کالکشن عروس لیدی فم"
              width={1280}
              height={768}
              loading="lazy"
              className="rounded-3xl border border-[oklch(0.85_0.15_85/0.25)] shadow-2xl"
            />
            <div>
              <p className="text-xs tracking-[0.5em] text-[oklch(0.85_0.15_85)]">── کالکشن عروس ──</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black">
                <span className="text-gold-gradient">رؤیای روز سپید</span>
              </h2>
              <p className="mt-5 text-base leading-9 text-[oklch(0.9_0.03_340)]">
                {BRIDAL.length.toLocaleString("fa-IR")} محصول منتخب از آتلیه عروس بین‌المللی
                <b className="text-gold-gradient"> ساتن اند ساکس</b>؛
                از تاج پرل و تور لیس تا کفش، دسته‌گل و جواهرات روز عروسی.
              </p>
              <Link to="/bridal" className="btn-luxury btn-luxury-hover inline-block mt-7">
                ورود به کالکشن عروس ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BRIDAL CATEGORIES grid */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="طبقه‌بندی عروس" title="هر چه برای روز خاص لازم است" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(CAT_ICONS).map(([name, Ico], i) => {
              const count = PRODUCTS.filter((p) => p.category === name).length;
              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <Link to="/bridal" className="block glass rounded-2xl p-6 text-center group">
                    <div className="flex justify-center"><Ico size={42} /></div>
                    <h3 className="mt-4 font-bold text-sm text-[oklch(0.95_0.1_90)] group-hover:text-gold-gradient">{name}</h3>
                    <p className="mt-1 text-[10px] text-[oklch(0.78_0.18_0)]">{count.toLocaleString("fa-IR")} محصول</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GENERAL CATEGORIES */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="گردش در بوتیک" title="دسته‌بندی‌های لیدی فم" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.filter((c) => !LINGERIE_CATS.some((m) => m.name === c.name) && !CAT_ICONS[c.name])
              .slice(0, 8)
              .map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <Link to="/shop" search={{ category: c.name } as never}
                    className="block glass rounded-2xl p-6 text-center group">
                    <div className="flex justify-center"><IconLipstick size={36} /></div>
                    <h3 className="mt-3 font-bold text-sm text-[oklch(0.95_0.1_90)]">{c.name}</h3>
                    <p className="mt-1 text-[10px] text-[oklch(0.78_0.18_0)]">{c.count.toLocaleString("fa-IR")} محصول</p>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* BRANDS — real logo tiles with "نماینده انحصاری" badge */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="افتخار نمایندگی" title="برندهای انحصاری لیدی فم" />
          <p className="mt-4 text-center text-sm text-[oklch(0.85_0.04_340)] max-w-2xl mx-auto leading-7">
            بوتیک لیدی فم با افتخار، <b className="text-gold-gradient">نماینده انحصاری</b> برندهای بین‌المللی
            زیر در ایران است. اصالت تمام محصولات تضمین شده است.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
            {BRAND_REGISTRY.map((b, i) => (
              <motion.div
                key={b.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <SmokyFrame variant={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className="p-7 h-full flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-1.5 rounded-full glass-pink px-3 py-1 text-[10px] font-bold text-[oklch(0.95_0.1_90)]">
                      <IconShield size={12} glow={false} /> نماینده انحصاری
                    </div>
                    <div className="mt-5 h-20 w-full flex items-center justify-center">
                      <img
                        src={b.logo}
                        alt={b.en}
                        width={300}
                        height={120}
                        loading="lazy"
                        className="max-h-20 w-auto object-contain no-save"
                        draggable={false}
                        style={{ filter: "drop-shadow(0 4px 20px oklch(0.85 0.15 85 / 0.35))" }}
                      />
                    </div>
                    <h3 className="mt-5 font-display text-xl text-gold-gradient">{b.fa}</h3>
                    <p className="mt-1 text-[11px] tracking-[0.3em] text-[oklch(0.78_0.18_0)]">{b.origin}</p>
                    <p className="mt-3 text-xs text-[oklch(0.85_0.04_340)] leading-6">{b.tagline}</p>
                  </div>
                </SmokyFrame>
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
              { Ico: IconCrown, title: "اصالت لاکچری", text: "تمام محصولات از برندهای شناخته‌شدهٔ جهانی، با ضمانت اصل بودن." },
              { Ico: IconShield, title: "بسته‌بندی محرمانه", text: "ارسال در جعبه شیک و بدون درج محتوا، با وسواس کامل بر حفظ حریم بانو." },
              { Ico: IconDiamond, title: "تجربه‌ای زنانه", text: "از مشاوره تخصصی تا بازگشت بدون دردسر؛ بانوی خاص لیاقت بهترین را دارد." },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <SmokyFrame variant={(i + 2) as 2 | 3 | 4}>
                  <div className="p-7">
                    <f.Ico size={48} />
                    <h3 className="mt-4 text-xl font-display text-gold-gradient">{f.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[oklch(0.85_0.04_340)]">{f.text}</p>
                  </div>
                </SmokyFrame>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEAUTY products */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="ویترین لاکچری" title="آرایش و زیبایی بانو" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {beautyHero.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* BRIDAL products preview */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <Heading kicker="منتخب عروس" title="جلوه‌ای از کالکشن سپید" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {bridalHero.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/bridal" className="btn-luxury btn-luxury-hover inline-block">مشاهده تمام محصولات عروس</Link>
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
              <p className="mt-3 text-base text-[oklch(0.9_0.03_340)]">مرکز بزرگ تجاری، طبقه دوم — واحد ۳۴۶ و ۳۴۸</p>
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
      <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-xs tracking-[0.5em] text-[oklch(0.85_0.15_85)]">── {kicker} ──</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mt-4 font-display text-4xl sm:text-5xl font-black">
        <span className="text-rose-gradient">{title}</span>
      </motion.h2>
    </div>
  );
}
