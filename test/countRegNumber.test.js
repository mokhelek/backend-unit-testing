import assert from "assert";
import countRegNumber from "../js/countRegNumber.js";


describe('Test my countRegNumber function' , function(){
    it("it should return 3 because there are 3 registrations " , function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it("it should return 1 because there is one registration " , function(){
        assert.equal(1, countRegNumber('CA 182736'));
    });
    
});