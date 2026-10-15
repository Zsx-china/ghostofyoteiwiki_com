"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen, Map, Play, Skull, Swords, type LucideIcon } from "lucide-react";
import { YouTubeEmbed } from "@/components/mdx/YouTubeEmbed";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { localizeHref } from "@/components/site";
import type { ContentItem } from "@/lib/content";

type ModuleHighlight = { label: string; detail: string; badge?: string };
type HomeModule = { order: number; name: string; description: string; href: string; displayType: string; highlights?: ModuleHighlight[] };

type Home = {
  hero: { eyebrow: string; title: string; description: string; primaryCta: string; secondaryCta: string; stats: string[]; videoTitle: string; videoButton: string; videoDescription: string };
  updates: { eyebrow: string; title: string; browse: string };
  categories: { title: string; description: string; items: { title: string; description: string; href: string }[] };
  start?: { eyebrow: string; title: string; cards: { number: string; title: string; description: string }[] };
  aboutGame: { title: string; body?: string; officialLink?: string; paragraphs?: string[]; stats?: { label: string; value: string }[]; cta?: string };
  explore?: { title: string; description: string; modules: HomeModule[] };
  faq: { title: string; description?: string; items: { question: string; answer: string }[] };
  finalCta: { title: string; description: string; button: string };
};

const icons: LucideIcon[] = [BookOpen, Swords, Skull, Map];

function ModulePreview({ mod }: { mod: HomeModule }) {
  if (!mod.highlights || mod.highlights.length === 0) return null;
  if (mod.displayType === "code-cards") {
    return (
      <div className="space-y-3">
        {mod.highlights.map((h, i) => (
          <div key={i} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-muted p-4">
            <div className="flex items-center gap-3">
              <code className="rounded-lg bg-background px-3 py-1.5 font-mono text-sm font-bold text-foreground">{h.label}</code>
              <span className="text-sm text-muted-foreground">{h.detail}</span>
            </div>
            {h.badge && <Badge className="shrink-0 bg-emerald-600 text-white text-[10px]">{h.badge}</Badge>}
          </div>
        ))}
      </div>
    );
  }
  if (mod.displayType === "step-by-step") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {mod.highlights.map((h, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[hsl(var(--nav-theme))] text-xs font-bold text-primary-foreground">{h.label}</span>
            <span className="text-sm leading-6 text-muted-foreground">{h.detail}</span>
          </div>
        ))}
      </div>
    );
  }
  if (mod.displayType === "tier-grid") {
    return (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {mod.highlights.map((h, i) => {
          const tierColor =
            h.label === "S" ? "border-amber-500/40 bg-amber-500/10" :
            h.label === "A" ? "border-emerald-500/40 bg-emerald-500/10" :
            h.label === "B" ? "border-blue-500/40 bg-blue-500/10" :
            h.label === "C" ? "border-zinc-500/40 bg-zinc-500/10" :
            "border-border bg-muted";
          const tierText =
            h.label === "S" ? "text-amber-600 dark:text-amber-400" :
            h.label === "A" ? "text-emerald-600 dark:text-emerald-400" :
            h.label === "B" ? "text-blue-600 dark:text-blue-400" :
            h.label === "C" ? "text-zinc-600 dark:text-zinc-400" :
            "text-muted-foreground";
          return (
            <div key={i} className={`rounded-xl border p-4 ${tierColor}`}>
              <span className={`text-sm font-bold ${tierText}`}>{h.label} Tier</span>
              <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{h.detail}</p>
            </div>
          );
        })}
      </div>
    );
  }
  if (mod.displayType === "card-list") {
    return (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {mod.highlights.map((h, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-muted p-3">
            <span className="shrink-0 text-sm font-bold text-[hsl(var(--nav-theme))]">{h.label}</span>
            <span className="text-sm font-medium text-foreground">{h.detail}</span>
            {h.badge && <Badge variant="secondary" className="ml-auto shrink-0 text-[10px]">{h.badge}</Badge>}
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function HomePageClient({ home, locale, recentArticles }: { home: Home; locale: string; articles: ContentItem[]; recentArticles: ContentItem[] }) {
  const [showVideo, setShowVideo] = useState(false);
  return <div className="min-w-0 space-y-16">
    <section className="grid overflow-hidden rounded-lg border bg-card lg:grid-cols-[1fr_.9fr]">
      <div className="p-7 sm:p-10"><Badge variant="secondary">{home.hero.eyebrow}</Badge><h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{home.hero.title}</h1><p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">{home.hero.description}</p><div className="mt-7 flex flex-wrap gap-2">{home.hero.stats.map((stat) => <Badge key={stat} variant="outline">{stat}</Badge>)}</div><div className="mt-8 flex flex-wrap gap-3"><Button asChild><a href="https://store.steampowered.com/app/2561630/Moonfrost/" target="_blank" rel="noreferrer">{home.hero.primaryCta}<ArrowRight className="ml-2 size-4" /></a></Button><Button asChild variant="outline"><Link href={localizeHref("/guide", locale)}>{home.hero.secondaryCta}</Link></Button></div></div>
      <div className="relative min-h-72 bg-muted"><Image src="/images/hero.webp" alt="A windswept mountain landscape" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" /></div>
    </section>
    <section aria-labelledby="gameplay-title">
      <div className="flex flex-wrap items-center gap-4"><h2 id="gameplay-title" className="text-2xl font-bold">{home.hero.videoTitle}</h2><Button onClick={() => setShowVideo(true)} aria-controls="gameplay-video"><Play className="mr-2 size-4" />{home.hero.videoButton}</Button></div>
      <p className="mt-3 text-muted-foreground">{home.hero.videoDescription}</p>
      <div id="gameplay-video" className="mt-5">
        {showVideo ? <YouTubeEmbed videoId="oSWarPKgHHM" title={home.hero.videoTitle} /> : <button type="button" onClick={() => setShowVideo(true)} aria-label={home.hero.videoButton} className="relative block aspect-video w-full overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><Image src="/images/hero-trailer-thumbnail.jpg" alt="Moonfrost official trailer" fill sizes="(max-width: 1024px) 100vw, 850px" className="object-cover" /><span className="absolute inset-0 grid place-items-center"><Play className="size-16 rounded-full bg-black/70 p-4 text-white" /></span></button>}
      </div>
      <a href="https://www.youtube.com/watch?v=oSWarPKgHHM" target="_blank" rel="noreferrer" className="mt-2 inline-flex text-sm text-primary hover:underline">Moonfrost YouTube<ArrowRight className="ml-2 size-4" /></a>
    </section>
    {home.start && (
      <section>
        <p className="text-sm font-semibold text-[hsl(var(--nav-theme))]">{home.start.eyebrow}</p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">{home.start.title}</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {home.start.cards.map((card) => (
            <div key={card.number} className="rounded-2xl border border-border bg-card/70 p-5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[hsl(var(--nav-theme))] text-sm font-bold text-primary-foreground">{card.number}</span>
              <h3 className="mt-4 font-bold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    )}
    <section><p className="text-sm font-semibold uppercase tracking-wide text-primary">{home.updates.eyebrow}</p><div className="mt-2 flex items-end justify-between gap-4"><h2 className="text-2xl font-bold">{home.updates.title}</h2><Link className="text-sm font-medium text-primary hover:underline" href={localizeHref("/guide", locale)}>{home.updates.browse}</Link></div><div className="mt-6 grid gap-3 sm:grid-cols-2">{recentArticles.slice(0, 4).map((article) => <Link key={article.slug} href={localizeHref(`/${article.contentType}/${article.slug}`, locale)} className="rounded-lg border p-5 transition-colors hover:bg-muted"><p className="text-sm text-primary">{article.metadata.category}</p><h3 className="mt-2 font-semibold">{article.metadata.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{article.metadata.summary || article.metadata.description}</p></Link>)}</div></section>
    <section><h2 className="text-2xl font-bold">{home.categories.title}</h2><p className="mt-2 text-muted-foreground">{home.categories.description}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{home.categories.items.map((item, index) => { const Icon = icons[index]; return <Link key={item.href} href={localizeHref(item.href, locale)} className="flex gap-4 rounded-lg border p-5 transition-colors hover:bg-muted"><Icon className="mt-0.5 size-5 text-primary" /><div><h3 className="font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p></div></Link>; })}</div></section>
    {home.aboutGame.paragraphs && home.aboutGame.stats ? (
      <section className="grid gap-8 rounded-3xl border border-border bg-card/60 p-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">{home.aboutGame.title}</h2>
          {home.aboutGame.paragraphs.map((p) => <p key={p} className="mt-5 leading-8 text-muted-foreground">{p}</p>)}
          {home.aboutGame.cta && <Button asChild className="mt-6"><Link href={localizeHref("/guide", locale)}>{home.aboutGame.cta}</Link></Button>}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
          {home.aboutGame.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-background p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p>
              <p className="mt-2 text-xl font-bold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>
    ) : (
      <section className="border-y py-10"><h2 className="text-2xl font-bold">{home.aboutGame.title}</h2><p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{home.aboutGame.body}</p>{home.aboutGame.officialLink && <a className="mt-5 inline-flex text-sm font-medium text-primary hover:underline" href="https://store.steampowered.com/app/2561630/Moonfrost/" target="_blank" rel="noreferrer">{home.aboutGame.officialLink}<ArrowRight className="ml-2 size-4" /></a>}</section>
    )}
    {home.explore && home.explore.modules && home.explore.modules.length > 0 && (
      <section>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">{home.explore.title}</h2>
        <p className="mt-2 text-muted-foreground">{home.explore.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {home.explore.modules.map((mod) => (
            <span key={mod.order} className="rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-sm text-muted-foreground">
              {mod.name}
            </span>
          ))}
        </div>
        <div className="mt-8 space-y-6">
          {home.explore.modules.map((mod) => (
            <div key={mod.order} className="overflow-hidden rounded-2xl border border-border bg-card/70">
              <div className="border-b border-border bg-muted/30 px-6 py-4">
                <h3 className="text-lg font-bold text-foreground">{mod.name}</h3>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{mod.description}</p>
              </div>
              <div className="px-6 py-5">
                <ModulePreview mod={mod} />
                {/* shortcut: guide links hidden — target pages not planned; restore <Link href={localizeHref(mod.href, locale)}> here when content lands */}
              </div>
            </div>
          ))}
        </div>
      </section>
    )}
    <section><h2 className="text-2xl font-bold">{home.faq.title}</h2>{home.faq.description && <p className="mt-2 text-muted-foreground">{home.faq.description}</p>}<Accordion type="single" collapsible className="mt-4">{home.faq.items.map((item, index) => <AccordionItem key={item.question} value={`faq-${index}`}><AccordionTrigger>{item.question}</AccordionTrigger><AccordionContent className="leading-7 text-muted-foreground">{item.answer}</AccordionContent></AccordionItem>)}</Accordion></section>
    <section className="rounded-lg bg-primary px-7 py-10 text-primary-foreground sm:px-10"><h2 className="text-2xl font-bold">{home.finalCta.title}</h2><p className="mt-3 max-w-2xl text-primary-foreground/80">{home.finalCta.description}</p><Button asChild variant="secondary" className="mt-6 h-auto whitespace-normal text-left"><a href="https://store.steampowered.com/app/2561630/Moonfrost/" target="_blank" rel="noreferrer">{home.finalCta.button}<ArrowRight className="ml-2 size-4 shrink-0" /></a></Button></section>
  </div>;
}
