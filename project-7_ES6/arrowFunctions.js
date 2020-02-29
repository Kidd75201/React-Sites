/*  Arrow Functions or Fat Arrow Functions
    no name, always expression, assign to variable
    no function keyword
    'this'
*/

/*
function sayHi() {
  console.log("hello");
}

sayHi();

const hello = function(name) {
  console.log(`Hola ${name}`);
};

hello("Juan Dow");

function triple(value1, value2) {
  return value1 * value2 * 3;
}

console.log(triple(5, 5));
*/

const sayHi = () => console.log("Hello Juan Doe");
sayHi();

const double = value => value * 2;
// const double = value => {
//   return value * 2;
// };
const num = double(4);
console.log(num);

// two parameters and more than one line, explicit return and use of braces
const multiply = (num1, num2) => {
  const result = num1 * num2;
  // more code here
  return result;
};
const sum = multiply(4, 5);
console.log(sum);

// return object
const object = () => ({ name: "Juan Doe", age: 25 });
const person = object();
console.log(person);

// arrow functions as  callback function
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter(number => number > 2);
console.log(big);

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => console.log("you clicked me"));
