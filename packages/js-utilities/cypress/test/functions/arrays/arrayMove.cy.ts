/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/
import { arrayMove } from "src/functions";

describe("arrayMove", () => {
    const originalArray = [1, 2, 3, 4, 5, 6];

    it("should move items in an array", () => {
        const movedArray = arrayMove(originalArray, 1, 0);

        expect(movedArray).to.deep.eq([2, 1, 3, 4, 5, 6]);
    });

    it("should move items when 'from' index is negative", () => {
        const movedArray = arrayMove(originalArray, -1, 0);

        expect(movedArray).to.deep.eq([6, 1, 2, 3, 4, 5]);
    });

    it("should move items when 'to' index is negative", () => {
        const movedArray = arrayMove(originalArray, 0, -1);

        expect(movedArray).to.deep.eq([2, 3, 4, 5, 6, 1]);
    });
});
