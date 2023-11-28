const sumAll = function(a,b) {
    let total = 0;
    if (b < a) {
        const x = b;
        b = a;
        a = x;
    }
    else if ((b < 0 || a < 0)
        || !(Number.isInteger(a) && Number.isInteger(b))) {
        total = "ERROR";
        return total;
    }
    for (let i = a; i <= b; i++ ) {
        total += i;
    }
    console.log(a + ',' + b);
    console.log(total);
    return total;
};

sumAll(1,4);
// Do not edit below this line
module.exports = sumAll;
