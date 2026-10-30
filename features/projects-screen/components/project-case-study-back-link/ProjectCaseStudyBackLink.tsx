import { NavLink } from "@/components/button";
import { PROJECTS_ROUTE_PATH } from "@/lib/constants";

export type ProjectCaseStudyBackLinkProps = Readonly<{
  /** Slug du projet pour revenir à sa card sur `/projects#{slug}`. */
  projectSlug?: string;
  label: string;
}>;

export function ProjectCaseStudyBackLink({ projectSlug, label }: ProjectCaseStudyBackLinkProps) {
  const href = projectSlug ? `${PROJECTS_ROUTE_PATH}#${projectSlug}` : PROJECTS_ROUTE_PATH;

  return (
    <NavLink
      href={href}
      className="relative z-10 max-md:inline-flex max-md:min-h-[var(--touch-min)] max-md:items-center"
    >
      {label}
    </NavLink>
  );
}
