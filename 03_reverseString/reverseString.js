
// Completed
const reverseString = function(str) {
    let arr = str.split('')
                 .reverse();
    
    let newStr = arr.join('');

    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
