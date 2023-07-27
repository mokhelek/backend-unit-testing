import assert from "assert";
import isWeekday from "../js/isWeekday.js";

describe('Test my isWeekday function' , function(){
    it("it should return false because day is not weekday" , function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it("it should return false because day is not weekday" , function(){
        assert.equal(isWeekday('Sunday'), false);
    });
    it("it should return true because day in weekday" , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it("it should return true because day in weekday" , function(){
        assert.equal(isWeekday('Tuesday'), true);
    });
    it("it should return true because day in weekday" , function(){
        assert.equal(isWeekday('Wednesday'), true);
    });    
    
    it("it should return true because day in weekday" , function(){
        assert.equal(isWeekday('Thursday'), true);
    });

    it("it should return true because day in weekday" , function(){
        assert.equal(isWeekday('Friday'), true);
    });
    

});

