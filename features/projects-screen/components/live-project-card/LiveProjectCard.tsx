import Image from "next/image";
import { CtaGradientLink, CtaLink } from "@/components/button";
import type { ProjectCardViewModel } from "@/features/projects-screen/types/projectViewModel";

export type LiveProjectCardProps = Readonly<{
  project: ProjectCardViewModel;
  readCaseStudyLabel: string;
  viewLiveLabel: string;
  /** Première card live : plus large, rythme magazine. */
  featured?: boolean;
}>;

export function LiveProjectCard({
  project,
  readCaseStudyLabel,
  viewLiveLabel,
  featured = false,
}: LiveProjectCardProps) {
  const cover = project.coverImage;

  return (
    <article className="flex h-full flex-col">
      {cover ? (
        <div
          className={
            featured
              ? "relative aspect-[16/10] w-full overflow-hidden bg-layer-surface md:aspect-[21/9]"
              : "relative aspect-[16/10] w-full overflow-hidden bg-layer-surface"
          }
        >
          <Image
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            priority={featured}
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="size-full object-cover object-top"
          />
        </div>
      ) : null}

      <div
        className={
          featured
            ? "mt-6 flex max-w-3xl flex-1 flex-col md:mt-8"
            : "mt-5 flex max-w-prose flex-1 flex-col md:mt-6"
        }
      >
        <p className="text-label text-muted">
          {project.type} · {project.year}
        </p>
        <h2
          className={
            featured
              ? "text-h2 text-foreground mt-3 text-balance"
              : "text-h3 text-foreground mt-2 text-balance"
          }
        >
          {project.name}
        </h2>
        <p className="text-body text-secondary mt-2 text-pretty md:mt-3">{project.tagline}</p>
        <p className="text-body text-muted mt-4 text-pretty md:mt-5">{project.summary}</p>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6 md:pt-8">
          {project.tier === "live" && project.liveUrl ? (
            <CtaGradientLink external href={project.liveUrl}>
              {viewLiveLabel}
            </CtaGradientLink>
          ) : null}
          {project.caseStudyHref ? (
            <CtaLink href={project.caseStudyHref}>{readCaseStudyLabel}</CtaLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
