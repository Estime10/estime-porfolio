import { asTranslationStringArray } from "@/lib/i18n/asTranslationStringArray";
import { mapProjectCard } from "@/features/projects-screen/map-projects-content/map-project-card/mapProjectCard";
import type { ProjectsContentViewModel } from "@/features/projects-screen/types/projectViewModel";
import type { ProjectsTranslator } from "@/features/projects-screen/types/projectsTranslator";
import { getInDevelopmentProjects, getLiveProjects } from "@/lib/projects/project-catalog";

export function mapProjectsContent(t: ProjectsTranslator): ProjectsContentViewModel {
  const introParagraphs = asTranslationStringArray(
    t.raw("intro.paragraphs") as object,
    "intro.paragraphs",
  );

  const live = getLiveProjects().map((entry) => mapProjectCard(t, entry));
  const inDevelopment = getInDevelopmentProjects().map((entry) => mapProjectCard(t, entry));

  return {
    title: t("title"),
    introParagraphs,
    featuredLabel: t("sections.featured"),
    featuredNoteLead: t("sections.featuredNoteLead"),
    featuredNote: t("sections.featuredNote"),
    secondaryLabel: t("sections.secondary"),
    inDevelopmentNoteLead: t("sections.inDevelopmentNoteLead"),
    inDevelopmentNote: t("sections.inDevelopmentNote"),
    selectionNote: t("selectionNote"),
    readCaseStudyLabel: t("card.readCaseStudy"),
    viewLiveLabel: t("card.viewLive"),
    tagLabels: {
      focus: t("tags.focus"),
      stack: t("tags.stack"),
    },
    featured: live,
    secondary: inDevelopment,
    live,
    inDevelopment,
  };
}
