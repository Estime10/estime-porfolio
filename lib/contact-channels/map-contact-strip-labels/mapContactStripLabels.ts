import type { ContactStripLabels } from "@/lib/contact-channels/types/contact-strip-labels/contactStripLabels";

type ContactStripTranslator = {
  (key: `contactStrip.${string}`): string;
};

export function mapContactStripLabels(t: ContactStripTranslator): ContactStripLabels {
  return {
    ariaLabel: t("contactStrip.ariaLabel"),
    linkedinLabel: t("contactStrip.linkedinLabel"),
    githubLabel: t("contactStrip.githubLabel"),
    emailLabel: t("contactStrip.emailLabel"),
    phoneLabel: t("contactStrip.phoneLabel"),
    instagramLabel: t("contactStrip.instagramLabel"),
  };
}
