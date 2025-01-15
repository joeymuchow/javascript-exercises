const removeFromArray = function(arr, ...removeArgs) {
    const changedArr = arr.filter((item) => {
        let keepItem = true;
        for (arg of removeArgs) {
            if (item === arg) {
                keepItem = false;
            }
        }
        return keepItem;
    });
    return changedArr;
};

// Do not edit below this line
module.exports = removeFromArray;
