const palindromes = function (word) {

    letters = 'abcdefghijklmnopqrstuvwxyz'

    let new_word = '';
    for (let letter of word){
        if (letters.includes(letter.toLowerCase())){
            new_word += letter;
        };
    };

    let reverse_word = '';
    for (let i = new_word.length - 1; i >= 0; i--){
        reverse_word += new_word[i]; 
    };

    if (reverse_word.toLowerCase() === new_word.toLowerCase()){
        return true;
    };
    return false;
};

// Do not edit below this line
module.exports = palindromes;
