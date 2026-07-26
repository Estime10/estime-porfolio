import { notFound } from "next/navigation";
import { ProjectCaseStudyScreen } from "@/features/projects-screen/ProjectCaseStudyScreen";
import { PROJECTS_ROUTE_PATH } from "@/lib/constants";
import { resolveAppLocale } from "@/lib/i18n/resolve-app-locale/resolveAppLocale";
import { createPageMetadata } from "@/lib/metadata/create-page-metadata/createPageMetadata";
import {
  CASE_STUDY_PROJECT_SLUGS,
  isCaseStudyProjectSlug,
  type CaseStudyProjectSlug,
} from "@/lib/projects/project-catalog";
import { getTranslations } from "next-intl/server";

type ProjectCaseStudyPageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

function parseCaseStudySlug(slug: string): CaseStudyProjectSlug | null {
  return isCaseStudyProjectSlug(slug) ? slug : null;
}

export function generateStaticParams(): { slug: CaseStudyProjectSlug }[] {
  return CASE_STUDY_PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const caseStudySlug = parseCaseStudySlug(slug);
  if (!caseStudySlug) {
    return {};
  }

  const t = await getTranslations("ProjectsScreen.caseStudies");
  const locale = await resolveAppLocale();

  return createPageMetadata({
    title: t(`${caseStudySlug}.meta.title`),
    description: t(`${caseStudySlug}.meta.description`),
    pathname: `${PROJECTS_ROUTE_PATH}/${caseStudySlug}`,
    locale,
  });
}

export default async function ProjectCaseStudyPage({ params }: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const caseStudySlug = parseCaseStudySlug(slug);
  if (!caseStudySlug) {
    notFound();
  }

  return <ProjectCaseStudyScreen slug={caseStudySlug} />;
}
