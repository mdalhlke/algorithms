/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let wordCount = 0;
    let reverse = s.trim().split('').reverse();
    
    if (s == '') {
        return 0;
    }
    
    for (let char of reverse) {
        if (char != ' '){
            wordCount++;
        }  else {
            break;
        }
    }
    return wordCount;
};
