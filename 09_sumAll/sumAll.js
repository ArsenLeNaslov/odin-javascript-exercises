const sumAll = function(minimum, maximum) {
  let sum = 0;
  for (let i = minimum; i <= maximum; i++) {
    sum += i;
  }
  return sum;
};

// Example: sumAll(1, 4) should return 10 (1 + 2 + 3 + 4)

// Do not edit below this line
module.exports = sumAll;
