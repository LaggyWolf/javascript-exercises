const add = function(num1,num2) {
  return num1+num2;
};

const subtract = function(num1,num2) {
  return num1-num2;
};

const sum = function(numbers) {
  let sum = 0;
  for (let number of numbers){
    sum += number;
  };
  return sum;
};

const multiply = function(numbers) {
  let num = 1;
  for (let number of numbers){
    num *= number;
  };
  return num;
};

const power = function(num1,num2) {
  return num1**num2;
};

const factorial = function(number) {
  let num = 1;
  for (let i = 1; i <= number; i++){
    num *= i
  };
  return num;
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
