export type ProfileSectionBulletsProps = Readonly<{
  bullets: readonly string[];
}>;

export function ProfileSectionBullets({ bullets }: ProfileSectionBulletsProps) {
  return (
    <ul className="border-stroke-default mt-6 flex flex-col gap-3 border-l pl-5 md:mt-8">
      {bullets.map((item) => (
        <li key={item} className="text-body text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}
