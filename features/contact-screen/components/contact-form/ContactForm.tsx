"use client";

import { CtaOutlineButton } from "@/components/button";
import { ContactFormIntentSelection } from "@/features/contact-screen/components/contact-form-intent-selection/ContactFormIntentSelection";
import { ContactFormWizard } from "@/features/contact-screen/components/contact-form-wizard/ContactFormWizard";
import { useContactForm } from "@/features/contact-screen/hooks/use-contact-form/useContactForm";
import { useContactFormIntentSelection } from "@/features/contact-screen/hooks/use-contact-form-intent-selection/useContactFormIntentSelection";
import { useContactFormPhaseAnimation } from "@/features/contact-screen/hooks/use-contact-form-phase-animation/useContactFormPhaseAnimation";
import { useVisualViewportKeyboardOffset } from "@/features/contact-screen/hooks/use-visual-viewport-keyboard-offset/useVisualViewportKeyboardOffset";
import type { ContactFormViewModel } from "@/features/contact-screen/types/contactFormViewModel";
import { CARD_SURFACE_CLASS, CARD_SURFACE_PADDING_CLASS } from "@/lib/ui/cardSurface";

const CONTACT_FORM_SHELL_CLASS = [
  "contact-form",
  CARD_SURFACE_CLASS,
  CARD_SURFACE_PADDING_CLASS,
  "md:flex md:h-full md:min-h-0 md:flex-col",
].join(" ");

export type ContactFormProps = Readonly<{
  form: ContactFormViewModel;
}>;

export function ContactForm({ form }: ContactFormProps) {
  useVisualViewportKeyboardOffset();

  const {
    activeFields,
    cancelWizard,
    errors,
    getErrorMessage,
    handleFieldBlur,
    handleFieldChange,
    isSubmitEnabled,
    phase,
    revealedStepIndex,
    selectedIntent,
    startWizard,
    status,
    submit,
    submitError,
    values,
  } = useContactForm(form);

  const { intentPanelRef, selectIntent } = useContactFormIntentSelection({
    onStartWizard: startWizard,
  });

  const phasePanelRef = useContactFormPhaseAnimation(phase);

  if (phase === "success") {
    return (
      <div
        className={`contact-form-success flex flex-col gap-6 ${CARD_SURFACE_CLASS} ${CARD_SURFACE_PADDING_CLASS}`}
        role="status"
      >
        <div>
          <h2 className="text-h2 text-foreground">{form.labels.successTitle}</h2>
          <p className="text-body text-muted mt-4 max-w-prose">{form.labels.successBody}</p>
        </div>
        <CtaOutlineButton onClick={cancelWizard} type="button">
          {form.labels.back}
        </CtaOutlineButton>
      </div>
    );
  }

  return (
    <div className={CONTACT_FORM_SHELL_CLASS}>
      <div ref={phasePanelRef} className="flex flex-col md:min-h-0 md:flex-1">
        {phase === "intent-selection" ? (
          <div ref={intentPanelRef}>
            <ContactFormIntentSelection
              hint={form.labels.intentHint}
              intents={form.intents}
              legend={form.labels.intentLegend}
              onSelectIntent={selectIntent}
            />
          </div>
        ) : null}

        {phase === "wizard" && selectedIntent ? (
          <form
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              submit();
            }}
          >
            <ContactFormWizard
              activeFields={activeFields}
              cancelLabel={form.labels.cancel}
              errors={errors}
              getErrorMessage={getErrorMessage}
              handleFieldBlur={handleFieldBlur}
              handleFieldChange={handleFieldChange}
              isSubmitEnabled={isSubmitEnabled}
              labels={form.labels}
              onCancel={cancelWizard}
              revealedStepIndex={revealedStepIndex}
              selectedIntent={selectedIntent}
              status={status}
              submitErrorMessage={submitError ? getErrorMessage(submitError) : ""}
              values={values}
            />
          </form>
        ) : null}
      </div>
    </div>
  );
}
