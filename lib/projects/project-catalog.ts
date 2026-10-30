/**
 * Catalogue projets : source de vérité structurelle (tier, URLs, covers, études).
 * Les textes marketing vivent dans i18n ProjectsScreen.
 */
export const LIVE_PROJECT_SLUGS = [
  "kozy-antwerp",
  "nana",
  "jikowood",
  "maxweljones",
  "enna",
  "purpose-sport",
] as const;

export const IN_DEVELOPMENT_PROJECT_SLUGS = [
  "spill-crumb",
  "ttc-v0",
  "fleetscan",
  "shadow",
] as const;

/** Pages `/projects/[slug]` — aligné sur `hasCaseStudy` du catalogue. */
export const CASE_STUDY_PROJECT_SLUGS = [
  "kozy-antwerp",
  "nana",
  "jikowood",
  "maxweljones",
  "enna",
  "purpose-sport",
  "fleetscan",
  "shadow",
  "spill-crumb",
  "ttc-v0",
] as const;

export const PROJECT_SLUGS = [...LIVE_PROJECT_SLUGS, ...IN_DEVELOPMENT_PROJECT_SLUGS] as const;

export type LiveProjectSlug = (typeof LIVE_PROJECT_SLUGS)[number];
export type InDevelopmentProjectSlug = (typeof IN_DEVELOPMENT_PROJECT_SLUGS)[number];
export type CaseStudyProjectSlug = (typeof CASE_STUDY_PROJECT_SLUGS)[number];
export type ProjectSlug = (typeof PROJECT_SLUGS)[number];
export type ProjectTier = "live" | "in-development";

export type ProjectCoverImage = Readonly<{
  src: string;
  alt: string;
  width: number;
  height: number;
}>;

export type ProjectCatalogEntry = Readonly<{
  coverImage?: ProjectCoverImage;
  hasCaseStudy: boolean;
  /** Présent uniquement pour les projets live publiés. */
  liveUrl?: string;
  slug: ProjectSlug;
  tier: ProjectTier;
  year: number;
}>;

const LIVE_COVERS: Record<LiveProjectSlug, ProjectCoverImage> = {
  "kozy-antwerp": {
    src: "/image/projects/kozywp.png",
    alt: "Kozy Antwerp, site de gestion locative",
    width: 1600,
    height: 1000,
  },
  nana: {
    src: "/image/projects/horcadrewp.png",
    alt: "Hors Cadre, portfolio photographie",
    width: 1600,
    height: 1000,
  },
  jikowood: {
    src: "/image/projects/jikobasewp.png",
    alt: "Jikowood, vitrine menuiserie",
    width: 1600,
    height: 1000,
  },
  maxweljones: {
    src: "/image/projects/maxwelwp.png",
    alt: "Maxwel Jones, site holding",
    width: 1600,
    height: 1000,
  },
  enna: {
    src: "/image/projects/ennawp.png",
    alt: "Enna Consulting, site RH",
    width: 1600,
    height: 1000,
  },
  "purpose-sport": {
    src: "/image/projects/purposewp.png",
    alt: "Purpose Sport, agence sportive",
    width: 1600,
    height: 1000,
  },
};

export const PROJECT_CATALOG: readonly ProjectCatalogEntry[] = [
  {
    slug: "kozy-antwerp",
    tier: "live",
    year: 2026,
    hasCaseStudy: true,
    liveUrl: "https://kozyantwerp.be",
    coverImage: LIVE_COVERS["kozy-antwerp"],
  },
  {
    slug: "nana",
    tier: "live",
    year: 2026,
    hasCaseStudy: true,
    liveUrl: "https://horscadre-photography.vercel.app",
    coverImage: LIVE_COVERS.nana,
  },
  {
    slug: "jikowood",
    tier: "live",
    year: 2025,
    hasCaseStudy: true,
    liveUrl: "https://jikowood.be",
    coverImage: LIVE_COVERS.jikowood,
  },
  {
    slug: "maxweljones",
    tier: "live",
    year: 2026,
    hasCaseStudy: true,
    liveUrl: "https://www.maxweljones.com",
    coverImage: LIVE_COVERS.maxweljones,
  },
  {
    slug: "enna",
    tier: "live",
    year: 2026,
    hasCaseStudy: true,
    liveUrl: "https://www.ennabv.be",
    coverImage: LIVE_COVERS.enna,
  },
  {
    slug: "purpose-sport",
    tier: "live",
    year: 2025,
    hasCaseStudy: true,
    liveUrl: "https://www.purpose-sport.com",
    coverImage: LIVE_COVERS["purpose-sport"],
  },
  {
    slug: "spill-crumb",
    tier: "in-development",
    year: 2026,
    hasCaseStudy: true,
  },
  {
    slug: "ttc-v0",
    tier: "in-development",
    year: 2026,
    hasCaseStudy: true,
  },
  {
    slug: "fleetscan",
    tier: "in-development",
    year: 2026,
    hasCaseStudy: true,
  },
  {
    slug: "shadow",
    tier: "in-development",
    year: 2026,
    hasCaseStudy: true,
  },
] as const;

export function isProjectSlug(value: string): value is ProjectSlug {
  return (PROJECT_SLUGS as readonly string[]).includes(value);
}

export function isCaseStudyProjectSlug(value: string): value is CaseStudyProjectSlug {
  return (CASE_STUDY_PROJECT_SLUGS as readonly string[]).includes(value);
}

export function getLiveProjects(): readonly ProjectCatalogEntry[] {
  return PROJECT_CATALOG.filter((item) => item.tier === "live");
}

export function getInDevelopmentProjects(): readonly ProjectCatalogEntry[] {
  return PROJECT_CATALOG.filter((item) => item.tier === "in-development");
}
