import { Link } from "@tanstack/react-router";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "text-xl", md: "text-2xl", lg: "text-4xl" };
  return (
    <Link to="/" className="group inline-flex flex-col items-center leading-none">
      <span className={`${sizes[size]} font-display font-bold text-gold-gradient tracking-wide`}>
        LADYFAM
      </span>
      <span className="mt-0.5 text-[10px] tracking-[0.4em] text-[oklch(0.85_0.15_85/0.8)]">
        ✦ BEAUTY ✦
      </span>
    </Link>
  );
}
