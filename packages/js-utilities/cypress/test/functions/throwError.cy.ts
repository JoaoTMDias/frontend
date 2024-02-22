/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2023 joaodias.me
 */
import { throwError } from "../../../src/functions";

describe("throwError", () => {
  it("should thrown an Error", () => {
    expect(() => throwError("js-utilities", "throwError", "This throws errors.")).throw(
      "js-utilities.throwError: This throws errors."
    );
  });
});
