// 🎯 Part 3: Basic Problem Solving (20 Qs)
// Swap two variables without using a third variable.
let a = 5;
let b = 10;
console.log(`Before swap: a = ${a}, b = ${b}`);
[a,b] = [b,a];   // arrow destructuring
console.log(`After swap: a = ${a}, b = ${b}`);


// Find the square of a number.
let num = 2;
let square = num **2;
console.log(`Square of ${num}: ${square}`);

// Check if a number is even or odd.
let nmb = 7;
let evenOrOdd = nmb % 2 === 0 ? 'Even' : 'Odd';  // Using ternary operator to check even or odd
console.log(`${nmb} is ${evenOrOdd}`);  // backticks to show dynamic value

// Find the max of two numbers using ternary.
let max = a > b ? a : b;
console.log(`Max of ${a} and ${b} is: ${max}`);

// Convert Celsius to Fahrenheit.
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius} Celsius is ${fahrenheit} Fahrenheit`);

// Convert minutes to seconds.
let minutes = 5;
let seconds = minutes * 60;
console.log(`${minutes} minutes is ${seconds} seconds`);

// Find the area of a rectangle.
let l = 10;
let w= 5;
let area = l * w;
console.log(`Area of Rectangle: ${area}`);

// Calculate simple interest.
let principal = 1000;
let rate = 5; // 5%
let time = 2; // 2 years
let simpleInt = (principal * rate * time)/100;
console.log(`Simple Interest: ${simpleInt}`);

// Get the last digit of a number.
let number = 123456;
let lastDigit = number % 10; // Using modulus operator to get last digit
console.log(`Last digit of ${number} is: ${lastDigit}`);

// Add the digits of a 3-digit number (e.g., 123 → 1+2+3 = 6).
let numb = 478;
let  sumofdigits = Math.floor(numb / 100) + Math.floor(numb% 100 /10) + numb % 10; // math.floor() is used to get the integer part of division
console.log(`Sum of digits of ${numb} is: ${sumofdigits}`);

// Reverse a 3-digit number.
let digit3 = 654;
let reversed = (digit3 % 10) * 100 + Math.floor((digit3 %100) /10) * 10 + Math.floor(digit3 / 100);
console.log(`Reversed of ${digit3} is: ${reversed}`); // IMPORTANT: This is a simple way to reverse a 3-digit number, but it assumes the number is always 3 digits.

// Multiply a number by 10 without using * operator.
let m = 6;
let by10 = (m << 1) + (m << 3); // Using bitwise left shift to multiply by 2 and 8, then adding them.
// Explanation: m << 1 is equivalent to m * 2, and m << 3 is equivalent to m * 8. Adding these gives m * 10.
console.log(`Multiplying ${m} by 10 gives: ${by10}`);

// Divide a number by 2 using bitwise operator.
let half = m >> 1; // >> iska matlab hai bitwise right shift, jo number ko 2 se divide karta hai.
console.log(`Dividing ${m} by 2 gives: ${half}`);

// Find remainder without using %.
let dividend = 23;
let divisor = 5;
let remainder = dividend - (Math.floor(dividend / divisor) * divisor);    // Using Math.floor to get the quotient and then calculating remainder
console.log(`Remainder of ${dividend} divided by ${divisor} is: ${remainder}`);

// Round a decimal to nearest whole number using Math.round().
let decimal = 4.6;
let rounded = Math.round(decimal);
console.log(`Rounded value of ${decimal} is: ${rounded}`);

// Use Math.ceil() and Math.floor() on 3.7.
let decimal2 = 3.7;
let ceil = Math.ceil(decimal2);
let floor = Math.floor(decimal2);
console.log(`Ceil of ${decimal2} is: ${ceil}`);   // ceiling mane hai ki number ko next whole number tak le jao
console.log(`Floor of ${decimal2} is: ${floor}`);  // floor mane hai ki number ko previous whole number tak le jao

// Generate a random number between 1 to 100.
let random = Math.floor(Math.random() * 100) + 1;    // Math.random() generates a number between 0 and 1, multiplying by 100 gives us a range of 0 to 99, adding 1 shifts it to 1 to 100.
console.log(`Random number between 1 and 100 is: ${random}`);

// Check if a year is a leap year.
let year = 2025;
let leap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);    // A leap year is divisible by 4, not divisible by 100 unless it is also divisible by 400.
console.log(`${year} is ${leap ? 'a leap year' : 'not a leap year'}`);

// Calculate the average of three numbers.
let [num1, num2, num3] = [10, 20, 30];
let average = (num1 + num2 + num3) / 3;
console.log(`Average of ${num1}, ${num2}, and ${num3} is: ${average}`);

// Convert string "2025" to a number and subtract 10.
let str = "2025";
let numstr = Number(str);
let result = numstr - 10;
console.log(`Subtracting 10 from ${str} gives: ${result}`);

