import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center glass rounded-3xl p-12">
        <h1 className="text-7xl font-display text-gold-gradient">۴۰۴</h1>
        <p className="mt-4 text-[oklch(0.85_0.04_340)]">صفحه‌ای که می‌خواستید پیدا نشد.</p>
        <a href="/" className="btn-luxury mt-6 inline-block">بازگشت به خانه</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center glass rounded-3xl p-12">
        <h1 className="text-2xl font-display text-gold-gradient">مشکلی پیش آمد</h1>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="btn-luxury mt-6"
        >
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "لیدی فم | LADYFAM.BEAUTY — لباس زیر و آرایش لاکچری بانوان" },
      { name: "description", content: "بوتیک آنلاین لیدی فم؛ مجموعه‌ای منحصربه‌فرد از لباس زیر مجلل، آرایش و اکسسوری لاکچری برای بانوان." },
      { name: "author", content: "LADYFAM.BEAUTY" },
      { property: "og:title", content: "لیدی فم | LADYFAM.BEAUTY — لباس زیر و آرایش لاکچری بانوان" },
      { property: "og:description", content: "بوتیک آنلاین لیدی فم؛ مجموعه‌ای منحصربه‌فرد از لباس زیر مجلل، آرایش و اکسسوری لاکچری برای بانوان." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "لیدی فم | LADYFAM.BEAUTY — لباس زیر و آرایش لاکچری بانوان" },
      { name: "twitter:description", content: "بوتیک آنلاین لیدی فم؛ مجموعه‌ای منحصربه‌فرد از لباس زیر مجلل، آرایش و اکسسوری لاکچری برای بانوان." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fe47e6e5-8ad0-42bb-9827-aa44b54e2d48/id-preview-e6ee93cc--bfdceda7-ac12-495a-a6d5-4961530f4457.lovable.app-1782294711491.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fe47e6e5-8ad0-42bb-9827-aa44b54e2d48/id-preview-e6ee93cc--bfdceda7-ac12-495a-a6d5-4961530f4457.lovable.app-1782294711491.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatedBackground />
      <Navbar />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
