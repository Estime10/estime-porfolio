import { composeButtonClassName } from "@/components/button/compose-button-class-name/composeButtonClassName";
import { CHROME_TOGGLE_OUTLINE } from "@/lib/ui/brandChrome";

/** Lien icône header (retour case study) — outline compact. */
export function getChromeHeaderIconLinkClassName(): string {
  return composeButtonClassName({
    variant: "outline",
    size: "sm",
    className: `${CHROME_TOGGLE_OUTLINE} relative z-10 shrink-0`,
  });
}
