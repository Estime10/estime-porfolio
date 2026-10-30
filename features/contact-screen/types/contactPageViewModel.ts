import type { ContactStripLabels } from "@/lib/contact-channels/types/contact-strip-labels/contactStripLabels";

export type ContactPageContentViewModel = Readonly<{
  title: string;
  introParagraphs: readonly string[];
  contactStrip: ContactStripLabels;
}>;
