const getTheTitles = function(array) {
    // Uses map to extract the title property from each book object
    return array.map(book => book.title);   

};

// Do not edit below this line
module.exports = getTheTitles;
