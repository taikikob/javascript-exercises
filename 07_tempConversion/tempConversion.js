const convertToCelsius = function(F) {
  let celcius = (F-32)*5/9;
  return Number(celcius.toFixed(1));
};

const convertToFahrenheit = function(C) {
  let fahrenheit = C*9/5+32;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
