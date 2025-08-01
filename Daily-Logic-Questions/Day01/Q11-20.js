// 🔢 Part 2: Operators (10 Qs)
// Use all arithmetic operators on two numbers (add, subtract, multiply, divide, modulus).
let a = 15;
let b = 20;
console.log("Addition:", a + b);
console.log("substraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a/b );
console.log("Modulus:", a%b);
console.log("Power:", b**2);

// Write a ternary condition to check if age is 18+.
let age = 20;
let check = age >= 18 ? "Adult" : "Minor";
console.log(check);

// Compare two numbers using all comparison operators.
let x = 10;
let y = 20;
console.log("Equal:", x == y);
console.log("Not Equal:", x != y);
console.log("Strict Equal:", x === y);
console.log("Strict Not Equal:", x !== y);
console.log("Greater than:", x > y);
console.log("Less than:", x < y);
console.log("Greater than or equal to:", x >= y);
console.log("Less than or equal to:", x <= y);

// Use !, &&, || with true and false.
console.log("Not true:", !true);
console.log("Not false:", !false);
console.log("True AND False:", true && false);
console.log("True OR False:", true || false);

// What’s the result of 2 ** 3?
let power = 2 ** 3;
console.log("2^3:", power);

// Use increment and decrement operators.
let count = 5;
count++;
console.log("Incrementer value:", count);
count--;
console.log("Decremented value:", count);

// Use += and *= on a variable.
let num = 10;
num += 5;
console.log("After += 5:", num);
num *= 2;
console.log("After *= 2:", num);

// Check if two variables hold the same value and same type.
let p = 30;
let q = "30";
console.log("Same value and type:", p === q);
console.log("Same value but different type:", p == q);

// 0 == false and 0 === false — What's the difference?
console.log("0 == false:", 0 == false);   // both are falsy values, but they are not the same type
console.log("0 === false:", 0 === false); // strict equality checks both value and type

// null == undefined and null === undefined — What's the output?
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);