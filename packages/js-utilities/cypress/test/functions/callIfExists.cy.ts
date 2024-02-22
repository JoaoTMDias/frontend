/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/
import { callIfExists } from "src/functions";

describe("callIfExist", () => {
    it("should not throw an exception when no callback is passed", () => {
        expect(callIfExists.bind(this, undefined)).not.throw();
    });

    it("should call the function passed", () => {
        const func = cy.stub();

        callIfExists(func);

        expect(func).to.have.been.called;
    });
});
