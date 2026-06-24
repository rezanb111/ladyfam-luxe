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

type AuthState = {
  user: { name: string; email: string } | null;
  login: (email: string, name?: string) => void;
  logout: () => void;
};
export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (email, name) => set({ user: { email, name: name || email.split("@")[0] } }),
      logout: () => set({ user: null }),
    }),
    { name: "ladyfam-auth" }
  )
);
