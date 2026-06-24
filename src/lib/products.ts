import data from "@/data/products.json";

export type Product = {
  id: number;
  slug: string;
  title: string;
  brand: string;
  brandSlug: string;
  category: string;
  priceUsd: number;
  priceToman: number;
  images: string[];
  colors?: string[];
  sizes?: string[];
  description: string;
  isLingerie: boolean;
};

export const PRODUCTS = data as Product[];

export const CATEGORIES = Array.from(
  new Set(PRODUCTS.map((p) => p.category))
).map((c) => ({
  name: c,
  count: PRODUCTS.filter((p) => p.category === c).length,
}));

export const BRANDS = Array.from(
  new Set(PRODUCTS.map((p) => p.brand))
).map((b) => ({
  name: b,
  count: PRODUCTS.filter((p) => p.brand === b).length,
}));

export const formatToman = (n: number) =>
  new Intl.NumberFormat("fa-IR").format(n) + " تومان";

export const getProduct = (id: number) =>
  PRODUCTS.find((p) => p.id === id);

export const featuredLingerie = PRODUCTS.filter((p) => p.isLingerie).slice(0, 24);
