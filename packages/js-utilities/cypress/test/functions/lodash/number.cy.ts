import * as _ from "../../../../src/functions/lodash/number";

describe("toInt", () => {
  it("should convert string number to integer", () => {
    expect(_.toInt("42")).to.equal(42);
  });

  it("should handle default value", () => {
    expect(_.toInt(undefined, 10)).to.equal(10);
    expect(_.toInt(null, 10)).to.equal(10);
    expect(_.toInt("not a number", 10)).to.equal(10);
  });

  it("should handle null and undefined values", () => {
    expect(_.toInt(null)).to.equal(0);
    expect(_.toInt(undefined)).to.equal(0);
  });

  it("should return the number if it is already an integer", () => {
    expect(_.toInt(42)).to.equal(42);
  });

  it("should return the number if it is already an integer-like string", () => {
    expect(_.toInt("42")).to.equal(42);
  });

  it("should return the default value if the input is not a number", () => {
    expect(_.toInt("not a number", 10)).to.equal(10);
  });
});

describe("round", () => {
  it("should round to the nearest integer if precision is not specified", () => {
    expect(_.round(4.006)).to.equal(4);
    expect(_.round(4.2)).to.equal(4);
    expect(_.round(4.8)).to.equal(5);
  });

  it("should round to the specified precision", () => {
    expect(_.round(4.006, 2)).to.equal(4.01);
    expect(_.round(4.2, 1)).to.equal(4.2);
    expect(_.round(4060, -2)).to.equal(4100);
  });

  it("should handle negative precision", () => {
    expect(_.round(123456, -3)).to.equal(123000);
  });
});
