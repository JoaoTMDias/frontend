/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */
import { formatNumber } from "../../../src/functions";

describe("formatNumber", () => {
  it("should format the number and put the K suffix", () => {
    expect(formatNumber(1200, 1)).to.equal("1.2K");
    expect(formatNumber(12000, 1)).to.equal("12K");
    expect(formatNumber(120000, 1)).to.equal("120K");
    expect(formatNumber(1700, 1)).to.equal("1.7K");
  });

  it("should format the number and put the million suffix", () => {
    expect(formatNumber(1200000, 1)).to.equal("1.2M");
    expect(formatNumber(12000000, 1)).to.equal("12M");
    expect(formatNumber(12000000, 1)).to.equal("12M");
    expect(formatNumber(17000000, 1)).to.equal("17M");
  });

  it("should format the number and put the billion suffix", () => {
    expect(formatNumber(1200000000, 1)).to.equal("1.2B");
    expect(formatNumber(1700000000, 1)).to.equal("1.7B");
  });

  it("should be possible to define the max number of numbers after the decimal point", () => {
    expect(formatNumber(1235442, 1)).to.equal("1.2M");
    expect(formatNumber(1235442, 3)).to.equal("1.235M");
    expect(formatNumber(1700, 0)).to.equal("2K");
    expect(formatNumber(1710, 1)).to.equal("1.7K");
    expect(formatNumber(1710, 2)).to.equal("1.71K");
    expect(formatNumber(3820000, 1)).to.equal("3.8M");
  });

  it("should not have decimal numbers if the number before the suffix is higher than 100", () => {
    expect(formatNumber(174000, 1)).to.equal("174K");
    expect(formatNumber(174000, 2)).to.equal("174K");
    expect(formatNumber(388000, 1)).to.equal("388K");
    expect(formatNumber(388200000, 1)).to.equal("388M");
  });

  it("should not have decimal numbers if the number is lower than 1000", () => {
    expect(formatNumber(990.567, 2)).to.equal(991);
    expect(formatNumber(990, 1)).to.equal(990);
  });

  it("should throw an error if we are not passing a valid number to be formatted", () => {
    // @ts-ignore testing error being thrown
    expect(() => formatNumber("123")).to.throw(
      "formatNumber: A valid number must be provided in order to format it"
    );
  });
});
