const convertToCelsius = function(Fahrenheit) {
  // Convert Fahrenheit to Celsius
  // Formula: (F - 32) * 5/9 = C
  return Math.round(((Fahrenheit - 32) * (5 / 9)) * 10) / 10;
};

// Examples
const convertToCelsiusExample = function() {
  console.log(convertToCelsius(32)); // Should print 0
  console.log(convertToCelsius(100)); // Should print 37.8
  console.log(convertToCelsius(-100)); // Should print -73.3
  console.log(convertToCelsius(212)); // Should print 100
};

const convertToFahrenheit = function(Celsius) {
  // Convert Celsius to Fahrenheit
  // Formula: (C * 9/5) + 32 = F
  return Math.round(((Celsius * (9 / 5)) + 32) * 10) / 10;
};

// Examples
const convertToFahrenheitExample = function() {
  console.log(convertToFahrenheit(0)); // Should print 32
  console.log(convertToFahrenheit(100)); // Should print 212
  console.log(convertToFahrenheit(-10)); // Should print 14
  console.log(convertToFahrenheit(37.8)); // Should print 100
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
