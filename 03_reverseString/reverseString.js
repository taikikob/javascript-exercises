const reverseString = function(string) {
    let final = "";
    for (let index = string.length-1; index >= 0; --index) {
        final = final + string[index];
    }
    return final;
};

// Do not edit below this line
module.exports = reverseString;
