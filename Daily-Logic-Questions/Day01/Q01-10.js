// 🧠 Part 1: Variables & Data Types (10 Qs)

// Declare a variable and assign your name to it.

let myName = "Anurag Mishra";
console.log(myName);

// Change a let variable from a number to a string.

let num = 42;
num = String(num);
console.log(num);

// Use typeof to check the type of null, undefined, NaN, true, "123", and 123.
console.log(typeof null); 
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof true);
console.log(typeof "123");
console.log(typeof 123);

// Declare a constant and try to reassign it. What happens?
const any = "constant";
// any = "new";   Unpossible, can't be given to const 

// Convert a string "123" to a number using Number().
let str = "1234";
let num2 = Number(str);
console.log(num2);

// Check if "abc" is NaN.
let check = isNaN("abc");
console.log(check);      //

// Use parseInt("123px"). What’s the output?
let parse = parseInt("123px");
console.log(parse);

// Use parseFloat("10.5kg"). What’s the output?
let float = parseFloat("10.5kg");
console.log(float);

// What’s the result of 5 + "5" and 5 - "2"?
let sum = 5 + "5";   //concatenation
console.log(sum);
let diff = 5 - "2";   //subtraction
console.log(diff);

// What happens if you add null + 1?
let result = null + 1;
console.log(result);