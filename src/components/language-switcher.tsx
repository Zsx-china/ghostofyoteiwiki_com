"use client";

import { usePathname, useRouter } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = { en: "EN" };

export function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  function changeLocale(nextLocale: Locale) {
    const withoutLocale = routing.locales.some((item) => pathname === `/${item}` || pathname.startsWith(`/${item}/`))
      ? pathname.replace(/^\/(en)(?=\/|$)/, "") || "/"
      : pathname;
    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000;SameSite=Lax`;
    router.push(nextLocale === "en" ? withoutLocale : `/${nextLocale}${withoutLocale}`);
  }

  // Single-language site: render a disabled select showing only EN
  return (
    <select
      aria-label="Language"
      value={locale}
      onChange={(event) => changeLocale(event.target.value as Locale)}
      className="h-9 rounded-md border bg-background px-2 text-xs font-semibold"
    >
      <option value="en">{labels.en}</option>
    </select>
  );
}
