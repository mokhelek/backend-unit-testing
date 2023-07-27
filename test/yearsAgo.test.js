import assert from "assert";
<<<<<<< HEAD
import yearsAgo from "../js/yearsAgo.js";
=======
import yearsAgo from "../yearsAgo.js";
>>>>>>> 798906afc79035c1153b03b2aca77224228b575d

describe('Test my yearsAgo function' , function(){
    it(`it should return  ${(new Date().getFullYear() - 1976) } because it's number of years ago` , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

    it(`it should return  ${(new Date().getFullYear() - 2000) } because it's number of years ago` , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000))
    });

});