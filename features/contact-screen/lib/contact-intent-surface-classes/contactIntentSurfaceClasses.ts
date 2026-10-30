import { CHROME_OUTLINE_BORDER } from "@/lib/ui/brandChrome";

/** Carte d’intention sélectionnée — même fond translucide que les CTA contact. */
export const CONTACT_INTENT_SELECTED_SURFACE = [
  CHROME_OUTLINE_BORDER,
  "bg-background/20",
  "ring-2 ring-[color:rgb(72_82_98_/0.14)] dark:ring-[color:rgb(186_196_210_/0.22)]",
].join(" ");

/** Carte d’intention au repos. */
export const CONTACT_INTENT_DEFAULT_SURFACE = [
  CHROME_OUTLINE_BORDER,
  "bg-background/20 hover:border-[color:rgb(72_82_98_/0.45)] dark:hover:border-[color:rgb(186_196_210_/0.55)]",
].join(" ");
