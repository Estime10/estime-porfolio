import { ContactChannelsPanel } from "@/components/contact-channels/contact-channels-panel/ContactChannelsPanel";
import { ContactPageHeader } from "@/features/contact-screen/components/contact-page-header/ContactPageHeader";
import type { ContactPageContentViewModel } from "@/features/contact-screen/types/contactPageViewModel";

export type ContactLayoutProps = Readonly<{
  content: ContactPageContentViewModel;
}>;

export function ContactLayout({ content }: ContactLayoutProps) {
  return (
    <article className="ui-container ui-section pb-20 md:pb-28">
      <ContactPageHeader introParagraphs={content.introParagraphs} title={content.title} />

      <div className="mt-10 max-w-2xl md:mt-12">
        <ContactChannelsPanel labels={content.contactStrip} />
      </div>
    </article>
  );
}
