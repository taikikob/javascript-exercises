const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } 
    if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }
    let start = num1;
    let end = num2;
    if (num1 > num2) {
        start = num2;
        end = num1;
    }
    let ans = 0;
    for (let first = start; first <= end; ++first){
        ans = ans + first;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
