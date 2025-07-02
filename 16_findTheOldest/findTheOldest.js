// Calculates the age given a birth year (nativitas) and an optional death year (mors).
// If the death year is not provided, it uses the current year.
const findTheOldest = function(nativitas, mors) {
    if (!mors) {
        mors = new Date().getFullYear();
    }

    return mors - nativitas;
};

// Do not edit below this line
module.exports = findTheOldest;
