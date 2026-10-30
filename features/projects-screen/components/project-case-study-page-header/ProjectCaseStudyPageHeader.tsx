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
  liveUrl?: string;
  viewLiveLabel?: string;
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
  liveUrl,
  viewLiveLabel,
  tagline,
  type,
}: ProjectCaseStudyPageHeaderProps) {
  return (
    <header className="max-w-3xl">
      <p className={CARD_EYEBROW_CLASS}>{type}</p>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <h1 className="text-h1 text-foreground min-w-0 flex-1">{name}</h1>
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={viewLiveLabel ?? status}
            className={`${CHROME_GRADIENT_STATUS_BADGE} shrink-0 cursor-pointer outline-none ring-offset-background focus-visible:ring-accent focus-visible:ring-2 focus-visible:ring-offset-2`}
          >
            {status}
          </a>
        ) : null}
      </div>
      <p className="text-body-lg text-muted mt-4">{tagline}</p>
      <p className="text-body text-foreground/90 mt-6">{role}</p>
      <ProjectTagList ariaLabel={focusTagsLabel} tags={focusTags} variant="focus" />
      <ProjectTagList ariaLabel={stackLabel} className="mt-5" tags={stack} variant="stack" />
    </header>
  );
}
