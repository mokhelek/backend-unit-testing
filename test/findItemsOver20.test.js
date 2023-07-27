import assert from "assert";
import findItemsOver20 from "../js/findItemsOver20.js";

describe('Test my FindItemsOver20 function' , function(){
    it(`should return a list of 1 item` , function(){
        let itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 2},
            {name : 'apples', qty : 3}
        ];
        assert.deepEqual([{name : 'pears', qty : 37}], findItemsOver20(itemList));
    });
    it(`should return no list`  , function(){
        let itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 7},
        ];
        assert.deepEqual([], findItemsOver20(itemList2));
    });
    it(`should return a list of items 2`  , function(){
        let itemList3 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3}
        ];
        assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27}], findItemsOver20(itemList3));
    });
});