# Graph Report - ghostofyoteiwiki_com  (2026-10-11)

## Corpus Check
- 61 files · ~36,476 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 3, .lock 1, .toml 1)

## Summary
- 419 nodes · 636 edges · 29 communities (21 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4ab8fb44`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [...slug]/page.tsx
- package.json
- cn
- HomePageClient.tsx
- dependencies
- de/guide/ghost-of-ytei.mdx
- a11y
- biome.json
- compilerOptions
- components.json
- devDependencies
- en/guide/ghost-of-ytei.mdx
- LegalPage
- manifest.json
- README.md
- site.tsx
- eslint.config.mjs
- postcss.config.mjs
- es/guide/ghost-of-ytei.mdx
- fr/guide/ghost-of-ytei.mdx
- pt/guide/ghost-of-ytei.mdx
- collapsible-nav-group.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 35 edges
2. `compilerOptions` - 17 edges
3. `a11y` - 16 edges
4. `react` - 13 edges
5. `next` - 12 edges
6. `lucide-react` - 11 edges
7. `HomePageClient()` - 11 edges
8. `localizeHref()` - 11 edges
9. `Button` - 11 edges
10. `DetailPage()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `HomePageClient()` --calls--> `localizeHref()`  [EXTRACTED]
  src/app/[locale]/HomePageClient.tsx → src/components/site.tsx
- `HomePageClient()` --calls--> `Button`  [EXTRACTED]
  src/app/[locale]/HomePageClient.tsx → src/components/ui/button.tsx
- `LocaleHomePage()` --calls--> `HomePageClient()`  [EXTRACTED]
  src/app/[locale]/page.tsx → src/app/[locale]/HomePageClient.tsx
- `generateStaticParams()` --calls--> `getAllContentPaths()`  [EXTRACTED]
  src/app/[locale]/[...slug]/page.tsx → src/lib/content.ts
- `NavigationPage()` --calls--> `Badge()`  [EXTRACTED]
  src/app/[locale]/[...slug]/page.tsx → src/components/ui/badge.tsx

## Import Cycles
- None detected.

## Communities (29 total, 8 thin omitted)

### Community 0 - "[...slug]/page.tsx"
Cohesion: 0.10
Nodes (40): lucide-react, LocaleHomePage(), Messages, ArticleCards(), DetailPage(), generateMetadata(), generateStaticParams(), languageAlternates() (+32 more)

### Community 1 - "package.json"
Cohesion: 0.06
Nodes (33): nextConfig, withMDX, withNextIntl, name, private, scripts, build, dev (+25 more)

### Community 2 - "cn"
Cohesion: 0.11
Nodes (27): @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-separator, Card, CardContent, CardDescription, CardFooter, CardHeader (+19 more)

### Community 3 - "HomePageClient.tsx"
Cohesion: 0.16
Nodes (15): @radix-ui/react-accordion, react, Home, HomeModule, HomePageClient(), icons, ModuleHighlight, ModulePreview() (+7 more)

### Community 4 - "dependencies"
Cohesion: 0.08
Nodes (24): dependencies, class-variance-authority, clsx, lucide-react, @mdx-js/loader, @mdx-js/react, next, next-intl (+16 more)

### Community 5 - "de/guide/ghost-of-ytei.mdx"
Cohesion: 0.17
Nodes (11): Editionen und Möglichkeiten zum Weiterspielen, Erkundung: Folge der Reise, nicht nur den Zielpersonen, Geschichte und Schauplatz: Atsus Reise durch Ezo, Ghost of Yōtei auf einen Blick, Häufige Fragen, Ist es eine Fortsetzung von Ghost of Tsushima?, Kampf: Entwickle einen Stil, der zu dir passt, Muss ich zuerst Ghost of Tsushima spielen? (+3 more)

### Community 6 - "a11y"
Cohesion: 0.09
Nodes (22): noAutofocus, noDistractingElements, noHeaderScope, noInteractiveElementToNoninteractiveRole, noLabelWithoutControl, noNoninteractiveElementToInteractiveRole, noNoninteractiveTabindex, noPositiveTabindex (+14 more)

### Community 7 - "biome.json"
Cohesion: 0.10
Nodes (19): files, ignore, ignoreUnknown, include, formatter, enabled, indentStyle, quoteStyle (+11 more)

### Community 8 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, jsxImportSource, lib (+11 more)

### Community 9 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 10 - "devDependencies"
Cohesion: 0.18
Nodes (11): devDependencies, @biomejs/biome, eslint, eslint-config-next, @eslint/eslintrc, postcss, tailwindcss, @types/node (+3 more)

### Community 11 - "en/guide/ghost-of-ytei.mdx"
Cohesion: 0.17
Nodes (11): Combat: build a style that suits you, Do I need to play Ghost of Tsushima first?, Editions and ways to keep playing, Exploration: follow the journey, not just the targets, FAQ, Ghost of Yōtei at a glance, Is it a sequel to Ghost of Tsushima?, Story and setting: Atsu’s journey through Ezo (+3 more)

### Community 12 - "LegalPage"
Cohesion: 0.38
Nodes (5): AboutPage(), CopyrightPage(), PrivacyPolicyPage(), TermsOfServicePage(), LegalPage()

### Community 13 - "manifest.json"
Cohesion: 0.22
Nodes (8): background_color, description, display, icons, name, short_name, start_url, theme_color

### Community 14 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 15 - "site.tsx"
Cohesion: 0.07
Nodes (22): class-variance-authority, next, next-intl, next-themes, @radix-ui/react-slot, inter, LocaleLayout(), NotFoundPage() (+14 more)

### Community 16 - "eslint.config.mjs"
Cohesion: 0.25
Nodes (5): compat, __dirname, eslintConfig, __filename, @eslint/eslintrc

### Community 21 - "es/guide/ghost-of-ytei.mdx"
Cohesion: 0.17
Nodes (11): ¿A quién persigue Atsu en Ghost of Yōtei?, Combate: crea un estilo que se adapte a ti, Ediciones y formas de seguir jugando, ¿Es una secuela de Ghost of Tsushima?, Exploración: sigue el viaje, no solo los objetivos, Ghost of Yōtei de un vistazo, Historia y ambientación: el viaje de Atsu por Ezo, Preguntas frecuentes (+3 more)

### Community 22 - "fr/guide/ghost-of-ytei.mdx"
Cohesion: 0.17
Nodes (11): Combat : créez un style qui vous convient, Dois-je jouer à Ghost of Tsushima avant ?, Est-ce une suite de Ghost of Tsushima ?, Exploration : suivez le voyage, pas seulement les cibles, FAQ, Ghost of Yōtei en un coup d’œil, Histoire et cadre : le voyage d’Atsu à travers l’Ezo, Que puis-je faire après l’histoire principale ? (+3 more)

### Community 23 - "pt/guide/ghost-of-ytei.mdx"
Cohesion: 0.17
Nodes (11): Combate: crie um estilo que combine com você, Edições e formas de continuar jogando, Exploração: siga a jornada, não apenas os alvos, Ghost of Yōtei em resumo, História e cenário: a jornada de Atsu por Ezo, O que posso fazer depois da história principal?, Perguntas frequentes, Preciso jogar Ghost of Tsushima primeiro? (+3 more)

### Community 24 - "collapsible-nav-group.tsx"
Cohesion: 0.67
Nodes (3): CollapsibleNavGroup(), CollapsibleNavGroupProps, hasMatchingLink()

## Knowledge Gaps
- **207 isolated node(s):** `$schema`, `enabled`, `clientKind`, `useIgnoreFile`, `ignoreUnknown` (+202 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 244 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **What connects `$schema`, `enabled`, `clientKind` to the rest of the system?**
  _207 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `[...slug]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09608843537414966 - nodes in this community are weakly interconnected._
- **Why does `next` connect `site.tsx` to `[...slug]/page.tsx`, `package.json`, `HomePageClient.tsx`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05547652916073969 - nodes in this community are weakly interconnected._
- **Why does `next-intl` connect `site.tsx` to `[...slug]/page.tsx`, `package.json`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.11397849462365592 - nodes in this community are weakly interconnected._