import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { SmokyFrame } from "./SmokyFrame";
import { formatToman, type Product } from "@/lib/products";

export function ProductCard({
  product,
  index = 0,
  spoiler = false,
}: {
  product: Product;
  index?: number;
  spoiler?: boolean;
}) {
  const [revealed, setRevealed] = useState(false);
  const isHidden = spoiler && !revealed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.04 }}
      whileHover={{ y: -6 }}
    >
      <SmokyFrame variant={index}>
        <Link to="/product/$id" params={{ id: String(product.id) }} className="block group">
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-[1.65rem]">
            <img
              src={product.images[0]}
              alt={product.title}
              loading="lazy"
              decoding="async"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${
                isHidden ? "blur-[22px] scale-110 brightness-75" : ""
              }`}
            />
            {isHidden && (
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); setRevealed(true); }}
                className="absolute inset-0 z-10 spoiler-overlay flex items-center justify-center"
                aria-label="نمایش تصویر"
              >
                <span className="glass-pink rounded-full px-4 py-1.5 text-[11px] font-bold text-[oklch(0.97_0.05_340)] backdrop-blur-md">
                  👁 نمایش
                </span>
              </button>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.03_350/0.85)] via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 right-3 glass-pink rounded-full px-3 py-1 text-[10px] font-bold text-[oklch(0.95_0.1_90)]">
              {product.category}
            </div>
            <div className="absolute bottom-2 left-0 right-0 text-center text-[9px] tracking-[0.3em] text-[oklch(0.95_0.12_85/0.85)]">
              LADYFAM.BEAUTY
            </div>
          </div>
          <div className="p-4">
            <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-bold text-[oklch(0.97_0.02_340)] transition-colors group-hover:text-[oklch(0.92_0.12_85)]">
              {product.title}
            </h3>
            <p className="mt-1 text-[11px] text-[oklch(0.75_0.04_340)]">اختصاصی از لیدی فم · {product.brand}</p>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-base font-bold text-gold-gradient">
                {formatToman(product.priceToman)}
              </span>
              <span className="text-[10px] text-[oklch(0.78_0.18_0)]">مشاهده →</span>
            </div>
          </div>
        </Link>
      </SmokyFrame>
    </motion.div>
  );
}
