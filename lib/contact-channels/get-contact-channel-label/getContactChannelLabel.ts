import type { ContactStripLabels } from "@/lib/contact-channels/types/contact-strip-labels/contactStripLabels";
import type { PublicContactChannelId } from "@/lib/constants";

export function getContactChannelLabel(
  labels: ContactStripLabels,
  channelId: PublicContactChannelId,
): string {
  switch (channelId) {
    case "linkedin":
      return labels.linkedinLabel;
    case "github":
      return labels.githubLabel;
    case "email":
      return labels.emailLabel;
    case "phone":
      return labels.phoneLabel;
    case "instagram":
      return labels.instagramLabel;
    default: {
      const _exhaustive: never = channelId;
      return _exhaustive;
    }
  }
}
