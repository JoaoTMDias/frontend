import { getValue } from "../../../src";

describe("getValue", () => {
  it("should return the value corresponding to the provided path", () => {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    };
    const result = getValue(obj, "a.b.c");
    expect(result).to.equal(123);
  });

  it("should return the default value if the path does not exist and required is false", () => {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    };
    const defaultValue = "default";
    const result = getValue(obj, "a.b.d", { defaultValue, required: false });
    expect(result).to.equal(defaultValue);
  });

  it("should emit a warning and return the default value if the path does not exist and required is true", () => {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    };
    const defaultValue = "default";
    const spyWarn = cy.spy(console, "warn");
    const result = getValue(obj, "a.b.d", { defaultValue, required: true });
    expect(result).to.equal(defaultValue);
    expect(spyWarn.calledOnce).to.be.true;
    expect(
      spyWarn.calledWithExactly(
        `The path a.b.d does not exist on the object. Using ${defaultValue} instead.`
      )
    ).to.be.true;
    spyWarn.restore();
  });

  it("should emit an error if the path does not exist and required is true and no default value is provided", () => {
    const obj = {
      a: {
        b: {
          c: 123,
        },
      },
    };
    const spyError = cy.spy(console, "error");
    getValue(obj, "a.b.d", { required: true });
    expect(spyError.calledOnce).to.be.true;
    expect(spyError.calledWithExactly(`The path a.b.d does not exist on the object.`)).to.be.true;
    spyError.restore();
  });
});
