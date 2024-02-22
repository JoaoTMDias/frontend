/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/
import { removeItem } from "src/functions";

const SOURCE = ["sar-manager", "pulse", "case-manager", "genome", "riskops studio"];

describe("removeItem", () => {
    it("should remove an item from the array", () => {
        expect(removeItem(SOURCE, "case-manager").includes("case-manager")).to.be.false;
    });

    it("should throw an error if the param is not an array", () => {
        // @ts-ignore testing error being thrown
        expect(() => removeItem(undefined, "case-manager")).throw(
            "js-utilities.removeItem: Please pass a valid array as a parameter",
        );

        // @ts-ignore testing error being thrown
        expect(() => removeItem(null, "case-manager")).throw(
            "js-utilities.removeItem: Please pass a valid array as a parameter",
        );

        // @ts-ignore testing error being thrown
        expect(() => removeItem(SOURCE[0], "case-manager")).throw(
            "js-utilities.removeItem: Please pass a valid array as a parameter",
        );
    });
});
