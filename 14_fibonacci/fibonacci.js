// Returns the nth Fibonacci number, where N is the input argument
const fibonacci = function(countArgu) {

// Ensure the argument is a number for calculation
    let count;
    if (typeof countArgu !== 'number') {
        count = parseInt(countArgu);
    } else {
        count = countArgu;
    }

// Handle negative input by returning error string
    if (count < 0) return "OOPS";

// The 0th Fibonacci number is 0
    if (count == 0) return 0;

// Initialise the first 2 Fibonacci numbers
    let firstPrev = 1;
    let secondPrev = 0;

// Calculate Fibonacci numbers iteratively up to the Nth
    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

// Return the nth Fibonacci number
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
