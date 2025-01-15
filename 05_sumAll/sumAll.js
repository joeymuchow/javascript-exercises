const sumAll = function(firstNum, secondNum) {
    if (firstNum < 0 || secondNum < 0) {
        return 'ERROR';
    }
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return 'ERROR';
    }

    let bigNum;
    let smallNum;
    let sum = 0;

    if (firstNum > secondNum) {
        bigNum = firstNum;
        smallNum = secondNum;
    } else {
        bigNum = secondNum;
        smallNum = firstNum;
    }

    for (let i = smallNum; i < bigNum + 1; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
