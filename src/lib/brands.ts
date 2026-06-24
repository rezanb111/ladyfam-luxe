import langeror from "@/assets/brand-langeror.png";
import bluebella from "@/assets/brand-bluebella.png";
import satinsox from "@/assets/brand-satinsox.png";
import kylie from "@/assets/brand-kylie.png";
import huda from "@/assets/brand-huda.png";
import colourpop from "@/assets/brand-colourpop.png";

export type BrandInfo = {
  key: string;
  fa: string;
  en: string;
  origin: string;
  tagline: string;
  logo: string;
};

export const BRAND_REGISTRY: BrandInfo[] = [
  { key: "لانژ", fa: "لانژ پاریس", en: "LANGEROR", origin: "فرانسه", tagline: "نماد ظرافت بانوان اروپا", logo: langeror },
  { key: "بلوبلا", fa: "بلوبلا لندن", en: "BLUEBELLA", origin: "بریتانیا", tagline: "هنر لباس زیر لوکس", logo: bluebella },
  { key: "Satin & Sox", fa: "ساتن اند ساکس", en: "SATIN & SOX", origin: "بریتانیا", tagline: "آتلیه عروس بین‌المللی", logo: satinsox },
  { key: "کایلی کازمتیکس", fa: "کایلی کازمتیکس", en: "KYLIE COSMETICS", origin: "لس‌آنجلس", tagline: "ستاره صنعت زیبایی", logo: kylie },
  { key: "هدی بیوتی", fa: "هدی بیوتی", en: "HUDA BEAUTY", origin: "دبی", tagline: "شکوه آرایش خاورمیانه", logo: huda },
  { key: "کالرپاپ", fa: "کالرپاپ", en: "COLOURPOP", origin: "کالیفرنیا", tagline: "رنگ‌های جسورانه و درخشان", logo: colourpop },
];

export const getBrandInfo = (key: string) =>
  BRAND_REGISTRY.find((b) => b.key === key);
