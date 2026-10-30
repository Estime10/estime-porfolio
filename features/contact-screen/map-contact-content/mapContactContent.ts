import type { ContactPageContentViewModel } from "@/features/contact-screen/types/contactPageViewModel";
import type { ContactTranslator } from "@/features/contact-screen/types/contactTranslator";
import type { ContactStripLabels } from "@/lib/contact-channels/types/contact-strip-labels/contactStripLabels";
import { asTranslationStringArray } from "@/lib/i18n/asTranslationStringArray";

export function mapContactContent(
  t: ContactTranslator,
  contactStrip: ContactStripLabels,
): ContactPageContentViewModel {
  return {
    title: t("title"),
    introParagraphs: asTranslationStringArray(
      t.raw("intro.paragraphs") as object,
      "intro.paragraphs",
    ),
    contactStrip,
  };
}
