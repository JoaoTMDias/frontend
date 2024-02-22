/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */
import { shortenNumber } from "../../../src/functions";

describe("formatNumber", () => {
  it("should shorten the number and add the K suffix", () => {
    expect(shortenNumber(1200)).to.deep.equal([1, "K"]);
    expect(shortenNumber(12000)).to.deep.equal([12, "K"]);
    expect(shortenNumber(120000)).to.deep.equal([120, "K"]);
    expect(shortenNumber(1700)).to.deep.equal([2, "K"]);
  });

  it("should shorten the number and add the million suffix", () => {
    expect(shortenNumber(1200000)).to.deep.equal([1, "M"]);
    expect(shortenNumber(12000000)).to.deep.equal([12, "M"]);
    expect(shortenNumber(12000000)).to.deep.equal([12, "M"]);
    expect(shortenNumber(17000000)).to.deep.equal([17, "M"]);
  });

  it("should shorten the number and add the billion suffix", () => {
    expect(shortenNumber(1200000000)).to.deep.equal([1, "B"]);
    expect(shortenNumber(1700000000)).to.deep.equal([2, "B"]);
  });

  it("should not round number if 'isToRoundNumber' flag is false", () => {
    expect(shortenNumber(1200, false)).to.deep.equal([1.2, "K"]);
    expect(shortenNumber(1700000000, false)).to.deep.equal([1.7, "B"]);
    expect(shortenNumber(1700, false)).to.deep.equal([1.7, "K"]);
  });

  it("should return the given number inside an array if it's lower than 1000", () => {
    expect(shortenNumber(900)).to.deep.equal([900]);
  });

  it("should throw an error if we are not passing a valid number to be shorten", () => {
    expect(() => {
      // @ts-ignore testing error being thrown
      return shortenNumber("123");
    }).to.throw("shortenNumber: A valid number must be provided in order to shorten it");
  });
});
