const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second
};

const sum = function(array) {
	return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.reduce((product, num) => product * num, 1);
};

const power = function(first, second) {
	return Math.pow(first, second);
};

const factorial = function(num) {
  let total = 1;
	for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
