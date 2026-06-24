import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/store";
import { SmokyFrame } from "@/components/SmokyFrame";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "ورود | ثبت‌نام — لیدی فم" }] }),
  component: Auth,
});

function Auth() {
  const { user, login, logout } = useAuth();
  const nav = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20">
        <SmokyFrame>
          <div className="p-10 text-center">
            <div className="text-5xl">👑</div>
            <h1 className="mt-4 font-display text-3xl text-gold-gradient">خوش آمدید {user.name}</h1>
            <p className="mt-2 text-sm text-[oklch(0.8_0.04_340)]">{user.email}</p>
            <button onClick={() => { logout(); nav({ to: "/" }); }} className="btn-luxury btn-luxury-hover mt-6">خروج از حساب</button>
          </div>
        </SmokyFrame>
      </div>
    );
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    login(email, name || undefined);
    nav({ to: "/" });
  };

  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <SmokyFrame>
          <div className="p-8">
            <h1 className="font-display text-3xl text-center text-rose-gradient">
              {mode === "login" ? "ورود به لیدی فم" : "ثبت‌نام بانوی خاص"}
            </h1>
            <div className="mt-4 flex justify-center gap-2">
              <button onClick={() => setMode("login")} className={`text-xs px-4 py-1.5 rounded-full ${mode === "login" ? "btn-luxury" : "glass text-[oklch(0.9_0.03_340)]"}`}>ورود</button>
              <button onClick={() => setMode("signup")} className={`text-xs px-4 py-1.5 rounded-full ${mode === "signup" ? "btn-luxury" : "glass text-[oklch(0.9_0.03_340)]"}`}>ثبت‌نام</button>
            </div>
            <form onSubmit={submit} className="mt-6 space-y-3">
              {mode === "signup" && (
                <input
                  required value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="نام و نام خانوادگی"
                  className="w-full rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm outline-none border border-[oklch(0.85_0.15_85/0.25)]"
                />
              )}
              <input
                required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل یا شماره موبایل"
                className="w-full rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm outline-none border border-[oklch(0.85_0.15_85/0.25)]"
              />
              <input
                required type="password" placeholder="رمز عبور"
                className="w-full rounded-full bg-[oklch(0.18_0.04_350/0.6)] px-5 py-3 text-sm outline-none border border-[oklch(0.85_0.15_85/0.25)]"
              />
              <button type="submit" className="btn-luxury btn-luxury-hover w-full">
                {mode === "login" ? "ورود" : "ثبت‌نام"}
              </button>
            </form>
          </div>
        </SmokyFrame>
      </motion.div>
    </div>
  );
}
