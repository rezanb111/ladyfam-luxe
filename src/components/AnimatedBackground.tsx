export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[oklch(0.55_0.25_350/0.35)] blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -left-32 h-[600px] w-[600px] rounded-full bg-[oklch(0.7_0.2_30/0.28)] blur-[140px] animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 right-1/4 h-[480px] w-[480px] rounded-full bg-[oklch(0.85_0.15_85/0.22)] blur-[130px] animate-blob" style={{ animationDelay: "-12s" }} />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.95 0.05 350) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* sparkles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[oklch(0.95_0.12_85)] animate-sparkle"
          style={{
            top: `${(i * 53) % 100}%`,
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 7) * 0.4}s`,
            boxShadow: "0 0 8px oklch(0.95 0.12 85)",
          }}
        />
      ))}
    </div>
  );
}
