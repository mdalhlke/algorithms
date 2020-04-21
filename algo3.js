/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMatch = { 
        '}': '{',
        ')': '(', 
        ']': '['
    };
    let openBracketArr = [];
    
    for (let c of s) {
      let openBracket = bracketMatch[c];
      if (openBracket) {
        let lastOpenBracket = openBracketArr.shift();
        if (lastOpenBracket !== openBracket) {
          return false;
        }
      } else {
        openBracketArr.unshift(c);
      }
    }
  
    return openBracketArr.length === 0;
};
