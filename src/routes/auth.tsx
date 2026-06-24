import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/store";
import { SmokyFrame } from "@/components/SmokyFrame";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "ورود | ثبت‌نام — لیدی فم" }] }),
  component: Auth,
});

function Auth() {
  const { user, signup, verify, logout } = useAuth();
  const nav = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"form" | "verify">("form");
  const [sentCode, setSentCode] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");

  if (user?.isVerified) {
    return (
      <div className="mx-auto max-w-md px-4 py-20">
        <SmokyFrame>
          <div className="p-10 text-center">
            <div className="text-5xl">👑</div>
            <h1 className="mt-4 font-display text-3xl text-gold-gradient">خوش آمدید {user.name}</h1>
            <p className="mt-2 text-sm text-[oklch(0.8_0.04_340)]">{user.email}</p>
            <p className="text-xs text-[oklch(0.7_0.04_340)]">{user.phone}</p>
            <p className="mt-3 inline-flex items-center gap-1 text-xs text-emerald-300">✔ حساب کاربری شما تأیید شده است</p>
            <button onClick={() => { logout(); nav({ to: "/" }); }} className="btn-luxury btn-luxury-hover mt-6">خروج از حساب</button>
          </div>
        </SmokyFrame>
      </div>
    );
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    if (!name || !email || !phone || !password) {
      setErr("لطفاً تمام فیلدها را تکمیل کنید.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErr("ایمیل معتبر نیست.");
      return;
    }
    if (!/^09\d{9}$/.test(phone.trim())) {
      setErr("شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد.");
      return;
    }
    const c = signup({ name, email, phone });
    setSentCode(c);
    setStep("verify");
  };

  const submitVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    if (!verify(code.trim())) {
      setErr("کد وارد شده صحیح نیست.");
      return;
    }
    nav({ to: "/lingerie" });
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      {/* WARNING — gender-restricted access notice */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <SmokyFrame variant={1}>
          <div className="p-7 sm:p-8 text-right leading-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <h2 className="font-display text-2xl text-rose-gradient">اطلاعیه مهم دسترسی</h2>
            </div>
            <p className="mt-5 text-sm sm:text-[15px] text-[oklch(0.92_0.03_340)]">
              بانوی گرامی، خوش آمدید. وب‌سایت <b className="text-gold-gradient">لیدی فم</b> یک پلتفرم
              <b> اختصاصی بانوان</b> است و محتوای آن شامل محصولات شخصی، لباس زیر و اقلام محرمانهٔ بانوان می‌باشد.
              بر اساس ضوابط داخلی فروشگاه و رعایت کرامت کاربران، <b className="text-[oklch(0.92_0.12_85)]">بازدید، عضویت و خرید آقایان از این وب‌سایت ممنوع</b> است.
            </p>
            <p className="mt-3 text-sm sm:text-[15px] text-[oklch(0.9_0.03_340)]">
              با ثبت‌نام در لیدی فم، صراحتاً اعلام می‌کنید بانو هستید و اطلاعات شما (شامل ایمیل، شمارهٔ موبایل، آدرس IP و
              مشخصات دستگاه) به‌صورت رمزنگاری‌شده ثبت می‌گردد. در صورت احراز ورود یا فعالیت آقایان در وب‌سایت،
              لیدی فم این حق را برای خود محفوظ می‌دارد که دسترسی حساب را مسدود نموده و در صورت
              درخواست رسمی مراجع قانونی، اطلاعات ثبت‌شدهٔ کاربر متخلف را جهت پیگیری در اختیار مراجع ذی‌صلاح قرار دهد.
            </p>
            <p className="mt-3 text-xs text-[oklch(0.78_0.04_340)]">
              ادامهٔ فرایند ثبت‌نام به منزلهٔ پذیرش کامل این شرایط است.
            </p>
          </div>
        </SmokyFrame>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <SmokyFrame>
          <div className="p-8">
            <h1 className="font-display text-3xl text-center text-rose-gradient">
              {step === "verify" ? "تأیید ایمیل" : mode === "login" ? "ورود به لیدی فم" : "ثبت‌نام بانوی خاص"}
            </h1>

            {step === "form" && (
              <>
                <div className="mt-4 flex justify-center gap-2">
                  <button onClick={() => setMode("signup")} className={`text-xs px-4 py-1.5 rounded-full ${mode === "signup" ? "btn-luxury" : "glass text-[oklch(0.9_0.03_340)]"}`}>ثبت‌نام</button>
                  <button onClick={() => setMode("login")} className={`text-xs px-4 py-1.5 rounded-full ${mode === "login" ? "btn-luxury" : "glass text-[oklch(0.9_0.03_340)]"}`}>ورود</button>
                </div>
                <form onSubmit={submit} className="mt-6 space-y-3">
                  <input required value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="نام و نام خانوادگی"
                    className="w-full rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm outline-none border border-[oklch(0.85_0.15_85/0.25)]" />
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="ایمیل"
                    className="w-full rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm outline-none border border-[oklch(0.85_0.15_85/0.25)]" />
                  <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                    placeholder="شمارهٔ موبایل (مثال: 09123456789)"
                    className="w-full rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm outline-none border border-[oklch(0.85_0.15_85/0.25)]" />
                  <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="رمز عبور (حداقل ۶ کاراکتر)" minLength={6}
                    className="w-full rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm outline-none border border-[oklch(0.85_0.15_85/0.25)]" />
                  {err && <p className="text-xs text-rose-300 text-center">{err}</p>}
                  <button type="submit" className="btn-luxury btn-luxury-hover w-full">
                    دریافت کد تأیید ایمیل
                  </button>
                </form>
              </>
            )}

            {step === "verify" && (
              <form onSubmit={submitVerify} className="mt-6 space-y-4">
                <p className="text-center text-sm text-[oklch(0.88_0.03_340)] leading-7">
                  کد ۶ رقمی تأیید به ایمیل <b className="text-gold-gradient">{email}</b> ارسال شد.
                </p>
                {sentCode && (
                  <p className="text-center text-[11px] text-[oklch(0.78_0.04_340)]">
                    (نمایشی — کد شما: <span className="font-mono text-[oklch(0.92_0.12_85)]">{sentCode}</span>)
                  </p>
                )}
                <input required value={code} onChange={(e) => setCode(e.target.value)} inputMode="numeric" maxLength={6}
                  placeholder="کد ۶ رقمی"
                  className="w-full text-center tracking-[0.5em] rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-base outline-none border border-[oklch(0.85_0.15_85/0.25)]" />
                {err && <p className="text-xs text-rose-300 text-center">{err}</p>}
                <button type="submit" className="btn-luxury btn-luxury-hover w-full">تأیید و ورود</button>
                <button type="button" onClick={() => setStep("form")} className="w-full text-xs text-[oklch(0.85_0.04_340)] hover:underline">
                  بازگشت و ویرایش اطلاعات
                </button>
              </form>
            )}
          </div>
        </SmokyFrame>
      </motion.div>
    </div>
  );
}
