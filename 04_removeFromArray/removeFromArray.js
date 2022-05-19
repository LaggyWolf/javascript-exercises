const removeFromArray = function(list, ...element) {
    for (let i of element){
        if (list.indexOf(i) != -1){
            list.splice(list.indexOf(i),1);
        };
    };
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
