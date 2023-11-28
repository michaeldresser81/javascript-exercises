const removeFromArray = function(inputArray, ...filterArray) {
    console.log(inputArray);
    console.log(filterArray);
    let output = [];
    inputArray.forEach((item) => {
        if(!filterArray.includes(item)) {
            output.push(item);
        };
       });
    console.log(output);
};

removeFromArray([1,2,3,4], 2, 3);
// Do not edit below this line
module.exports = removeFromArray;
