const getTheTitles = function(books) {
    let ls = [];
    for (let book of books){
        ls.push(book.title);
    }
    return ls;
};

// Do not edit below this line
module.exports = getTheTitles;
