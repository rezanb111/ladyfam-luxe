import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/store";
import { formatToman } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "پرداخت درب منزل — لیدی فم" }] }),
  component: Checkout,
});

function Checkout() {
  const { items, clear } = useCart();
  const [done, setDone] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", phone: "", province: "", city: "", address: "", postal: "", note: "",
  });
  const total = items.reduce((a, b) => a + b.price * b.qty, 0);

  if (done) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="glass-pink rounded-3xl p-12">
          <div className="text-6xl">🎀</div>
          <h1 className="mt-6 font-display text-4xl text-gold-gradient">سفارش شما ثبت شد</h1>
          <p className="mt-4 text-[oklch(0.9_0.03_340)]">کد پیگیری: <strong className="text-gold-gradient">{done}</strong></p>
          <p className="mt-3 text-sm text-[oklch(0.8_0.04_340)]">
            کارشناسان لیدی فم به‌زودی با شما تماس می‌گیرند. هنگام تحویل کالا، مبلغ را به مأمور ارسال پرداخت کنید.
          </p>
          <Link to="/" className="btn-luxury btn-luxury-hover mt-8 inline-block">بازگشت به خانه</Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center glass rounded-3xl">
        سبد شما خالی است. <Link to="/shop" className="text-gold-gradient">شروع خرید</Link>
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = "LF-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setDone(code);
    clear();
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-center text-rose-gradient mb-10">پرداخت درب منزل</h1>
      <form onSubmit={onSubmit} className="grid lg:grid-cols-[1fr_360px] gap-6">
        <div className="glass rounded-3xl p-6 space-y-4">
          <p className="text-sm text-[oklch(0.85_0.04_340)]">
            🔒 اطلاعات شما کاملاً محرمانه نزد لیدی فم محفوظ می‌ماند.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="نام و نام خانوادگی" v={form.name} on={(v) => setForm({ ...form, name: v })} required />
            <Field label="شماره موبایل" v={form.phone} on={(v) => setForm({ ...form, phone: v })} required type="tel" />
            <Field label="استان" v={form.province} on={(v) => setForm({ ...form, province: v })} required />
            <Field label="شهر" v={form.city} on={(v) => setForm({ ...form, city: v })} required />
            <Field label="کد پستی" v={form.postal} on={(v) => setForm({ ...form, postal: v })} required />
          </div>
          <div>
            <label className="text-xs text-[oklch(0.85_0.04_340)] mb-2 block">آدرس کامل</label>
            <textarea
              required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
              rows={3}
              className="w-full rounded-2xl bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm outline-none border border-[oklch(0.85_0.15_85/0.25)] focus:border-[oklch(0.85_0.15_85/0.6)]"
            />
          </div>
          <div>
            <label className="text-xs text-[oklch(0.85_0.04_340)] mb-2 block">توضیحات (اختیاری)</label>
            <textarea
              value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })}
              rows={2}
              className="w-full rounded-2xl bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm outline-none border border-[oklch(0.85_0.15_85/0.25)]"
            />
          </div>
        </div>

        <div className="glass-pink rounded-3xl p-6 h-fit sticky top-24">
          <h3 className="font-bold text-gold-gradient mb-3">خلاصه سفارش</h3>
          {items.map((it) => (
            <div key={it.id} className="flex justify-between text-xs py-2 border-b border-[oklch(0.85_0.15_85/0.15)]">
              <span className="truncate ml-2">{it.title} × {it.qty}</span>
              <span className="text-[oklch(0.95_0.1_90)] shrink-0">{formatToman(it.price * it.qty)}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold mt-4 text-sm">
            <span>مجموع</span>
            <span className="text-gold-gradient">{formatToman(total)}</span>
          </div>
          <p className="text-[10px] text-[oklch(0.78_0.04_340)] mt-3">روش پرداخت: نقدی هنگام تحویل</p>
          <button type="submit" className="btn-luxury btn-luxury-hover w-full mt-6">ثبت نهایی سفارش</button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, v, on, required, type = "text" }: { label: string; v: string; on: (v: string) => void; required?: boolean; type?: string }) {
  return (
    <div>
      <label className="text-xs text-[oklch(0.85_0.04_340)] mb-2 block">{label}</label>
      <input
        required={required} type={type} value={v} onChange={(e) => on(e.target.value)}
        className="w-full rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm outline-none border border-[oklch(0.85_0.15_85/0.25)] focus:border-[oklch(0.85_0.15_85/0.6)]"
      />
    </div>
  );
}
