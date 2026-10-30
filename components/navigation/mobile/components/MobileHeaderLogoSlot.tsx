"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ProjectCaseStudyBackLink } from "@/features/projects-screen/components/project-case-study-back-link/ProjectCaseStudyBackLink";
import { getProjectCaseStudySlugFromPathname } from "@/lib/navigation/get-project-case-study-slug-from-pathname/getProjectCaseStudySlugFromPathname";
import { isProjectCaseStudyRoute } from "@/lib/navigation/is-project-case-study-route/isProjectCaseStudyRoute";

export type MobileHeaderLogoSlotProps = Readonly<{
  backLabel: string;
  logo: ReactNode;
}>;

export function MobileHeaderLogoSlot({ backLabel, logo }: MobileHeaderLogoSlotProps) {
  const pathname = usePathname();

  if (isProjectCaseStudyRoute(pathname)) {
    return (
      <ProjectCaseStudyBackLink
        label={backLabel}
        projectSlug={getProjectCaseStudySlugFromPathname(pathname) ?? undefined}
      />
    );
  }

  return logo;
}
