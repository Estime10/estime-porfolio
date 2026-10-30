import { CtaButtons } from "./components/buttons/CtaButtons";

export type HomeHeroCtasProps = Readonly<{
  contactHref: string;
  startProjectLabel: string;
  viewProjectsLabel: string;
  projectHref: string;
}>;

export function HomeHeroCtas({
  contactHref,
  startProjectLabel,
  viewProjectsLabel,
  projectHref,
}: HomeHeroCtasProps) {
  return (
    <CtaButtons
      contactHref={contactHref}
      startProjectLabel={startProjectLabel}
      viewProjectsLabel={viewProjectsLabel}
      projectHref={projectHref}
    />
  );
}
