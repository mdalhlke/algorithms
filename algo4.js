/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let symVal = {
        'I':1, 
        'V':5, 
        'X':10, 
        'L':50, 
        'C':100, 
        'D':500, 
        'M':1000 };
    let result = 0;
    let sSplit = s.split('');
    
    for (let i = 0; i < sSplit.length; i++) {
    	let valueAfter = sSplit[i+1];
        let value = sSplit[i];
        
        if (symVal[valueAfter] > symVal[value]) {
          result -= symVal[value];
        } else {
           result += symVal[value];
        }      
    }
    return result; 
};

