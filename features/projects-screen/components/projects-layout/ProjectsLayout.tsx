import { ProjectCard } from "@/features/projects-screen/components/project-card/ProjectCard";
import { ProjectsPageHeader } from "@/features/projects-screen/components/projects-page-header/ProjectsPageHeader";
import { ProjectsSectionIntro } from "@/features/projects-screen/components/projects-section-intro/ProjectsSectionIntro";
import { ScrollToProjectHash } from "@/features/projects-screen/components/scroll-to-project-hash/ScrollToProjectHash";
import type { ProjectsContentViewModel } from "@/features/projects-screen/types/projectViewModel";

export type ProjectsLayoutProps = Readonly<{
  content: ProjectsContentViewModel;
}>;

export function ProjectsLayout({ content }: ProjectsLayoutProps) {
  const [leadLive, ...restLive] = content.live;

  return (
    <article className="ui-container ui-section pb-20 md:pb-28">
      <ScrollToProjectHash />
      <ProjectsPageHeader
        introParagraphs={content.introParagraphs}
        selectionNote={content.selectionNote}
        title={content.title}
      />

      <section aria-labelledby="live-projects-heading" className="mt-10 md:mt-14">
        <ProjectsSectionIntro
          headingId="live-projects-heading"
          label={content.liveLabel}
          noteLead={content.liveNoteLead}
          note={content.liveNote}
        />

        {leadLive ? (
          <div className="mt-8 md:mt-10">
            <ProjectCard
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
                <ProjectCard
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
        <ProjectsSectionIntro
          headingId="in-dev-projects-heading"
          label={content.inDevelopmentLabel}
          noteLead={content.inDevelopmentNoteLead}
          note={content.inDevelopmentNote}
        />
        <ul className="mt-10 grid list-none grid-cols-1 items-stretch gap-14 p-0 md:mt-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
          {content.inDevelopment.map((project) => (
            <li key={project.slug} className="flex h-full min-h-0 flex-col">
              <ProjectCard
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
