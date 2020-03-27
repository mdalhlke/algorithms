/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var wordCount = 0;
    var reverse = s.trim().split('').reverse();
    
    if (s == '') {
        return 0;
    }
    
    for (var char of reverse) {
        if (char != ' '){
            wordCount++;
        }  else {
            break;
        }
    }
    return wordCount;
};
