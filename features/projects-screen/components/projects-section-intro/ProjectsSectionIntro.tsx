export type ProjectsSectionIntroProps = Readonly<{
  headingId: string;
  label: string;
  noteLead: string;
  note: string;
}>;

export function ProjectsSectionIntro({
  headingId,
  label,
  noteLead,
  note,
}: ProjectsSectionIntroProps) {
  return (
    <>
      <h2 id={headingId} className="text-h2 text-foreground">
        {label}
      </h2>
      <p className="text-body text-muted mt-3 max-w-prose">
        <strong className="font-semibold text-foreground">{noteLead}</strong> {note}
      </p>
    </>
  );
}
