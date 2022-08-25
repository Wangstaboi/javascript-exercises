//Hehe I already did this for FCC
const palindromes = function (str) {
    const regex = /[^\w]*[_]*/g;

    //Replaces all non word chars and underscores with nothing; lowercases everything
    const newStr = str.replace(regex, '')
                      .toLowerCase();

    //Creates a char array out of the string                  
    const test = newStr.split('');

    //Initialize 2 arrays, one with the string normal and one typed backwards
    let forward = [];
    let backward = [];
    
    //Adds string to forward
    for (let i = 0; i < test.length; i++) {
        forward.push(test[i]);
        
    }
    
    //Adds reversed string to backward
    for (let j = test.length - 1; j >= 0; j--) {
        backward.push(test[j]);
    }

    //More elegant and concise return statement
    return forward.every((x, i) => x == backward[i]) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
