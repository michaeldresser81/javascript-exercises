const reverseString = function(text) {
    const textArray = [];
    inputLength = text.length;
    for (let i = 0; i < inputLength; i++) {
        textArray.unshift(text.substr(i,1));
    }
    const reversed = textArray.join('');
    console.log(reversed);
    return reversed;
};

reverseString('Hello, world!');


// Do not edit below this line
module.exports = reverseString;
