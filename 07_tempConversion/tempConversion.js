const ftoc = function(inputTemp) {
  celsiusTemp = (inputTemp - 32) * (5/9);
  return Math.round(celsiusTemp * 10) / 10;
};

const ctof = function(inputTemp) {
  fTemp = inputTemp * (9/5) + 32;
  return Math.round(fTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
