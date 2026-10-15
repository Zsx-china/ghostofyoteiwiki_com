import Link from "next/link";
import { BookOpen, ChevronRight, Menu } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { NavGroup } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ClientThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";

export function localizeHref(href: string, locale: string) {
  return locale === "en" ? href : `/${locale}${href}`;
}

export async function SiteHeader({ locale }: { locale: string }) {
  const t = await getTranslations("nav");
  const links = [{ href: "/guide", label: t("guide") }];

  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={localizeHref("/", locale)} className="flex items-center gap-3 font-semibold tracking-wide">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">MF</span>
          <span className="hidden sm:block">MOONFROST WIKI</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => <Link key={link.href} href={localizeHref(link.href, locale)} className="text-muted-foreground hover:text-foreground">{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} />
          <ClientThemeToggle label={t("toggleTheme")} />
          <Sheet>
            <SheetTrigger asChild><Button variant="ghost" size="icon" className="md:hidden" aria-label={t("menu")}><Menu className="size-5" /></Button></SheetTrigger>
            <SheetContent side="right" className="w-72" aria-describedby={undefined}>
              <SheetTitle className="sr-only">{t("menu")}</SheetTitle>
              <nav className="mt-10 grid gap-1">
                {links.map((link) => <SheetClose key={link.href} asChild><Link href={localizeHref(link.href, locale)} className="rounded-lg px-3 py-2 text-sm hover:bg-muted">{link.label}</Link></SheetClose>)}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function Breadcrumbs({ locale, items }: { locale: string; items: { label: string; href?: string }[] }) {
  return <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"><Link href={localizeHref("/", locale)} className="hover:text-foreground">Home</Link>{items.map((item) => <span key={item.label} className="flex items-center gap-2"><ChevronRight className="size-4" />{item.href ? <Link href={localizeHref(item.href, locale)} className="hover:text-foreground">{item.label}</Link> : <span className="text-foreground">{item.label}</span>}</span>)}</nav>;
}

export async function WikiSidebar({ locale, navGroups, currentPath: _currentPath }: { locale: string; navGroups: NavGroup[]; currentPath?: string }) {
  const t = await getTranslations("shared");
  const codes = await getTranslations("footer");
  return <aside className="hidden lg:block"><div className="sticky top-24 rounded-lg border bg-card p-4"><div className="mb-3 flex items-center gap-2 text-sm font-semibold"><BookOpen className="size-4" />{t("wikiNavigation")}</div><nav className="space-y-4">{navGroups.map((group) => <div key={group.slug}><Link href={localizeHref(`/${group.slug}`, locale)} className="text-sm font-semibold hover:text-primary">{group.title}</Link><div className="mt-2 grid gap-1">{group.links.slice(1).map((link) => <Link key={link.href} href={localizeHref(link.href, locale)} className="truncate text-sm text-muted-foreground hover:text-foreground">{link.label}</Link>)}</div></div>)}</nav><div className="mt-5 border-t pt-4"><p className="text-sm font-semibold">{codes("codesTitle")}</p><p className="mt-2 text-sm text-muted-foreground">{codes("noCodes")}</p></div></div></aside>;
}

export async function SiteFooter({ locale }: { locale: string }) {
  const t = await getTranslations("footer");
  const site = await getTranslations("site");
  return <footer className="border-t"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8"><div><p className="font-semibold text-foreground">{site("name")}</p><p className="mt-1 max-w-xl">{t("disclaimer")}</p></div><div className="space-y-3 sm:max-w-md"><div className="flex flex-wrap gap-x-4 gap-y-2"><Link href={localizeHref("/guide", locale)} className="hover:text-foreground">{t("guides")}</Link><a href="https://store.steampowered.com/app/2561630/Moonfrost/" target="_blank" rel="noreferrer" className="hover:text-foreground">{t("officialGame")}</a><a href="https://www.youtube.com/@moonfrostgame" target="_blank" rel="noreferrer" className="hover:text-foreground">{t("youtube")}</a><a href="https://www.moonfrost.io" target="_blank" rel="noreferrer" className="hover:text-foreground">{t("developer")}</a></div><div className="flex flex-wrap gap-x-4 gap-y-2">{[["about", "/about"], ["privacy", "/privacy-policy"], ["terms", "/terms-of-service"], ["copyright", "/copyright"]].map(([label, href]) => <Link key={href} href={localizeHref(href, locale)} className="hover:text-foreground">{t(label)}</Link>)}</div></div></div></footer>;
}

export function JsonLd({ data }: { data: object }) { return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />; }
