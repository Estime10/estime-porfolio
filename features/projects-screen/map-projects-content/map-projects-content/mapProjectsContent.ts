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

  return {
    title: t("title"),
    introParagraphs,
    liveLabel: t("sections.featured"),
    liveNoteLead: t("sections.featuredNoteLead"),
    liveNote: t("sections.featuredNote"),
    inDevelopmentLabel: t("sections.secondary"),
    inDevelopmentNoteLead: t("sections.inDevelopmentNoteLead"),
    inDevelopmentNote: t("sections.inDevelopmentNote"),
    selectionNote: t("selectionNote"),
    readCaseStudyLabel: t("card.readCaseStudy"),
    viewLiveLabel: t("card.viewLive"),
    live: getLiveProjects().map((entry) => mapProjectCard(t, entry)),
    inDevelopment: getInDevelopmentProjects().map((entry) => mapProjectCard(t, entry)),
  };
}
