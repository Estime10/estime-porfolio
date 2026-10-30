import { ContactChannelItem } from "@/components/contact-channels/contact-channel-item/ContactChannelItem";
import { mapContactChannelsForStrip } from "@/lib/contact-channels/map-contact-channels-for-strip/mapContactChannelsForStrip";
import type { ContactStripLabels } from "@/lib/contact-channels/types/contact-strip-labels/contactStripLabels";

export type ContactChannelsPanelProps = Readonly<{
  className?: string;
  id?: string;
  labels: ContactStripLabels;
}>;

/** Grille de canaux : 2 colonnes, dernier item en pleine largeur. */
export function ContactChannelsPanel({
  className = "",
  id = "contact-channels",
  labels,
}: ContactChannelsPanelProps) {
  const channels = mapContactChannelsForStrip(labels);
  const lastIndex = channels.length - 1;

  return (
    <nav aria-label={labels.ariaLabel} className={`w-full ${className}`.trim()} id={id}>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-4">
        {channels.map((channel, index) => (
          <ContactChannelItem
            key={channel.id}
            channel={channel}
            className={index === lastIndex ? "sm:col-span-2" : undefined}
          />
        ))}
      </ul>
    </nav>
  );
}
