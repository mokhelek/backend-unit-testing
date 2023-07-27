import assert from "assert";
import isFromBellville from "../js/isFromBellville.js";

describe('Test my isFromBellville function' , function(){
    it("it should return true because registration starts with CY "  , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it("it should return false because registration does not starts with CY ", function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });
   
});