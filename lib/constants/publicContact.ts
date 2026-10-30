/**
 * Coordonnées publiques (hero, bandeau contact, liens externes).
 * Ordre : LinkedIn → GitHub → Instagram → téléphone → e-mail.
 */

export type PublicContactChannelId = "email" | "github" | "instagram" | "linkedin" | "phone";

export type PublicContactChannel = Readonly<{
  displayValue: string;
  external: boolean;
  href: string;
  id: PublicContactChannelId;
}>;

export const PUBLIC_CONTACT_CHANNELS: readonly PublicContactChannel[] = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/estime-vangu/",
    displayValue: "estime-vangu",
    external: true,
  },
  {
    id: "github",
    href: "https://github.com/Estime10",
    displayValue: "Estime10",
    external: true,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/10davinchatcode/",
    displayValue: "@10davinchatcode",
    external: true,
  },
  {
    id: "phone",
    href: "tel:+32484030668",
    displayValue: "+32 484 03 06 68",
    external: false,
  },
  {
    id: "email",
    href: "mailto:estimevangu.pro@gmail.com",
    displayValue: "estimevangu.pro@gmail.com",
    external: false,
  },
];

const EMAIL_CHANNEL = PUBLIC_CONTACT_CHANNELS.find((c) => c.id === "email");

/** Lien `mailto:` aligné sur l’entrée e-mail du bandeau contact. */
export function getPublicContactEmailHref(): string {
  return EMAIL_CHANNEL?.href ?? "mailto:estimevangu.pro@gmail.com";
}
