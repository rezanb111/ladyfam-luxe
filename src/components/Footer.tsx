import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[oklch(0.85_0.15_85/0.2)] glass">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo size="lg" />
            <p className="mt-4 text-sm leading-7 text-[oklch(0.8_0.04_340)]">
              لیدی فم، تجربه‌ای فراتر از یک خرید؛ هنرِ زنانگی، در قاب لاکچری.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold text-[oklch(0.92_0.12_85)]">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm text-[oklch(0.85_0.04_340)]">
              <li><Link to="/shop">فروشگاه</Link></li>
              <li><Link to="/lingerie">لباس زیر</Link></li>
              <li><Link to="/about">درباره ما</Link></li>
              <li><Link to="/contact">تماس</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold text-[oklch(0.92_0.12_85)]">حساب کاربری</h4>
            <ul className="space-y-2 text-sm text-[oklch(0.85_0.04_340)]">
              <li><Link to="/auth">ورود / ثبت‌نام</Link></li>
              <li><Link to="/cart">سبد خرید</Link></li>
              <li><Link to="/checkout">پرداخت درب منزل</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold text-[oklch(0.92_0.12_85)]">شعبه مرکزی</h4>
            <p className="text-sm leading-7 text-[oklch(0.85_0.04_340)]">
              جزیره کیش، مرکز بزرگ تجاری<br />
              طبقه دوم، واحد ۳۴۶ – ۳۴۸
            </p>
            <p className="mt-3 text-xs text-[oklch(0.78_0.18_0)]">ladyfam.beauty</p>
          </div>
        </div>

        <div className="mt-12 border-t border-[oklch(0.85_0.15_85/0.18)] pt-6 text-center text-xs text-[oklch(0.8_0.04_340)] space-y-3">
          <p className="text-[oklch(0.92_0.12_85)] font-medium">
            ایده و اجرا از: <span className="text-gold-gradient font-bold">رضا نبوی</span> و <span className="text-gold-gradient font-bold">آیلین گودرزی</span> · هلدینگ نبوی
          </p>
          {/* protected signature image */}
          <div
            className="relative mx-auto inline-block"
            onContextMenu={(e) => e.preventDefault()}
          >
            <img
              src="https://i.ibb.co/kVfgfwDm/IMG-20260601-143049-522.jpg"
              alt=""
              className="h-12 w-12 rounded-full object-cover opacity-80 no-save"
              draggable={false}
              style={{ filter: "drop-shadow(0 0 8px oklch(0.85 0.15 85 / 0.5))" }}
            />
            <div
              className="absolute inset-0 cursor-default"
              onContextMenu={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
          </div>
          <p className="opacity-70">© {new Date().getFullYear()} حقوق برای لیدی فم محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
