// Returns the nth Fibonacci number, where n is the input argument
const fibonacci = function(countArgu) {

    // Ensure the argument is a number for calculation
    let count;
    if (typeof countArg !== 'number') {
        count = parseInt(countArgu);
    } else {
        count = countArgu;
    }

// Handle negative input by returning error string
    if (count < 0) return "OOPS";

    // The 0th Fibonacci number is 0
    if (count == 0) return 0;


// Do not edit below this line
module.exports = fibonacci;
