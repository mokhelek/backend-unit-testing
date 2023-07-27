import assert from "assert";
import yearsAgo from "../js/yearsAgo.js";

describe('Test my yearsAgo function' , function(){
    it(`it should return  ${(new Date().getFullYear() - 1976) } because it's number of years ago` , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

    it(`it should return  ${(new Date().getFullYear() - 2000) } because it's number of years ago` , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000))
    });

});