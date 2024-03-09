import { expect, test } from "@oclif/test";
import { DEFAULT_COVERAGE_REPORTS_FOLDER } from "../../src/constants";

describe("clear", () => {
  it("should run default clear command", () => {
    test
      .stdout()
      .command(["clear"])
      .it("should run default clear command", (ctx) => {
        expect(ctx.stdout).to.contain(
          `✓ Removed folder: ${DEFAULT_COVERAGE_REPORTS_FOLDER}`,
        );
      });
  });

  it("should run custom clear command", () => {
    test
      .stdout()
      .command(["clear", "--folder=custom-folder/reports"])
      .it("should run default clear command", (ctx) => {
        expect(ctx.stdout).to.contain(
          `✓ Removed folder: custom-folder/reports`,
        );
      });
  });
});
