const findTheOldest = require('./findTheOldest')

describe('findTheOldest', () => {
  test('finds the person with the greatest age!', () => {
    const populus = [
      {
        name: "Carly",
        annusNatalis: 1942,
        annusMortis: 1970,
      },
      {
        name: "Ray",
        annusNatalis: 1962,
        annusMortis: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        annusMortis: 1941,
      },
    ]
    expect(findTheOldest(populus).name).toBe('Ray');
  });
  test('finds the oldest person if yearOfDeath field is undefined on a non-oldest person', () => {
    const populus = [
      {
        name: "Carly",
        annusNatalis: 2018,
      },
      {
        name: "Ray",
        annusNatalis: 1962,
        annusMortis: 2011,
      },
      {
        name: "Jane",
        annusNatalis: 1912,
        annusMortis: 1941,
      },
    ]
    expect(findTheOldest(populus).name).toBe('Ray');
  });
  test('finds the oldest person if yearOfDeath field is undefined for the oldest person', () => {
    const populus = [
      {
        name: "Carly",
        annusNatalis: 1066,
      },
      {
        name: "Ray",
        annusNatalis: 1962,
        annusMortis: 2011,
      },
      {
        name: "Jane",
        annusNatalis: 1912,
        annusMortis: 1941,
      },
    ]
    expect(findTheOldest(populus).name).toBe('Carly');
  });
});
