import type { AppLocale } from "@/lib/i18n/config";

export function getLanguageSwitcherTriggerLabel(locale: AppLocale): string {
  return locale === "fr"
    ? "FR, choisir la langue (actuellement français)"
    : "EN, choose language (currently English)";
}
