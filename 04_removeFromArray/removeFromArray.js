//Cheated - I'm retarded
const removeFromArray = function(arr, arg) {

    let remove = Array.prototype.slice.call(arguments, 1);
    let newArr = [];

    newArr = arr.filter(x => !remove.includes(x));
    console.log(newArr);
    
    return newArr;
    
};

removeFromArray([1, 2, 3, 4], 4);
//removeFromArray([1, 2, 3, 4], 3, 2);
//removeFromArray([1, 2, 3], "1", 3);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
// Do not edit below this line
module.exports = removeFromArray;
