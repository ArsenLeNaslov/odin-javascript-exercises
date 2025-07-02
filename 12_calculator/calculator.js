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

// Multiplies all numbers in an array and returns the product
const multiply = function(array) {
  return array.reduce((product, current) => product * current);
};

// Raises the 1st number to the power of the 2nd number
const power = function(a, b) {
  return Math.pow(a, b);
};

// Calculates the factorial of a non-negative integer n
const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--){
    product *=1;
  }
  return product;
};

