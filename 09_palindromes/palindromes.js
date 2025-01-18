const palindromes = function (str) {
    const trimmedString = str.replace(/\s+/g, "")
    .split("")
        .filter((val) => {
            return (val.toLowerCase() !== val.toUpperCase()) || Number.isInteger(Number(val));
        })
        .join("");
    const reverse = trimmedString.split("").reverse().join("");
    return trimmedString.toLowerCase() === reverse.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
