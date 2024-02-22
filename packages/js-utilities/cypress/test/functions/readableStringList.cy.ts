/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2023 joaodias.me
 */
import { readableStringList } from "src/functions";

const SOURCE = ["Homer", "Marge", "Lisa", "Bart", "Maggie"];

describe("readableStringList", () => {
  it("should return an inclusive formatted list in several languages", () => {
    const LIST = {
      en: "Homer, Marge, Lisa, Bart, and Maggie",
      pt: "Homer, Marge, Lisa, Bart e Maggie",
      fr: "Homer, Marge, Lisa, Bart et Maggie",
      de: "Homer, Marge, Lisa, Bart und Maggie",
    };

    Object.keys(LIST).forEach((language) =>
      expect(readableStringList(SOURCE, language, "and")).to.equal(LIST[language])
    );
  });

  it("should return an exclusive formatted list in several languages", () => {
    const LIST = {
      en: "Homer, Marge, Lisa, Bart, or Maggie",
      pt: "Homer, Marge, Lisa, Bart ou Maggie",
      fr: "Homer, Marge, Lisa, Bart ou Maggie",
      de: "Homer, Marge, Lisa, Bart oder Maggie",
    } as const;

    Object.keys(LIST).forEach((language) =>
      expect(readableStringList(SOURCE, language, "or")).to.equal(LIST[language])
    );
  });
});
