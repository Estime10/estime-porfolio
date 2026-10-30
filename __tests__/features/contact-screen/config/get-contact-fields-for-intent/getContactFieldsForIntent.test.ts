import { describe, expect, it } from "vitest";
import { getContactFieldsForIntent } from "@/features/contact-screen/config/get-contact-fields-for-intent/getContactFieldsForIntent";
import { CONTACT_FIELD_IDS } from "@/features/contact-screen/types/contact-field-id/contactFieldId";

describe("getContactFieldsForIntent", () => {
  it("returns name, email and message for general contact", () => {
    expect(getContactFieldsForIntent("general-contact").map((field) => field.id)).toEqual([
      "name",
      "email",
      "message",
    ]);
  });

  it("returns all wizard fields for marketing-site", () => {
    const fields = getContactFieldsForIntent("marketing-site");
    expect(fields.map((field) => field.id)).toEqual([...CONTACT_FIELD_IDS]);
  });
});
