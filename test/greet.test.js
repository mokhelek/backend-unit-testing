import assert from "assert";
import greet from "../js/greet.js";

describe('Test my greet function' , function(){
    it("it should return 'Hello Katleho' to greet katleho " , function(){
        assert.equal("Hello Katleho", greet("Katleho") );
    });
    it("it should return 'Hello Malebo' to greet Malebo " , function(){
        assert.equal("Hello Malebo", greet("Malebo") );
    });
    it("it should return 'Hello Mthunzi' to greet Mthunzi" , function(){
        assert.equal("Hello Mthunzi", greet("Mthunzi") );
    });
});