import { ProjectTagList } from "@/features/projects-screen/components/project-tag-list/ProjectTagList";
import { CHROME_GRADIENT_STATUS_BADGE } from "@/lib/ui/brandChrome";
import { CARD_EYEBROW_CLASS } from "@/lib/ui/cardTypography";

export type ProjectCaseStudyPageHeaderProps = Readonly<{
  focusTags: readonly string[];
  focusTagsLabel: string;
  name: string;
  role: string;
  stack: readonly string[];
  stackLabel: string;
  status: string;
  tagline: string;
  type: string;
}>;

export function ProjectCaseStudyPageHeader({
  focusTags,
  focusTagsLabel,
  name,
  role,
  stack,
  stackLabel,
  status,
  tagline,
  type,
}: ProjectCaseStudyPageHeaderProps) {
  return (
    <header className="max-w-3xl">
      <p className={CARD_EYEBROW_CLASS}>{type}</p>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <h1 className="text-h1 text-foreground min-w-0 flex-1">{name}</h1>
        <span className={`${CHROME_GRADIENT_STATUS_BADGE} shrink-0`}>{status}</span>
      </div>
      <p className="text-body-lg text-muted mt-4">{tagline}</p>
      <p className="text-body text-foreground/90 mt-6">{role}</p>
      <ProjectTagList ariaLabel={focusTagsLabel} tags={focusTags} variant="focus" />
      <ProjectTagList ariaLabel={stackLabel} className="mt-5" tags={stack} variant="stack" />
    </header>
  );
}
