/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let array = s.split('');
    let map = {};
    array.forEach(ch => {
       if (map[ch]) {
           map[ch] += ch;
       } else {
           map[ch] = ch;
       }
    })
    
    let sorted = Object.values(map).sort((a,b) => {
        return a.length >= b.length ? -1 : 1 
    });

    return sorted.join('');
};

