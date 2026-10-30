import { LiveProjectCard } from "@/features/projects-screen/components/live-project-card/LiveProjectCard";
import { ProjectsPageHeader } from "@/features/projects-screen/components/projects-page-header/ProjectsPageHeader";
import type { ProjectsContentViewModel } from "@/features/projects-screen/types/projectViewModel";

export type ProjectsLayoutProps = Readonly<{
  content: ProjectsContentViewModel;
}>;

export function ProjectsLayout({ content }: ProjectsLayoutProps) {
  const [leadLive, ...restLive] = content.live;

  return (
    <article className="ui-container ui-section pb-20 md:pb-28">
      <ProjectsPageHeader
        introParagraphs={content.introParagraphs}
        selectionNote={content.selectionNote}
        title={content.title}
      />

      <section aria-labelledby="live-projects-heading" className="mt-10 md:mt-14">
        <h2 id="live-projects-heading" className="text-h2 text-foreground">
          {content.featuredLabel}
        </h2>
        <p className="text-body text-muted mt-3 max-w-prose">
          <strong className="font-semibold text-foreground">{content.featuredNoteLead}</strong>{" "}
          {content.featuredNote}
        </p>

        {leadLive ? (
          <div className="mt-8 md:mt-10">
            <LiveProjectCard
              featured
              project={leadLive}
              readCaseStudyLabel={content.readCaseStudyLabel}
              viewLiveLabel={content.viewLiveLabel}
            />
          </div>
        ) : null}

        {restLive.length > 0 ? (
          <ul className="mt-16 grid list-none grid-cols-1 items-stretch gap-14 p-0 md:mt-20 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
            {restLive.map((project) => (
              <li key={project.slug} className="flex h-full min-h-0 flex-col">
                <LiveProjectCard
                  project={project}
                  readCaseStudyLabel={content.readCaseStudyLabel}
                  viewLiveLabel={content.viewLiveLabel}
                />
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      <section
        aria-labelledby="in-dev-projects-heading"
        className="border-stroke-default mt-20 border-t pt-16 md:mt-28 md:pt-20"
      >
        <h2 id="in-dev-projects-heading" className="text-h2 text-foreground">
          {content.secondaryLabel}
        </h2>
        <p className="text-body text-muted mt-3 max-w-prose">
          <strong className="font-semibold text-foreground">{content.inDevelopmentNoteLead}</strong>{" "}
          {content.inDevelopmentNote}
        </p>
        <ul className="mt-10 grid list-none grid-cols-1 items-stretch gap-14 p-0 md:mt-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
          {content.inDevelopment.map((project) => (
            <li key={project.slug} className="flex h-full min-h-0 flex-col">
              <LiveProjectCard
                project={project}
                readCaseStudyLabel={content.readCaseStudyLabel}
                viewLiveLabel={content.viewLiveLabel}
              />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
