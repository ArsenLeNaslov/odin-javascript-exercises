// Considers only Letters and Numbers, variable contains all valid characters
const palindromes = function (string) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
};

// Converts to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
const cleanedString = string
  .toLowerCase()
  .split('')
  .filter(char => alphanumerical.includes(char))
  .join('');

// Checks if the cleaned string is equal to its reverse
const reversedString = cleanedString.split('').reverse().join('');