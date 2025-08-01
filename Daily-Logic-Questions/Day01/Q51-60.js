// Part 5: Loop-Based Questions (10 Qs)
// (Just practice for tomorrow. Don’t worry if it’s new.)
// 51. Print numbers from 1 to 10.
for (let i = 1; i < 11; i++) {
    console.log(i);  
}
console.log("Next Question");

// 52. Print even numbers from 1 to 20.
for (let a = 1; a <= 20; a++){
    if (a % 2 === 0) {
        console.log(a);
    }
}
// 53. Find sum of numbers from 1 to 100.
let sum = 0;
for (let b = 1; b <= 100; b++) {
    sum += b;
}
console.log("Sum of numbers from 1 to 100 is: " + sum);
// 54. Find factorial of 5.
let fact = 1;
for (let c = 1; c <= 5; c++){
    fact *= c;
}
console.log("Factorial of 5 is: " + fact);
// 55. Print table of 7.
for (let d = 1; d <= 10; d++) {
    let m = d * 7;
    console.log(`7 X ${d} = ${m}`);
}
// 56. Count digits in a number.
let number = 1234; // Example number
let count = 0;
while (number > 0) {
    number = Math.floor(number / 10);
    count++;
}
console.log(count);
// 57. Reverse a number using loop.
let num = 1234; // Example number
let reversed = 0;
while (num > 0) {
    let digit = num % 10;   // Get the last digit
    reversed = reversed * 10 + digit;   // Append it to the reversed number
    num = Math.floor(num / 10); // Remove the last digit
}
console.log("Reversed number is: " + reversed);

// 58. Sum the digits of any number using loop.
let num2 = 1234; // Example number
let sumDigits = 0;
while (num2 > 0) {
    sumDigits += num2 % 10;
    num2 = Math.floor(num2 / 10);
}
console.log("Sum of digits is: " + sumDigits);

// 59. Print all numbers divisible by 3 from 1 to 50.
for (let e = 1; e <= 50; e++) {
    if (e % 3 === 0) {
        console.log(e);
    }
}

// 60. Print the cube of all numbers from 1 to 10.
for (let n = 1; n < 11; n++) {
    let cube = n ** 3;
    console.log(`Cube of ${n} is: ${cube}`); 
}

