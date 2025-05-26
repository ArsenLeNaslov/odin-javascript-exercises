const removeFromArray = function(arr, ...values) {
  return arr.filter(item => !values.includes(item));
};

// Example
console.log(removeFromArray([1, 2, 3, 4], 3, 4)); // Output: [1, 2]

// Do not edit below this line
module.exports = removeFromArray;
