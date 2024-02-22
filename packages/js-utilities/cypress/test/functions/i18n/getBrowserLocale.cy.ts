import { getBrowserLocale } from "../../../../src/functions/i18n";

describe("getBrowserLocale", () => {
  it("returns a string", () => {
    const locale = getBrowserLocale();
    expect(locale).to.be.a("string");
  });

  it("returns a valid locale format", () => {
    const locale = getBrowserLocale();
    expect(locale).to.match(/^[a-z]{2}-[A-Z]{2}$/); // Example: 'en-GB'
  });

  it("returns a non-empty locale", () => {
    const locale = getBrowserLocale();
    expect(locale).to.not.be.empty;
  });
});
