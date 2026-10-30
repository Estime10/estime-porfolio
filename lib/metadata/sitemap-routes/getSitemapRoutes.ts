import {
  CONTACT_ROUTE_PATH,
  HOME_ROUTE_PATH,
  PROFILE_ROUTE_PATH,
  PROJECTS_ROUTE_PATH,
} from "@/lib/constants";
import { CASE_STUDY_PROJECT_SLUGS } from "@/lib/projects/project-catalog";

/** Chemins publics indexables (hors assets et API). `/` redirige vers `/home`. */
export function getSitemapRoutes(): readonly string[] {
  const caseStudyPaths = CASE_STUDY_PROJECT_SLUGS.map((slug) => `${PROJECTS_ROUTE_PATH}/${slug}`);

  return [
    HOME_ROUTE_PATH,
    PROFILE_ROUTE_PATH,
    PROJECTS_ROUTE_PATH,
    CONTACT_ROUTE_PATH,
    ...caseStudyPaths,
  ];
}
