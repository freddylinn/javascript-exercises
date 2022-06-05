const repeatString = function(inputString,num) {

    let outputString = "";

    if(num >= 0){
        for(let i = 0; i < num; i++){
            outputString += inputString;
        }
    }
    else{
        return "ERROR";
    }

    return outputString;

};

// Do not edit below this line
module.exports = repeatString;
