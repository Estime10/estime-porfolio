import type { ProjectCardViewModel } from "@/features/projects-screen/types/projectViewModel";
import type { ProjectsTranslator } from "@/features/projects-screen/types/projectsTranslator";
import type { ProjectCatalogEntry } from "@/lib/projects/project-catalog";

export function mapProjectCard(
  t: ProjectsTranslator,
  entry: ProjectCatalogEntry,
): ProjectCardViewModel {
  const slug = entry.slug;

  return {
    slug,
    name: t(`items.${slug}.name`),
    tagline: t(`items.${slug}.tagline`),
    type: t(`items.${slug}.type`),
    summary: t(`items.${slug}.summary`),
    liveUrl: entry.liveUrl,
    caseStudyHref: entry.hasCaseStudy ? `/projects/${slug}` : undefined,
    coverImage: entry.coverImage,
  };
}
