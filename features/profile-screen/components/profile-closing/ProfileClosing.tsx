export type ProfileClosingProps = Readonly<{
  label: string;
  paragraphs: readonly string[];
}>;

export function ProfileClosing({ label, paragraphs }: ProfileClosingProps) {
  return (
    <aside
      aria-labelledby="profile-closing-heading"
      className="border-stroke-default mt-14 border-t pt-14 md:mt-20 md:pt-20"
    >
      <p id="profile-closing-heading" className="text-label text-tertiary mb-3 md:mb-4">
        {label}
      </p>
      <div className="flex max-w-prose flex-col gap-5 md:gap-6">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-body-lg text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </aside>
  );
}
