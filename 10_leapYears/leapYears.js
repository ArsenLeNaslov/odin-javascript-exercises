const leapYears = function(year) {
  const yearCanBeDividedBy4 = year % 4 === 0;
  const century = year % 100 === 0;
  const yearCanBeDividedBy400 = year % 400 === 0;

  if (
    yearCanBeDividedBy4 && (!century || yearCanBeDividedBy400)
  ) {
    return true;
  } else {
    return false;
  }
};

//Examples:
// leapYears(2000) should return true
// leapYears(1985) is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;
