import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { getProduct, formatToman, PRODUCTS } from "@/lib/products";
import { SmokyFrame } from "@/components/SmokyFrame";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/store";

export const Route = createFileRoute("/product/$id")({
  head: ({ params }) => {
    const p = getProduct(Number(params.id));
    return {
      meta: [
        { title: p ? `${p.title} — لیدی فم` : "محصول — لیدی فم" },
        { name: "description", content: p?.description?.slice(0, 150) || "" },
        ...(p ? [{ property: "og:image", content: p.images[0] }] : []),
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const product = getProduct(Number(id));
  const add = useCart((s) => s.add);
  const [active, setActive] = useState(0);
  const [size, setSize] = useState<string | undefined>();
  const [color, setColor] = useState<string | undefined>();

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center glass rounded-3xl">
        محصول یافت نشد. <Link to="/shop" className="text-gold-gradient">بازگشت به فروشگاه</Link>
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const onAdd = () => {
    add({
      id: product.id,
      title: product.title,
      image: product.images[0],
      price: product.priceToman,
      qty: 1,
      size, color,
    });
    navigate({ to: "/cart" });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <SmokyFrame variant={product.id}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.65rem]">
              <motion.img
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={product.images[active]}
                alt={product.title}
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-3 left-0 right-0 text-center text-[11px] tracking-[0.4em] text-[oklch(0.95_0.12_85/0.95)] font-bold">
                LADYFAM.BEAUTY
              </div>
            </div>
          </SmokyFrame>
          {product.images.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square overflow-hidden rounded-xl border-2 transition ${active === i ? "border-[oklch(0.85_0.15_85)]" : "border-transparent opacity-70"}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" draggable={false} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-xs tracking-[0.4em] text-[oklch(0.85_0.15_85)]">اختصاصی از لیدی فم · {product.brand}</p>
          <h1 className="mt-3 font-display text-4xl font-black text-rose-gradient">{product.title}</h1>
          <div className="mt-4 inline-block glass-pink rounded-full px-4 py-1.5 text-xs font-bold text-[oklch(0.95_0.1_90)]">
            {product.category}
          </div>
          <p className="mt-6 text-sm leading-8 text-[oklch(0.88_0.03_340)]">
            {product.description || "محصول لاکچری منتخب بوتیک لیدی فم، با کیفیت بی‌نظیر و طراحی ویژه برای بانوی خاص."}
          </p>

          <div className="mt-6 glass rounded-2xl p-5">
            <div className="text-3xl font-black text-gold-gradient">{formatToman(product.priceToman)}</div>
            <p className="mt-1 text-xs text-[oklch(0.8_0.04_340)]">پرداخت درب منزل · بسته‌بندی محرمانه</p>
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <p className="text-xs mb-2 text-[oklch(0.85_0.04_340)]">رنگ</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`rounded-full px-4 py-1.5 text-xs font-bold border transition ${color === c ? "bg-[oklch(0.85_0.15_85)] text-[oklch(0.15_0.03_350)] border-transparent" : "glass border-[oklch(0.85_0.15_85/0.3)] text-[oklch(0.92_0.03_340)]"}`}
                  >{c}</button>
                ))}
              </div>
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-4">
              <p className="text-xs mb-2 text-[oklch(0.85_0.04_340)]">سایز</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`rounded-full px-4 py-1.5 text-xs font-bold border transition ${size === s ? "bg-[oklch(0.85_0.15_85)] text-[oklch(0.15_0.03_350)] border-transparent" : "glass border-[oklch(0.85_0.15_85/0.3)] text-[oklch(0.92_0.03_340)]"}`}
                  >{s}</button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onAdd} className="btn-luxury btn-luxury-hover">افزودن به سبد 🛍</button>
            <Link to="/shop" className="rounded-full glass px-6 py-3 text-sm font-bold text-[oklch(0.95_0.12_85)]">
              مشاهده محصولات بیشتر
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-center font-display text-3xl text-gold-gradient mb-8">پیشنهاد لیدی فم</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </section>
      )}
    </div>
  );
}
