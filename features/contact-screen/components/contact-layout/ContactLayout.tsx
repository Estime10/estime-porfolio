import { ContactChannelsPanel } from "@/components/contact-channels/contact-channels-panel/ContactChannelsPanel";
import { ContactForm } from "@/features/contact-screen/components/contact-form/ContactForm";
import { ContactPageHeader } from "@/features/contact-screen/components/contact-page-header/ContactPageHeader";
import type { ContactPageContentViewModel } from "@/features/contact-screen/types/contactFormViewModel";

export type ContactLayoutProps = Readonly<{
  content: ContactPageContentViewModel;
}>;

export function ContactLayout({ content }: ContactLayoutProps) {
  return (
    <article className="ui-container ui-section ui-section-contact pb-20 md:pb-28">
      <ContactPageHeader introParagraphs={content.introParagraphs} title={content.title} />

      <div className="mt-8 grid gap-10 md:mt-8 md:grid-cols-2 md:items-stretch md:gap-8 lg:mt-6 lg:gap-12 xl:gap-16">
        <div className="order-2 min-w-0 md:order-1 md:flex md:h-full md:flex-col">
          <div className="md:flex md:min-h-0 md:flex-1 md:flex-col">
            <ContactForm form={content.form} />
          </div>
        </div>

        <aside className="order-1 min-w-0 md:order-2 md:flex md:h-full md:flex-col">
          <ContactChannelsPanel
            className="md:min-h-0 md:flex-1"
            labels={content.form.contactStrip}
          />
        </aside>
      </div>
    </article>
  );
}
