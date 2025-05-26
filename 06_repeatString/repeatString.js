const repeatString = function(words, num) {
    if (num < 0) return 'ERROR';
    let string = '';
    for (let i = 0; i < num; i++) {
        string += words;
    }
    return string;
};

// Example usage:
console.log(repeatString('ocio!', 6)); // Output: ocio!ocio!ocio!ocio!ocio!ocio!

// Do not edit below this line
module.exports = repeatString;
