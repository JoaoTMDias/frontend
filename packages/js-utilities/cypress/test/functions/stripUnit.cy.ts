/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */
import { stripUnit, VALUE_REGEX } from "../../../src/functions/stripUnit";

describe("stripUnit", () => {
  const THEME = {
    "font-size-16": "1rem",
    "font-size-20": "1.25rem",
    "font-size-24": "1.5rem",
    "font-size-32": "2rem",
    "font-size-40": "2.5rem",
  };

  it("should remove the characters from a string-based value", () => {
    const fontSizes = [16, 20, 24, 32, 40];

    const expected = [1, 1.25, 1.5, 2, 2.5];

    fontSizes.forEach((value, index) => {
      const result = stripUnit(THEME[`font-size-${value}`]);

      expect(result[0]).to.equal(expected[index]);
    });
  });

  it("should return an undefined value if the expected value does not exist", () => {
    const fontSizes = [1, 5, 1000, 300, 41];

    fontSizes.forEach((value) => {
      expect(stripUnit(THEME[`font-size-${value}`])[0]).to.be.undefined;
    });
  });

  it("should return an undefined unit if the expected value does not match", () => {
    expect(stripUnit("?!#$!()/&%")[1]).to.be.undefined;
  });

  it("Regex should match a different set of values", () => {
    const values = [
      {
        initial: "1.25rem",
        result: ["1.25rem", "1.25", "rem"],
      },
      {
        initial: "500ms",
        result: ["500ms", "500", "ms"],
      },
      {
        initial: "500ms",
        result: ["500ms", "500", "ms"],
      },
      {
        initial: "0.3333333333333333px",
        result: ["0.3333333333333333px", "0.3333333333333333", "px"],
      },
    ];

    values.forEach((value) => {
      const matches = value.initial.match(VALUE_REGEX);

      expect(matches![0]).to.equal(value.result[0]);
      expect(matches![1]).to.equal(value.result[1]);
      expect(matches![2]).to.equal(value.result[2]);
    });
  });
});
