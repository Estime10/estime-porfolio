import { ContactChannelItem } from "@/components/contact-channels/contact-icon-strip/ContactChannelItem";
import { mapContactChannelsForStrip } from "@/lib/contact-channels/map-contact-channels-for-strip/mapContactChannelsForStrip";
import type { ContactStripLabels } from "@/lib/contact-channels/types/contact-strip-labels/contactStripLabels";

export type ContactChannelsPanelProps = Readonly<{
  className?: string;
  id?: string;
  labels: ContactStripLabels;
}>;

/** Bandeau permanent : 2 canaux par ligne, le dernier en pleine largeur. */
export function ContactChannelsPanel({
  className = "",
  id = "contact-channels",
  labels,
}: ContactChannelsPanelProps) {
  const channels = mapContactChannelsForStrip(labels);
  const lastIndex = channels.length - 1;

  return (
    <nav
      aria-label={labels.ariaLabel}
      className={`flex w-full flex-col ${className}`.trim()}
      id={id}
    >
      <ul className="m-0 grid min-h-0 w-full flex-1 list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 md:grid-rows-3 md:gap-4 lg:gap-5">
        {channels.map((channel, index) => (
          <ContactChannelItem
            key={channel.id}
            channel={channel}
            className={
              index === lastIndex ? "sm:col-span-2 md:min-h-0 md:h-full" : "md:min-h-0 md:h-full"
            }
          />
        ))}
      </ul>
    </nav>
  );
}
