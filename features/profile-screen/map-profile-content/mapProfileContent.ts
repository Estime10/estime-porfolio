import type { getTranslations } from "next-intl/server";
import { asTranslationStringArray } from "@/lib/i18n/asTranslationStringArray";
import {
  PROFILE_SECTION_IDS,
  type ProfileSectionId,
} from "@/features/profile-screen/map-profile-content/profileSectionIds";
import type {
  ProfileContentViewModel,
  ProfileSectionViewModel,
} from "@/features/profile-screen/types/profileSectionViewModel";

type ProfileTranslator = Awaited<ReturnType<typeof getTranslations<"ProfileScreen">>>;

function mapProfileSection(
  t: ProfileTranslator,
  sectionId: ProfileSectionId,
  index: number,
): ProfileSectionViewModel {
  const introKey = `sections.${sectionId}.intro` as const;
  const intro = asTranslationStringArray(t.raw(introKey) as object, introKey);

  const bulletsKey = `sections.${sectionId}.bullets` as const;
  const bullets = t.has(bulletsKey)
    ? asTranslationStringArray(t.raw(bulletsKey) as object, bulletsKey)
    : undefined;

  const outroKey = `sections.${sectionId}.outro` as const;
  const outro = t.has(outroKey) ? t(outroKey) : undefined;

  return {
    id: sectionId,
    index,
    title: t(`sections.${sectionId}.title`),
    intro,
    bullets,
    outro,
  };
}

export function mapProfileContent(t: ProfileTranslator): ProfileContentViewModel {
  const introParagraphs = asTranslationStringArray(
    t.raw("intro.paragraphs") as object,
    "intro.paragraphs",
  );

  const closingParagraphs = asTranslationStringArray(
    t.raw("closing.paragraphs") as object,
    "closing.paragraphs",
  );

  const sections = PROFILE_SECTION_IDS.map((sectionId, sectionIndex) =>
    mapProfileSection(t, sectionId, sectionIndex + 1),
  );

  return {
    title: t("title"),
    navLabel: t("nav.label"),
    introParagraphs,
    sections,
    closingLabel: t("closing.label"),
    closingParagraphs,
  };
}
