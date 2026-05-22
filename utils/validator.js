exports.validateNumber = (value) => {
  if (typeof value !== "number" || isNaN(value)) {
    throw new Error("Input harus berupa angka valid");
  }
};
