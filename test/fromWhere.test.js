import assert from "assert";
import fromWhere from "../js/fromWhere.js";


describe('Test my fromWhere function' , function(){
    it("it should return 'Bellville' for CY registration " , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    });
    it("it should return 'Cape Town' for CA registration " , function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });
    it("it should return 'some other place' if none " , function(){
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
    it("it should return 'Paarl' for CJ registration " , function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });
 
});
