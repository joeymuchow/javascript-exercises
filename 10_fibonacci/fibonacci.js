const fibonacci = function(num) {
    const parsedNum = Number(num);
    if (parsedNum < 0) {
        return "OOPS";
    }
    if (parsedNum === 0) {
        return 0;
    }
    const arr = [];
    for (let i = 0; i < parsedNum; i++) {
        if (i < 2) {
            arr.push(1);
        } else {
            const sum = arr[i-2] + arr[i-1];
            arr.push(sum);
        }
    }
    return arr[parsedNum-1];
};

// Do not edit below this line
module.exports = fibonacci;
