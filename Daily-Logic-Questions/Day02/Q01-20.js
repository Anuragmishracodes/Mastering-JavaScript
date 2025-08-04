// ✅ Conditional Logic (20 Qs)
// Check if a number is positive or negative.
let number = -5;
if (number > 0) {
    console.log("The number is positive");
} else if (number < 0) {
    console.log("The number is negative");
} else {
    console.log("0 is neither positive nor negative");
}

// Find the largest of 3 numbers.
let a = 10, b = 15, c = 20;
if (a >= b && a >= c) {
    console.log("The Largest number is " + a);
} else if (b >= a && b >= c) {
    console.log("The Largest number is " + b);
} else {
    console.log("The Largest number is " + c);
}

// Check if a number is even or odd.
let num = 7;
if (num % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

// Check if a year is a leap year.
let year = 2025;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}

// Check if a character is a vowel or consonant.
let char = 'k';
if ('aeiouAEIOU'.includes(char)) {     // includes() checks if the character is in the string of vowels
    console.log(char + " is a vowel");
} else {
    console.log(char + " is a consonant");
}
// Classify a person’s age (child, teen, adult, senior).
let age = 69;
if (age < 13) {
    console.log("Child");
}else if (age < 20) {
    console.log("Teenager");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}

// Check if a number is divisible by both 3 and 5.
let numb  = 23;
if (numb % 3 === 0 && numb % 5 === 0) {
    console.log(numb + " is divisible by both 3 and 5");
} else if (numb % 3 === 0) {
    console.log(numb + " is divisible by 3 but not by 5");
} else if (numb % 5 === 0) {
    console.log(numb + " is divisible by 5 but not by 3");
} else {
    console.log(numb + " is not divisible by either 3 or 5");
}

// Categorize BMI (you already did calculation).
let weight = 200, height = 1.75;
let bmi = weight / (height * height);
if (bmi < 18.5) {
    console.log("Launda Sukda Hai");
} else if (bmi < 24.9) {
    console.log("Launda Healthy Hai");
} else if (bmi < 29.9) {
    console.log("Launda Khaata bahot Hai");
} else {
    console.log("Launda Fatt Jaayega Kisi Din");
}

// Grade system (marks 90+ = A, 80+ = B, etc.)
let marks = 85;
if (marks >= 90) {
    console.log("Arre Topper!!");
} else if (marks >= 80) {
    console.log("Kya Maara hai!! B Grade");
} else if (marks >= 70) {
    console.log("Damn Good!! C Grade");
} else if (marks >= 60) {
    console.log("Maar khaane se bach gaya!! D Grade");
} else if (marks >= 50) {
    console.log("Border line pass!! E Grade");
} else {
    console.log("Tu toh Gaya bete!! F for Fail");
}
// Find the quadrant of a point (x, y).
let x = 5, y = 0;
if (x > 0 && y > 0) {
    console.log("In Quadrant I");
} else if (x < 0 && y > 0) {
    console.log("In Quadrant II");
} else if (x < 0 && y < 0) {
    console.log("In Quadrant III");
} else if (x > 0 && y < 0) {
    console.log("In Quadrant IV");
} else if (x === 0 && y !== 0) {
    console.log("On Y-Axis");
}else if (y === 0 && x !== 0) {
    console.log("On X-Axis");
} else {
    console.log("At the Origin");
}
// Check if a character is uppercase or lowercase.
let charac = "Anurag";
if (charac === charac.toUpperCase()) {
    console.log("Uppercase");
} else if (charac === charac.toLowerCase()) {
    console.log("Lowercase");
} else {
    console.log("Mixed case");
}

// Traffic signal simulation using if-else.
let signal = "Yellow";
if (signal === "red" || signal === "Red" || signal === "RED") {
    console.log("Ruk ruk ruk, arre baba ruk");
}else if (signal === "yellow" || signal === "Yellow" || signal === "YELLOW") {
    console.log("Haule Haule")
}else if (signal === "green" || signal === "Green" || signal === "GREEN") {
    console.log("Abe Jaldi chal, kal subah panvel jaana hai");
} else {
    console.log("Invalid signal");
}

// Check if a number is palindrome.
let number2 = 1231;
let reverse = number2.toString().split('').reverse().join('');   // number to string, split into array, reverse it, and then join back to string, but it is a string now
if (number2.toString() === reverse) {        // convert number to string and then compare
    console.log(number2 + " is a palindrome");
} else {
    console.log(number2 + " is not a palindrome");
}

// Electricity bill calculator based on units.
let units = 150;
let bill;
if (units <= 100) {
    bill = units * 5;     // first 100 units at 5 Rs per unit
} else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7); // first 100 units at 5 Rs, next 100 units at 7 Rs
} else if (units <= 300) {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
} else {
    bill = (100 * 5) + (100 * 7) + (100 * 10) + ((units - 300) * 15);
}
console.log("Electricity bill for " + units + " units is: " + bill + " Rs.");

// Simple calculator using if-else.
let num1 = 10, num2 = 0, operator = '/';
let result;
if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        console.log("Cannot divide by zero");
    }
} else if (operator === '%') {
    result = num1 % num2;
} else {
    console.log("Invalid operator");
}
console.log("Result is: " + result);
// Check if triangle is valid using angles.
let angle1 = 60, angle2 = 60, angle3 = 60;
if (angle1 + angle2 + angle3 === 180) {
    console.log("The triangle is valid");
} else {
    console.log("The triangle is not valid");
}
// Check triangle type (equilateral, scalene, etc.).
let ang1 = 60, ang2 = 60, ang3 = 60;
if (ang1 + ang2 + ang3 === 180) {
    if (ang1 === ang2 && ang2 === ang3) {
        console.log("Equilateral Triangle");
    } else if (ang1 === ang2 || ang2 === ang3 || ang3 === ang1) {
        console.log("Isosceles triangle")
    } else {
        console.log("Scalene triangle");
    }
} else {
    console.log("Invalid triangle");
}

// Convert Celsius to Fahrenheit.
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

// Check if a string starts with capital letter.
let str = "Hello";
if (str.charAt(0) === str.charAt(0).toUpperCase()) {      // charAt(0) gets the first character, toUpperCase() converts it to uppercase
    console.log("String starts with a capital letter");
} else {
    console.log("String does not start with a capital letter");
}
// Salary tax calculation based on slabs.
let salary = 500000;
let tax;
if (salary <=250000) {
    tax = 0;
} else if (salary <= 500000) {
    tax = (salary - 250000) * 0.05;  // 5% tax for income between 250001 and 500000
} else if (salary <= 1000000) {
    tax = (250000 * 0.05) + (salary - 500000) * 0.1;  // 10% tax for income between 500001 and 1000000
} else {
    tax = (250000 * 0.05) + (500000 * 0.1) + (salary - 1000000) * 0.15;  // 15% tax for income above 1000000
}
console.log("Tax on salary " + salary + " is: " + tax + " Rs.");