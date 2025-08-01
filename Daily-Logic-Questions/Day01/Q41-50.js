// 💡 Part 4: Real World Logic (15 Qs)
// If temperature > 30, print "Hot", else "Pleasant".
let temp = 40;

if (temp > 30) {
    console.log("Temperature is Hot");
} else {
    console.log("Temperature is Pleasant");
}

// Take name and age, and greet the user.
let naam = "Anurag";
let age = 21;
console.log(`Hello ${naam}, you are ${age} years old!`);

// Input marks and print grade:
// 90+ = A, 80–89 = B, 70–79 = C, else = D
let marks = 35;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70){
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

// Print number of days in a given month number (1–12).
let month = 5;
let days;
if (month === 2) {
    days = 28;
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
} else {
    days = 31;
}
console.log(`Number of days in month ${month}: ${days}`);

// Check if a number is divisible by 3 and 5.
let num = 16;
if (num % 3 === 0 && num % 5 === 0) {
    console.log("Number is divisible by both 3 and 5");
} else {
    console.log("Number is not divisible by both 3 and 5");
}

// Convert rupees to dollars (1 USD = 83 INR).
let rupees = 8300;
let dollars = rupees / 83;
console.log(`Converted amount is: $${dollars.toFixed(2)}`);

// BMI Calculator Logic (height, weight input → BMI).
let height = 1.75; // in meters
let weight = 70; // in kg
let bmi = weight / (height * height);
console.log(`Your BMI is: ${bmi.toFixed(2)}`);

// If a number is 3 digits, print "Valid", else "Invalid".
let number = 1234;
if (number >= 100 && number <= 999){
    console.log("Number is Valid");
} else {
    console.log("Number is Invalid");
}

// Find square root using Math.sqrt().
let numb = 24;
let sqrt = Math.sqrt(numb);
sqrt = sqrt.toFixed(2);
console.log(`Square root of ${numb} is: ${sqrt}`);

// Power of a number using Math.pow().
let numpow = 4.90;
let power = Math.pow(numpow, 2);
power = power.toFixed(1);
console.log(`Square root of ${numpow} is: ${power}`);