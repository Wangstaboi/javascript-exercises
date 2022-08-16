// Completed
const sumAll = function(num1, num2) {
    let sum = 0;
    let smallNum;
    let bigNum;

    if (num1 !== parseInt(num1) || num2 !== parseInt(num2)) {
        return 'ERROR';
    }
    if ( num1 < 0 || num2 < 0) {
        return 'ERROR';
    }


    if (num1 > num2) {
        bigNum = num1;
        smallNum = num2;
    } else {
        bigNum = num2;
        smallNum = num1;
    }


    for (let i = smallNum; i <= bigNum; i++) {
        sum += i;
    }

    console.log(sum);
    return sum;
};

    sumAll('1', 4);
// Do not edit below this line
module.exports = sumAll;
