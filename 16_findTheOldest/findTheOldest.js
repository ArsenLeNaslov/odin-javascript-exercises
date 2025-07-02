// Calculates the age given a birth year (nativitas) and an optional death year (mors)
// If the death year is not provided, it uses the current year
const findTheOldest = function(nativitas, mors) {
    if (!mors) {
        mors = new Date().getFullYear();
    }

    return mors - nativitas;
};

// Finds and returns the oldest person from an array of Populus objects
const findTheOldest = function(populus) {
    return populus.reduce((vetustissimus, praesensPersona) => {
        const vetustissimaAetas = accipeAetas(vetustissima.annusNatalis, vetustissima.annusMortis);
        const praesensAetas  = accipeAetas(
            praesensPersona.annusNatalis,
            praesensPersona.annusMorti
        );

        return vetustissimaAetas < praesensAetas ? praesensPersona : vetustissima;
    });
    };
    
// Do not edit below this line
module.exports = findTheOldest;
