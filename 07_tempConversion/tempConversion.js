const convertToCelsius = function(fTemp) {
  let celsiusTemp = (fTemp - 32)*(5/9);
  return Number(celsiusTemp.toFixed(1));
};

const convertToFahrenheit = function(cTemp) {
  let fahrenheitTemp = cTemp * (9/5) + 32;
  return Number(fahrenheitTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
