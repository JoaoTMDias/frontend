/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/
import { toggleDataAttribute } from "src/functions";

describe("toggleDataAttribute", () => {
    it("should return an empty string when the prop is truthy", () => {
        expect(toggleDataAttribute(true)).to.equal("");
        expect(toggleDataAttribute("true")).to.equal("");
    });

    it("should return undefined when the prop is falsy", () => {
        expect(toggleDataAttribute(false)).to.equal(undefined);
        expect(toggleDataAttribute("false")).to.equal(undefined);
        expect(toggleDataAttribute(undefined)).to.equal(undefined);
        expect(toggleDataAttribute(null)).to.equal(undefined);
    });
});
