import { createFileRoute } from "@tanstack/react-router";
import { SmokyFrame } from "@/components/SmokyFrame";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "تماس با لیدی فم" }] }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 grid md:grid-cols-2 gap-6">
      <SmokyFrame variant={1}>
        <div className="p-8">
          <h2 className="font-display text-3xl text-gold-gradient">شعبه مرکزی</h2>
          <p className="mt-4 text-sm leading-8 text-[oklch(0.9_0.03_340)]">
            جزیره کیش<br />
            مرکز بزرگ تجاری · طبقه دوم<br />
            واحد ۳۴۶ و ۳۴۸
          </p>
          <p className="mt-6 text-xs text-[oklch(0.78_0.18_0)]">ladyfam.beauty</p>
        </div>
      </SmokyFrame>
      <SmokyFrame variant={2}>
        <div className="p-8">
          <h2 className="font-display text-3xl text-gold-gradient">ارتباط با ما</h2>
          <form className="mt-6 space-y-3">
            <input placeholder="نام" className="w-full rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm border border-[oklch(0.85_0.15_85/0.25)]" />
            <input placeholder="ایمیل" className="w-full rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm border border-[oklch(0.85_0.15_85/0.25)]" />
            <textarea rows={4} placeholder="پیام شما..." className="w-full rounded-2xl bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm border border-[oklch(0.85_0.15_85/0.25)]" />
            <button type="button" className="btn-luxury btn-luxury-hover w-full">ارسال پیام</button>
          </form>
        </div>
      </SmokyFrame>
    </div>
  );
}
