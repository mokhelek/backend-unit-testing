import assert from "assert";
import countAllPaarl from "../js/countAllPaarl.js";

describe('Test my countAllPaarl function' , function(){
    it("it should return 3 because there are 3 CJ registrations" , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it("it should return 2 because there are 2 CJ registrations" , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });

    
});