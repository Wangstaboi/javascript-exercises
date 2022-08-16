//Completed
//[°C] = ([°F] − 32) × 5⁄9
const ftoc = function(f) {
let celsius;

celsius = (f - 32) * (5 / 9);

if (celsius === parseInt(celsius)) {
  return celsius;
}
else {
  return Number(celsius.toFixed(1));
}

};

//[°F] = [°C] × 9⁄5 + 32 
const ctof = function(c) {
let fahrenheit;

fahrenheit = c * (9 / 5) + 32;

if (fahrenheit === parseInt(fahrenheit)) {
  return fahrenheit;
}
else {
  return Number(fahrenheit.toFixed(1));
}
return fahrenheit.toFixed(1);
};

console.log(ftoc(-10));
console.log(ctof(0));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
