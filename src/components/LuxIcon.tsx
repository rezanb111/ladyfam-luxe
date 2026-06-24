/**
 * Hand-crafted luxury SVG icons with gold gradient + glow.
 * Replaces emoji decoration with refined, on-brand iconography.
 */
import { memo } from "react";

type Props = { size?: number; className?: string; glow?: boolean };

const defs = (id: string) => (
  <defs>
    <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="oklch(0.95 0.13 90)" />
      <stop offset="50%" stopColor="oklch(0.78 0.18 60)" />
      <stop offset="100%" stopColor="oklch(0.88 0.14 350)" />
    </linearGradient>
    <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="1.6" result="b" />
      <feMerge>
        <feMergeNode in="b" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

const Wrap = ({ children, size = 56, className = "", glow = true, id }: Props & { children: React.ReactNode; id: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    stroke={`url(#grad-${id})`}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ filter: glow ? "drop-shadow(0 0 12px oklch(0.85 0.18 70 / 0.55))" : undefined }}
  >
    {defs(id)}
    <g filter={`url(#glow-${id})`}>{children}</g>
  </svg>
);

export const IconCrown = memo((p: Props) => (
  <Wrap {...p} id="crown">
    <path d="M8 22l10 14L32 16l14 20 10-14-4 30H12z" />
    <circle cx="8" cy="22" r="2" fill="url(#grad-crown)" />
    <circle cx="32" cy="16" r="2.4" fill="url(#grad-crown)" />
    <circle cx="56" cy="22" r="2" fill="url(#grad-crown)" />
    <path d="M14 52h36" />
  </Wrap>
));

export const IconDiamond = memo((p: Props) => (
  <Wrap {...p} id="dia">
    <path d="M16 8h32l10 14L32 58 6 22z" />
    <path d="M6 22h52M22 22l10 36M42 22L32 58M22 22l-6-14M42 22l6-14" />
  </Wrap>
));

export const IconRose = memo((p: Props) => (
  <Wrap {...p} id="rose">
    <circle cx="32" cy="28" r="6" />
    <path d="M32 22c4-6 12-4 12 4s-6 14-12 14-12-6-12-14 8-10 12-4z" />
    <path d="M32 42v14M20 50c4-4 12-4 12 0M44 50c-4-4-12-4-12 0" />
  </Wrap>
));

export const IconMoon = memo((p: Props) => (
  <Wrap {...p} id="moon">
    <path d="M44 12c-12 4-18 14-18 22s8 18 20 18c-8 6-22 4-30-4S6 26 14 18s22-10 30-6z" />
    <circle cx="50" cy="20" r="1.4" fill="url(#grad-moon)" />
    <circle cx="56" cy="32" r="1" fill="url(#grad-moon)" />
  </Wrap>
));

export const IconRibbon = memo((p: Props) => (
  <Wrap {...p} id="rib">
    <path d="M18 14c8 4 8 14 14 14s6-10 14-14c4-2 8 0 6 6-2 8-12 12-20 12s-18-4-20-12c-2-6 2-8 6-6z" />
    <path d="M16 36l8 18 8-10 8 10 8-18" />
  </Wrap>
));

export const IconSparkle = memo((p: Props) => (
  <Wrap {...p} id="sp">
    <path d="M32 6l5 16 16 5-16 5-5 16-5-16-16-5 16-5z" />
    <path d="M10 10l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
    <path d="M52 44l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
  </Wrap>
));

export const IconHeart = memo((p: Props) => (
  <Wrap {...p} id="hrt">
    <path d="M32 54S8 38 8 22a12 12 0 0124-4 12 12 0 0124 4c0 16-24 32-24 32z" />
    <path d="M20 22c0-4 4-8 8-8M44 22c0-4-4-8-8-8" opacity="0.6" />
  </Wrap>
));

export const IconLipstick = memo((p: Props) => (
  <Wrap {...p} id="lip">
    <path d="M24 6l16 6-4 14H22z" />
    <rect x="20" y="26" width="20" height="6" rx="2" />
    <rect x="22" y="32" width="16" height="26" rx="3" />
  </Wrap>
));

export const IconVeil = memo((p: Props) => (
  <Wrap {...p} id="veil">
    <circle cx="32" cy="16" r="6" />
    <path d="M16 56c0-14 6-26 16-26s16 12 16 26" />
    <path d="M22 30c-6 6-10 16-10 26M42 30c6 6 10 16 10 26" opacity="0.7" />
  </Wrap>
));

export const IconRing = memo((p: Props) => (
  <Wrap {...p} id="rng">
    <circle cx="32" cy="40" r="14" />
    <path d="M24 24l4-10h8l4 10M28 14h8" />
    <path d="M32 22l-4 6h8z" />
  </Wrap>
));

export const IconLock = memo((p: Props) => (
  <Wrap {...p} id="lck">
    <rect x="14" y="28" width="36" height="28" rx="4" />
    <path d="M22 28v-8a10 10 0 0120 0v8" />
    <circle cx="32" cy="42" r="3" fill="url(#grad-lck)" />
  </Wrap>
));

export const IconShield = memo((p: Props) => (
  <Wrap {...p} id="shd">
    <path d="M32 6l22 8v16c0 14-10 24-22 28-12-4-22-14-22-28V14z" />
    <path d="M22 30l8 8 14-16" />
  </Wrap>
));
