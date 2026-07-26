/** Slugs stables pour i18n, routes et assets futurs. */
export const FEATURED_PROJECT_SLUGS = ["fleetscan", "shadow", "spill-crumb", "jikowood"] as const;

export const SECONDARY_PROJECT_SLUGS = [
  "ttc-v0",
  "enna",
  "maxweljones",
  "nana",
  "purpose-sport",
] as const;

/** Projets avec page `/projects/[slug]` (featured + other work enrichi). */
export const CASE_STUDY_PROJECT_SLUGS = [
  ...FEATURED_PROJECT_SLUGS,
  ...SECONDARY_PROJECT_SLUGS,
] as const;

export const PROJECT_SLUGS = [...FEATURED_PROJECT_SLUGS, ...SECONDARY_PROJECT_SLUGS] as const;

export type FeaturedProjectSlug = (typeof FEATURED_PROJECT_SLUGS)[number];
export type SecondaryProjectSlug = (typeof SECONDARY_PROJECT_SLUGS)[number];
export type CaseStudyProjectSlug = (typeof CASE_STUDY_PROJECT_SLUGS)[number];
export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export type ProjectTier = "featured" | "secondary";

export type ProjectCatalogEntry = Readonly<{
  slug: ProjectSlug;
  tier: ProjectTier;
  year: number;
  hasCaseStudy: boolean;
  liveUrl?: string;
}>;

export const PROJECT_CATALOG: readonly ProjectCatalogEntry[] = [
  { slug: "fleetscan", tier: "featured", year: 2026, hasCaseStudy: true },
  { slug: "shadow", tier: "featured", year: 2026, hasCaseStudy: true },
  { slug: "spill-crumb", tier: "featured", year: 2026, hasCaseStudy: true },
  {
    slug: "jikowood",
    tier: "featured",
    year: 2026,
    hasCaseStudy: true,
    liveUrl: "https://jikowood-refonte.vercel.app",
  },
  {
    slug: "ttc-v0",
    tier: "secondary",
    year: 2026,
    hasCaseStudy: true,
    liveUrl: "https://take-the-crown-v001.vercel.app/",
  },
  {
    slug: "enna",
    tier: "secondary",
    year: 2026,
    hasCaseStudy: true,
    liveUrl: "https://www.ennabv.be",
  },
  {
    slug: "maxweljones",
    tier: "secondary",
    year: 2026,
    hasCaseStudy: true,
    liveUrl: "https://www.maxweljones.com",
  },
  {
    slug: "nana",
    tier: "secondary",
    year: 2026,
    hasCaseStudy: true,
    liveUrl: "https://horscadre-photography.vercel.app/",
  },
  {
    slug: "purpose-sport",
    tier: "secondary",
    year: 2025,
    hasCaseStudy: true,
    liveUrl: "https://purpose-sport.com",
  },
] as const;

export function isProjectSlug(value: string): value is ProjectSlug {
  return (PROJECT_SLUGS as readonly string[]).includes(value);
}

export function isCaseStudyProjectSlug(value: string): value is CaseStudyProjectSlug {
  return (CASE_STUDY_PROJECT_SLUGS as readonly string[]).includes(value);
}

export function getFeaturedProjects(): readonly ProjectCatalogEntry[] {
  return PROJECT_CATALOG.filter((item) => item.tier === "featured");
}

export function getSecondaryProjects(): readonly ProjectCatalogEntry[] {
  return PROJECT_CATALOG.filter((item) => item.tier === "secondary");
}
