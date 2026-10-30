"use client";

import type { ContactIntentId } from "@/features/contact-screen/types/contact-intent-id/contactIntentId";
import { useCallback, useRef, type RefObject } from "react";

export type UseContactFormIntentSelectionParams = Readonly<{
  onStartWizard: (intentId: ContactIntentId) => void;
}>;

export type UseContactFormIntentSelectionReturn = Readonly<{
  intentPanelRef: RefObject<HTMLDivElement | null>;
  selectIntent: (intentId: ContactIntentId) => void;
}>;

export function useContactFormIntentSelection({
  onStartWizard,
}: UseContactFormIntentSelectionParams): UseContactFormIntentSelectionReturn {
  const intentPanelRef = useRef<HTMLDivElement>(null);

  const selectIntent = useCallback(
    (intentId: ContactIntentId) => {
      onStartWizard(intentId);
    },
    [onStartWizard],
  );

  return { intentPanelRef, selectIntent };
}
