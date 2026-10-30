"use client";

import { useId } from "react";
import { Button } from "@/components/button";
import { useLanguageSwitcher } from "@/components/toggles/language/hooks";
import { getLanguageSwitcherPanelLabel } from "@/components/toggles/language/lib/get-language-switcher-panel-label/getLanguageSwitcherPanelLabel";

export function LanguageSwitcher() {
  const panelId = useId();
  const {
    inactiveLocales,
    isExpanded,
    locale,
    panelMounted,
    panelRef,
    rootRef,
    selectLocale,
    toggle,
    triggerLabel,
  } = useLanguageSwitcher();

  return (
    <div ref={rootRef} className="relative flex items-center justify-end">
      <Button
        type="button"
        variant="nav"
        className="relative z-10 shrink-0 max-md:min-h-[var(--touch-min)] max-md:min-w-[var(--touch-min)]"
        aria-label={triggerLabel}
        aria-controls={isExpanded ? panelId : undefined}
        aria-expanded={isExpanded}
        aria-haspopup="dialog"
        onClick={toggle}
      >
        {locale.toUpperCase()}
      </Button>
      {panelMounted ? (
        <div
          id={panelId}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={getLanguageSwitcherPanelLabel(locale)}
          className="pointer-events-none absolute right-full top-1/2 mr-3 flex -translate-y-1/2 flex-row items-center gap-3"
        >
          {inactiveLocales.map((code) => (
            <Button
              key={code}
              type="button"
              variant="nav"
              data-locale-option
              className="pointer-events-auto"
              aria-label={code === "fr" ? "Français" : "English"}
              onClick={() => {
                selectLocale(code);
              }}
            >
              {code.toUpperCase()}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
