/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/
import { uniq } from "src/functions";

const SOURCE = [
    "case-manager",
    "case-manager",
    "genome",
    "genome",
    "pulse",
    "pulse",
    "riskops studio",
    "riskops studio",
    "sar-manager",
    "sar-manager",
];

const SOURCE_UNIQUE = [
    "case-manager",
    "genome",
    "pulse",
    "riskops studio",
    "sar-manager"
];

describe("uniq", () => {
    it("should return an array without duplicates", () => {
        const expectedLength = SOURCE_UNIQUE.length;

        expect(uniq(SOURCE).length).to.deep.eq(expectedLength);
        expect(uniq(SOURCE)).to.deep.eq(SOURCE_UNIQUE);
    });
});
