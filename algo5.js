/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let hasSign = true;
    
    if (dividend < 0 && divisor < 0 || dividend > 0 && divisor > 0 ) {
        hasSign = false;
    }
    
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);   
    
    let result = 0;
    let remainder = dividend;
    
    while (remainder >= divisor) {
        remainder = remainder - divisor;
        result++;
    }

    if (hasSign === true) { 
        result = result * -1;
    } 
    
    if (result <= (Math.pow(2,31) - 1) && result >= (Math.pow(-2,31))) {
        return result;
    } else {
        return Math.pow(2,31) - 1;
    }
};
