// Adds 2 numbers and returns the result
const add = function(a, b) {
  return a + b;
};

// Subtracts the 2nd number from the 1st and returns the result
const subtract = function(a, b) {
  return a - b;
};

// Computes the sum of all numbers in an array
const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};
