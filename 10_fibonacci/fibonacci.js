
//fibonacci = n + (n - 1)
const fibonacci = function(num) {
    let arr = [1, 1];

    if (num > 0) {
        for (let i = 1; i < num - 1; i++) {
            let temp = i - 1;
            arr.push(arr[i] + arr[temp]);
        }
        return arr[num - 1];
    } else {
        return 'OOPS';
    }
};

//console.log(fibonacci());
// Do not edit below this line
module.exports = fibonacci;
