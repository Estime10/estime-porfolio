/** Extrait le slug d’une étude `/projects/{slug}`, sinon `null`. */
export function getProjectCaseStudySlugFromPathname(pathname: string): string | null {
  const match = /^\/projects\/([^/]+)$/.exec(pathname);
  return match?.[1] ?? null;
}
