import { CHROME_OUTLINE_BORDER, CHROME_SURFACE_RADIUS_IMPORTANT } from "@/lib/ui/brandChrome";

export type ProjectTagVariant = "stack" | "focus";

export type ProjectTagListProps = Readonly<{
  ariaLabel: string;
  className?: string;
  tags: readonly string[];
  variant: ProjectTagVariant;
}>;

const STACK_TAG_CLASS = `text-label text-secondary bg-bg-muted ${CHROME_SURFACE_RADIUS_IMPORTANT} px-3 py-1 leading-snug`;

/** Tags plats — distincts des CTA glossy. */
const FOCUS_TAG_CLASS = `text-label text-secondary bg-surface ${CHROME_SURFACE_RADIUS_IMPORTANT} ${CHROME_OUTLINE_BORDER} px-3 py-1 leading-snug`;

export function ProjectTagList({
  ariaLabel,
  className = "mt-4",
  tags,
  variant,
}: ProjectTagListProps) {
  if (tags.length === 0) {
    return null;
  }

  const itemClassName = variant === "focus" ? FOCUS_TAG_CLASS : STACK_TAG_CLASS;

  return (
    <ul className={`${className} flex flex-wrap gap-2`} aria-label={ariaLabel}>
      {tags.map((tag) => (
        <li key={tag} className={itemClassName}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
