import { motion } from "framer-motion";
import type { ReactNode } from "react";

const PALETTES = [
  ["oklch(0.78 0.22 0 / 0.7)", "oklch(0.85 0.15 85 / 0.6)", "oklch(0.55 0.25 340 / 0.55)"],
  ["oklch(0.85 0.15 85 / 0.7)", "oklch(0.68 0.2 20 / 0.6)", "oklch(0.95 0.1 90 / 0.5)"],
  ["oklch(0.55 0.25 340 / 0.7)", "oklch(0.78 0.22 0 / 0.6)", "oklch(0.85 0.15 85 / 0.55)"],
  ["oklch(0.7 0.22 10 / 0.7)", "oklch(0.92 0.1 90 / 0.6)", "oklch(0.6 0.25 350 / 0.55)"],
  ["oklch(0.85 0.15 85 / 0.65)", "oklch(0.5 0.22 350 / 0.6)", "oklch(0.78 0.22 0 / 0.6)"],
];

export function SmokyFrame({
  children,
  variant = 0,
  className = "",
}: {
  children: ReactNode;
  variant?: number;
  className?: string;
}) {
  const c = PALETTES[variant % PALETTES.length];
  return (
    <div className={`relative ${className}`}>
      {/* smoke layer */}
      <div className="pointer-events-none absolute -inset-3 rounded-[2rem] overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -inset-4 rounded-full blur-2xl opacity-70"
          style={{ background: `radial-gradient(circle at 30% 30%, ${c[0]}, transparent 60%)` }}
          animate={{ x: [0, 12, -8, 0], y: [0, -10, 6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -inset-4 rounded-full blur-2xl opacity-70"
          style={{ background: `radial-gradient(circle at 70% 70%, ${c[1]}, transparent 60%)` }}
          animate={{ x: [0, -14, 10, 0], y: [0, 8, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -inset-4 rounded-full blur-3xl opacity-60"
          style={{ background: `radial-gradient(circle at 50% 50%, ${c[2]}, transparent 65%)` }}
          animate={{ scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {/* gold border */}
      <div className="relative rounded-[1.75rem] p-[1.5px] bg-gradient-to-br from-[oklch(0.95_0.12_85)] via-[oklch(0.78_0.22_0)] to-[oklch(0.5_0.22_350)]">
        <div className="rounded-[1.65rem] bg-[oklch(0.12_0.03_350/0.85)] backdrop-blur-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
