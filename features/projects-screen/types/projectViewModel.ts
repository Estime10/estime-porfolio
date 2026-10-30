import type { ProjectCoverImage, ProjectSlug } from "@/lib/projects/project-catalog";

/** Données affichées sur une card listing (live ou in-dev). */
export type ProjectCardViewModel = Readonly<{
  slug: ProjectSlug;
  name: string;
  tagline: string;
  type: string;
  summary: string;
  liveUrl?: string;
  caseStudyHref?: string;
  coverImage?: ProjectCoverImage;
}>;

export type ProjectCaseStudySectionViewModel = Readonly<{
  id: string;
  index: number;
  title: string;
  tags?: readonly string[];
  paragraphs: readonly string[];
  bullets?: readonly string[];
}>;

export type ProjectCaseStudyNavItemViewModel = Readonly<{
  id: string;
  title: string;
}>;

export type ProjectCaseStudyViewModel = Readonly<{
  slug: ProjectSlug;
  name: string;
  tagline: string;
  type: string;
  status: string;
  role: string;
  focusTags: readonly string[];
  stack: readonly string[];
  sections: readonly ProjectCaseStudySectionViewModel[];
  navItems: readonly ProjectCaseStudyNavItemViewModel[];
  navLabel: string;
  tagLabels: Readonly<{
    focus: string;
    stack: string;
    section: string;
  }>;
}>;

export type ProjectsContentViewModel = Readonly<{
  title: string;
  introParagraphs: readonly string[];
  liveLabel: string;
  liveNoteLead: string;
  liveNote: string;
  inDevelopmentLabel: string;
  inDevelopmentNoteLead: string;
  inDevelopmentNote: string;
  selectionNote: string;
  readCaseStudyLabel: string;
  viewLiveLabel: string;
  live: readonly ProjectCardViewModel[];
  inDevelopment: readonly ProjectCardViewModel[];
}>;
