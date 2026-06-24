import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/store";
import { formatToman } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "سبد خرید — لیدی فم" }] }),
  component: Cart,
});

function Cart() {
  const { items, remove, setQty } = useCart();
  const total = items.reduce((a, b) => a + b.price * b.qty, 0);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-4xl text-center text-rose-gradient mb-10">سبد خرید بانو</h1>

      {items.length === 0 ? (
        <div className="glass rounded-3xl p-12 text-center">
          <p className="text-[oklch(0.85_0.04_340)]">سبد شما خالی است.</p>
          <Link to="/shop" className="btn-luxury btn-luxury-hover inline-block mt-6">شروع خرید</Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          <div className="space-y-3">
            {items.map((it) => (
              <div key={it.id} className="glass rounded-2xl p-4 flex gap-4 items-center">
                <img src={it.image} alt="" className="h-24 w-20 rounded-xl object-cover" draggable={false} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm text-[oklch(0.97_0.02_340)] truncate">{it.title}</h3>
                  <p className="text-xs text-[oklch(0.78_0.18_0)] mt-1">{formatToman(it.price)}</p>
                  {(it.size || it.color) && (
                    <p className="text-[10px] text-[oklch(0.78_0.04_340)] mt-1">
                      {it.color && `رنگ: ${it.color}`} {it.size && `· سایز: ${it.size}`}
                    </p>
                  )}
                  <div className="mt-2 flex items-center gap-2">
                    <button onClick={() => setQty(it.id, it.qty - 1)} className="glass h-7 w-7 rounded-full text-sm">−</button>
                    <span className="text-sm font-bold w-6 text-center">{it.qty}</span>
                    <button onClick={() => setQty(it.id, it.qty + 1)} className="glass h-7 w-7 rounded-full text-sm">+</button>
                    <button onClick={() => remove(it.id)} className="mr-auto text-[10px] text-[oklch(0.7_0.2_25)]">حذف</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="glass-pink rounded-2xl p-6 h-fit sticky top-24">
            <div className="flex justify-between text-sm text-[oklch(0.9_0.03_340)]">
              <span>مجموع</span>
              <span className="font-bold text-gold-gradient">{formatToman(total)}</span>
            </div>
            <div className="flex justify-between text-xs mt-2 text-[oklch(0.78_0.04_340)]">
              <span>ارسال</span><span>پرداخت درب منزل</span>
            </div>
            <Link to="/checkout" className="btn-luxury btn-luxury-hover mt-6 w-full inline-block text-center">
              نهایی‌سازی سفارش
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
