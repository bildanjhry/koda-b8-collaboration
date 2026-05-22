function validateNumber(value) {
  if (typeof value !== "number" || isNaN(value)) {
    throw new Error("Input harus berupa angka valid");
  }
}

// Implement functions here 👇
function fahrenheitToCelsius(value) {
  validateNumber(value);
  return (value - 32) * 5 / 9;
}
function fahrenheitToKelvin(value) {
  validateNumber(value);
  return (value - 32) * 5 / 9 + 273.15;
}
function fahrenheitToRankine(value) {
  validateNumber(value);
  return value + 459.67;
}
// TODO: Uncomment after implemented
module.exports = {
  fahrenheitToCelsius,
  fahrenheitToKelvin,
  fahrenheitToRankine,
};
