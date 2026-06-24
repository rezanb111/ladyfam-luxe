import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Logo } from "./Logo";
import { useCart, useAuth } from "@/lib/store";

const LINKS = [
  { to: "/", label: "خانه" },
  { to: "/shop", label: "فروشگاه" },
  { to: "/lingerie", label: "لباس زیر" },
  { to: "/about", label: "درباره ما" },
  { to: "/contact", label: "تماس" },
] as const;

export function Navbar() {
  const items = useCart((s) => s.items);
  const user = useAuth((s) => s.user);
  const [open, setOpen] = useState(false);
  const totalQty = items.reduce((a, b) => a + b.qty, 0);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50"
    >
      <div className="glass border-x-0 border-t-0 border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-6">
            <Logo />
            <nav className="hidden lg:flex items-center gap-6">
              {LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm font-medium text-[oklch(0.9_0.03_340)] transition hover:text-[oklch(0.92_0.12_85)]"
                  activeProps={{ className: "text-[oklch(0.92_0.12_85)]" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/auth"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full glass-pink px-4 py-2 text-xs font-bold text-[oklch(0.97_0.02_340)] hover:scale-105 transition-transform"
            >
              {user ? `👑 ${user.name}` : "ورود / ثبت‌نام"}
            </Link>
            <Link
              to="/cart"
              className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-l from-[oklch(0.78_0.18_0)] to-[oklch(0.85_0.15_85)] px-4 py-2 text-xs font-bold text-[oklch(0.15_0.03_350)] shadow-lg shadow-[oklch(0.78_0.18_0/0.4)] hover:scale-105 transition-transform"
            >
              🛍 سبد
              {totalQty > 0 && (
                <span className="absolute -top-1 -left-1 grid h-5 w-5 place-items-center rounded-full bg-[oklch(0.97_0.02_340)] text-[10px] font-black text-[oklch(0.5_0.22_350)]">
                  {totalQty}
                </span>
              )}
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden glass rounded-full p-2 text-[oklch(0.95_0.12_85)]"
              aria-label="منو"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="lg:hidden border-t border-[oklch(0.85_0.15_85/0.2)] px-4 py-3 flex flex-col gap-3"
          >
            {LINKS.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm font-medium text-[oklch(0.92_0.03_340)]">
                {l.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
