import { createFileRoute } from "@tanstack/react-router";
import { SmokyFrame } from "@/components/SmokyFrame";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "درباره لیدی فم" }] }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <SmokyFrame>
        <div className="p-10 sm:p-14">
          <p className="text-xs tracking-[0.5em] text-center text-[oklch(0.85_0.15_85)]">── درباره ما ──</p>
          <h1 className="mt-4 text-center font-display text-5xl text-rose-gradient">لیدی فم</h1>
          <p className="mt-2 text-center text-xs tracking-[0.3em] text-[oklch(0.85_0.15_85)]">LADYFAM.BEAUTY</p>
          <div className="mt-10 space-y-6 text-base leading-9 text-[oklch(0.9_0.03_340)]">
            <p>
              لیدی فم، روایت تازه‌ای از زنانگی است؛ بوتیکی لاکچری در قلب جزیره کیش که با وسواسی شاهانه،
              منتخبی از بهترین برندهای جهانی لباس زیر، آرایش و اکسسوری بانوان را گرد هم آورده است.
            </p>
            <p>
              ما باور داریم هر بانو لایقِ تجربه‌ای فراتر از یک خرید است؛ تجربه‌ای پر از ظرافت، اعتماد و
              زیبایی‌شناسی ناب. به همین دلیل از انتخاب محصول تا بسته‌بندی محرمانه و تحویل درب منزل،
              هر گام را با نگاهی هنری برای شما طراحی کرده‌ایم.
            </p>
            <p className="text-center text-[oklch(0.92_0.12_85)] font-display text-2xl">
              «بانوی خاص، شایسته‌ی بهترین است.»
            </p>
            <div className="text-center pt-6 border-t border-[oklch(0.85_0.15_85/0.2)]">
              <p className="text-xs text-[oklch(0.8_0.04_340)]">ایده و اجرا از</p>
              <p className="mt-2 font-display text-2xl text-gold-gradient">رضا نبوی · آیلین گودرزی</p>
              <p className="mt-1 text-[10px] tracking-[0.3em] text-[oklch(0.78_0.18_0)]">هلدینگ نبوی</p>
            </div>
          </div>
        </div>
      </SmokyFrame>
    </div>
  );
}
