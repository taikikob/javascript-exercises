const removeFromArray = function(arr, ...val) {
    for (let index = 0; index < arr.length; ++index) {
        for (let valIndex = 0; valIndex < val.length; ++valIndex) {
            if (arr[index] === val[valIndex]) {
                arr.splice(index, 1);
                --index;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
