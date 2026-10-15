import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { JsonLd, SiteFooter, SiteHeader } from "@/components/site";
import Script from "next/script";
import { routing } from "@/i18n/routing";
import en from "@/locales/en.json";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://moonfrost.org";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const { site } = (await getMessages({ locale })) as typeof en;
  const image = `${siteUrl}/images/hero.webp`;
  return {
    metadataBase: new URL(siteUrl),
    title: { default: site.name, template: "%s" },
    description: site.description,
    openGraph: { type: "website", locale, url: siteUrl, siteName: site.name, images: [{ url: image }] },
    twitter: { card: "summary_large_image", images: [image] },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = (await getMessages({ locale })) as typeof en;
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: messages.site.name,
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512x512.png`,
    image: `${siteUrl}/images/hero.webp`,
  };

  return (
    <html lang={locale} className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FHZB5XZ14J" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FHZB5XZ14J');`}</Script>
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            <JsonLd data={organization} />
            <SiteHeader locale={locale} />
            {children}
            <SiteFooter locale={locale} />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
