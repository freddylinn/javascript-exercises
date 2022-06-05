const reverseString = function(inputString) {

    const characterArray = inputString.split("");
    let outputString = "";

    for(let i = characterArray.length - 1; i >= 0; i--){
        outputString += characterArray[i];
    }

    return outputString;

};

// Do not edit below this line
module.exports = reverseString;
