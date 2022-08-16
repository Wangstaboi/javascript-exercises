// Completed
const leapYears = function(year) {
    
if (year % 4 == 0 && year % 100 !== 0) {
    return true;
}
if (year % 100 == 0) {
    if (year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}
else {
    return false;
}

    
};

//console.log(leapYears(1900));
console.log(leapYears(1600));
// Do not edit below this line
module.exports = leapYears;
