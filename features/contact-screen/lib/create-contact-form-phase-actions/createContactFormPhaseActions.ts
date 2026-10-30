import type { ContactFormPhase } from "@/features/contact-screen/hooks/use-contact-form/types/contactFormPhase";
import type { ContactIntentId } from "@/features/contact-screen/types/contact-intent-id/contactIntentId";

export type ContactFormPhaseSetters = Readonly<{
  resetWizardFields: () => void;
  setIntentId: (intentId: ContactIntentId | null) => void;
  setPhase: (phase: ContactFormPhase) => void;
}>;

export type ContactFormPhaseActions = Readonly<{
  cancelWizard: () => void;
  startWizard: (intentId: ContactIntentId) => void;
}>;

export function createContactFormPhaseActions(
  setters: ContactFormPhaseSetters,
): ContactFormPhaseActions {
  return {
    startWizard: (intentId) => {
      setters.setIntentId(intentId);
      setters.resetWizardFields();
      setters.setPhase("wizard");
    },
    cancelWizard: () => {
      setters.resetWizardFields();
      setters.setIntentId(null);
      setters.setPhase("intent-selection");
    },
  };
}
