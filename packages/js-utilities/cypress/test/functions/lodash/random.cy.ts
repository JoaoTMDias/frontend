import * as _ from "../../../../src/functions/lodash/random";

describe("random function", () => {
  it("should return a random integer between 0 and 5", () => {
    const result = _.random(0, 5);
    expect(Number.isInteger(result)).to.be.true;
    expect(result).to.be.greaterThan(-1);
    expect(result).to.lessThan(6);
  });

  it("should return a random integer between 0 and 5 when only one argument is provided", () => {
    const result = _.random(5);
    expect(Number.isInteger(result)).to.be.true;
    expect(result).to.be.greaterThan(-1);
    expect(result).to.lessThan(6);
  });

  it("should return a random floating-point number between 0 and 5", () => {
    const result = _.random(5, true);
    expect(result).to.be.greaterThan(-1);
    expect(result).to.lessThan(6);
  });

  it("should return a random floating-point number between 1.2 and 5.2", () => {
    const result = _.random(1.2, 5.2, true);
    expect(result).to.greaterThan(1.1);
    expect(result).to.lessThan(5.3);
  });

  it("should return 0 or 1 if no arguments are provided", () => {
    const result = _.random();
    expect([0, 1].includes(result)).to.be.true;
  });

  it("should return -1 or 0 if only one negative argument is provided", () => {
    const result = _.random(-1);
    expect([-1, 0].includes(result)).to.be.true;
  });

  it("should handle lower bound greater than upper bound", () => {
    const result = _.random(5, 1);
    expect(result).to.greaterThan(0);
    expect(result).to.lessThan(6);
  });

  it("should return a floating-point number when floating is true", () => {
    const result = _.random(0, 5, true);
    expect(Number.isInteger(result)).to.be.false;
  });

  it("should return an integer when floating is false", () => {
    const result = _.random(0, 5, false);
    expect(Number.isInteger(result)).to.be.true;
  });
});
