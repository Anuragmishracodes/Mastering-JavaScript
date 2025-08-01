// 🤯 Bonus Challenge (10 Qs)
// Take 2-digit number → swap digits (e.g., 24 → 42)
let num = 24; // Example number
let reversed = 0;
while (num > 0) {
    let digit = num % 10;   // Get the last digit
    reversed = reversed * 10 + digit;   // Append it to the reversed number
    num = Math.floor(num / 10); // Remove the last digit
}
console.log("Reversed number is: " + reversed);


// Check if a number is a palindrome (e.g., 121, 1331)
let palindromeNum = 121; // Example number
let originalNum = palindromeNum;
let isPalin = 0;
while (palindromeNum > 0) {
    let digit = palindromeNum % 10;   // Get the last digit
    isPalin = isPalin * 10 + digit;   // Append it to the reversed number
    palindromeNum = Math.floor(palindromeNum / 10); // Remove the last digit
}
if (originalNum === isPalin) {
    console.log(originalNum + " is a palindrome.");
} else {
    console.log(originalNum + " is not a palindrome.");
}

// Check if a number is prime.
let prime = 51;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(prime); i++) {
    if (prime % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(prime + "is a prime number.");
} else {
    console.log(prime + " is not a prime number.");
}


// Generate a random OTP of 4 digits.
let otp = Math.floor(1000 + Math.random() * 9000);   // 
console.log(otp);

// Find LCM of two numbers.
let num1 = 2, num2 = 6; // Example numbers
let lcm = (num1 > num2) ? num1 : num2;
while (true) {
    if (lcm % num1 === 0 && lcm % num2 === 0) {
        console.log("LCM of " + num1 + " and " + num2 + " is: " + lcm);
        break;
    }
    lcm++;
}

// Find HCF of two numbers.
let hcf = 1;
for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        hcf = i;
    }
}
console.log("HCF of " + num1 + " and " + num2 + " is: " + hcf);

// Count how many vowels in a string.
let str = "Hello World";
let vowelCount = 0;
for (let i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".includes(str[i])) {
        vowelCount++;
    }
}
console.log("Number of vowels in the string: " + vowelCount);

// Capitalize the first letter of a string.
let sentence = "hello world";
let cap = sentence.charAt(0).toUpperCase() + sentence.slice(1);
console.log("Capitalized string: " + cap);

// Check if string is a palindrome.
let palindromeStr = "madam";
let isPalindrome = true;
for (let i = 0; i < Math.floor(palindromeStr.length / 2); i++) {
    if (palindromeStr[i] !== palindromeStr[palindromeStr.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log(palindromeStr + " is a palindrome.");
} else {
    console.log(palindromeStr + " is not a palindrome.");
}

// Check if character is uppercase or lowercase.
let char = 'A';
if (char >= 'A' && char <= 'Z') {
    console.log(char + " is uppercase.");
} else if (char >= 'a' && char <= 'z') {
    console.log(char + " is lowercase.");
}

