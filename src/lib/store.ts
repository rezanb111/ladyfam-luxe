import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  qty: number;
  size?: string;
  color?: string;
};

type CartState = {
  items: CartItem[];
  add: (i: CartItem) => void;
  remove: (id: number) => void;
  setQty: (id: number, qty: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (i) =>
        set((s) => {
          const ex = s.items.find((x) => x.id === i.id);
          if (ex) return { items: s.items.map((x) => x.id === i.id ? { ...x, qty: x.qty + i.qty } : x) };
          return { items: [...s.items, i] };
        }),
      remove: (id) => set((s) => ({ items: s.items.filter((x) => x.id !== id) })),
      setQty: (id, qty) => set((s) => ({ items: s.items.map((x) => x.id === id ? { ...x, qty: Math.max(1, qty) } : x) })),
      clear: () => set({ items: [] }),
    }),
    { name: "ladyfam-cart" }
  )
);

export type AuthUser = {
  name: string;
  email: string;
  phone: string;
  isVerified: boolean;
};

type AuthState = {
  user: AuthUser | null;
  pendingCode: string | null;
  signup: (data: { name: string; email: string; phone: string }) => string;
  verify: (code: string) => boolean;
  login: (email: string, name?: string) => void;
  logout: () => void;
};

const genCode = () => String(Math.floor(100000 + Math.random() * 900000));

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      pendingCode: null,
      signup: ({ name, email, phone }) => {
        const code = genCode();
        set({
          user: { name, email, phone, isVerified: false },
          pendingCode: code,
        });
        return code;
      },
      verify: (code) => {
        const { pendingCode, user } = get();
        if (!user || !pendingCode || code !== pendingCode) return false;
        set({ user: { ...user, isVerified: true }, pendingCode: null });
        return true;
      },
      login: (email, name) =>
        set({
          user: { email, name: name || email.split("@")[0], phone: "", isVerified: true },
          pendingCode: null,
        }),
      logout: () => set({ user: null, pendingCode: null }),
    }),
    { name: "ladyfam-auth" }
  )
);
