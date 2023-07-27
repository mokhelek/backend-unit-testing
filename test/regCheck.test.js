import assert from "assert";
import regCheck from "../js/regCheck.js";

describe('Test my regCheck function' , function(){
    it("it should return true because registration number ends with GP" , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it("it should return false because registration number ends with EC" , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it("it should return true because registration number ends with L " , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });

    it("it should return false because registration number ends with M" , function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it("it should return true because registration number ends with EC" , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it("it should return false because registration number does not end with EC" , function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });


    it("it should return true because registration number ends with MP " , function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });


    it("it should return false because registration number does not end with MP" , function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });


});