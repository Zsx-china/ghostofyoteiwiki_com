import type { MetadataRoute } from "next";
import { CONTENT_TYPES, getAllContentPaths } from "@/lib/content";
import { routing } from "@/i18n/routing";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://moonfrost.org";

  // Static paths that always exist
  const staticPaths = ["/", ...CONTENT_TYPES.map((type) => `/${type}`), "/privacy-policy", "/terms-of-service", "/copyright", "/about"];

  // Dynamic paths: scan actual MDX content files
  const contentPaths = await getAllContentPaths("en");
  const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);

  const paths = [...staticPaths, ...dynamicPaths];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}${locale === "en" ? "" : `/${locale}`}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
       priority: path === "/" ? 1 : CONTENT_TYPES.some((type) => path === `/${type}`) ? 0.8 : 0.6,
    })),
  );
}
