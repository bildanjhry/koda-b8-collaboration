function validateNumber(value) {
  if (typeof value !== "number" || isNaN(value)) {
    throw new Error("Input harus berupa angka valid");
  }
}

function kelvinToCelsius(value) {
  validateNumber(value);
  return value - 273.15;
}
function kelvinToRankine(value) {
  validateNumber(value);
  return (value * 9) / 5;
}
function kelvinToFahrenheit(value) {
  validateNumber(value);
  return ((value - 273.15) * 9) / 5 + 32;
}

module.exports = {
  kelvinToCelsius,
  kelvinToRankine,
  kelvinToFahrenheit,
};
