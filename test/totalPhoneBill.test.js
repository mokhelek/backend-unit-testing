import assert from "assert";
import totalPhoneBill from "../js/totalPhoneBill.js";

describe('Test my totalPhoneBill function' , function(){
    it("it should return R7.45 for the total bill " , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it("it should return R3.40 for the total bill " , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it("it should return R1.30 for the total bill " , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});


