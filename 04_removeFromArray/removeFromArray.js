const removeFromArray = function(inputArr, ...args) {

    for(let i = 0; i < args.length; i++){

        const index = inputArr.indexOf(args[i]);

        if(index >= 0){
            inputArr.splice(index,1);
        }

    }

    return inputArr;

};

// Do not edit below this line
module.exports = removeFromArray;
