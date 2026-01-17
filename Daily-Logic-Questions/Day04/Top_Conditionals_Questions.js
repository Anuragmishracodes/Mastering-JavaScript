// ✅ LEVEL 1 – BASIC DECISION MAKING (1–10)

// Check if a number is positive, negative, or zero.

let num = "true";

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else if (num === 0) {
    console.log("Zero")
} else {
    console.log("Masti Mat Kar Lawde");
}

// Check if a number is even or odd.

num = 42;
if (typeof num === "number") {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

// Check if a number is divisible by 3 AND 5.

num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not Divisible by both 3 and 5");
}

// Find the largest of 3 numbers.

let a = 1;
let b = 2;
let c = 3;
let largest;
if (a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}
console.log("Largest Number is:", largest);

// Check if a character is a vowel or consonant.

let char = 'ki';
if (typeof char === "string" && char.length === 1 && /[a-zA-Z]/.test(char)) {
    let lowercase = char.toLowerCase();
    if (lowercase === 'a' || lowercase === 'e' || lowercase === 'i' || lowercase === 'o' || lowercase === 'u') {
        console.log(char, "is a Vowel");
    } else {
        console.log(char, "is a Consonant");
    }
}

// Check if a character is uppercase, lowercase, or not a letter.

char = 'G';
if (typeof char === "string" && char.length === 1 && /[a-zA-Z]/.test(char)) {
    if (char === char.toUpperCase()) {
        console.log(char, "is Uppercase");
    } else {
        console.log(char, "is Lovercase");
    }
}

// Check if a year is a leap year.

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) { // Why? Because leap year is divisible by 4 but not by 100 unless also divisible by 400
    console.log(year, "is a Leap Year");
} else {
    console.log(year, "is not a Leap Year");
}

// Check if a number is a perfect square (without Math.sqrt).

num = 50;
let isPerfectSquare = false;
for (let i = 1; i * i <= num; i++) {
    if (i * i === num) {
        isPerfectSquare = true;
        break;
    }
}
if (isPerfectSquare) {
    console.log(num, "is a Perfect Square");
} else {
    console.log(num, "is not a Perfect Square");
}

// Check if a number is a palindrome (conditional logic).

num = 121;
let originalNum = num;
let reversedNum = 0;
while (num > 0) {
    let digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
}
if (originalNum === reversedNum) {
    console.log(originalNum, "is a Palindrome");
} else {
    console.log(originalNum, "is not a Palindrome");
}

// Check if a number is an Armstrong number.

num = 153;
let original = num;
let digits = 0;
let sum = 0;
let temp = num;
while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10);
}
temp = num;
while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digits;
    temp = Math.floor(temp / 10);
}
if (sum === original) {
    console.log(original, "is an Armstrong Number");
} else {
    console.log(original, "is Not an Armstrong Number");
}

// ✅ LEVEL 2 – STRING CONDITIONS (11–20)

// Check if 2 strings are anagrams (conditional + loops).

let str1 = "worth";
let str2 = "throw";
if (str1.length !== str2.length) {
    console.log("Not Anagrams");
} else {
    let freq = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        freq[char] = (freq[char] || 0) + 1;
    }
    let isAnagram = true;

    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];

        if (!freq[char]) {
            isAnagram = false;
            break;
        }

        freq[char]--;
    }
    if (isAnagram) {
        console.log(str1, "and", str2, "are Anagrams");
    } else {
        console.log(str1, "and", str2, "are not Anagrams");
    }
}

// Check if a password is strong (conditions: numbers + uppercase + length).

let password = "Anurag#123";
let hasUpper = false;
let hasNumber = false;

if (password.length < 8) {
    console.log("Password is Weak");
} else {
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        }
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }
    if (hasUpper && hasNumber) {
        console.log("Password is Strong");
    } else if (hasNumber || hasUpper) {
        console.log("Password is Medium");
    } else {
        console.log("Password is medium");
    }
}

// Check if a string contains only digits.

let onlyNumStr = "1A2345";
let isOnlyNum = true;
for (let i = 0; i < onlyNumStr.length; i++) {
    let char = onlyNumStr[i].toLowerCase();
    if (char >= 'a' && char <= 'z') {
        isOnlyNum = false;
        break;
    }
}
if (isOnlyNum) {
    console.log("Given String contains only digits");
} else {
    console.log("Given String does not contains only digits")
}

// Validate an email format using basic condition checks.

let email = "Anuragjainathmishra@gmail.com"
let atcount = 0;
let dotAfterAt = false;
let atIndex = -1;
let isValid = true;

for (let i = 0; i < email.length; i++) {
    let char = email[i];
    if (char === ' ') {
        isValid = false;
        break;
    }
    if (char === '@') {
        atcount++;
        atIndex = i;
    }
    if (char === '.' && atIndex !== -1 && i > atIndex + 1) {
        dotAfterAt = true;
    }
}
if (isValid && atcount === 1 && dotAfterAt) {
    console.log("Given email is valid");
} else {
    console.log("Given email is not valid");
}

// Check if a substring exists in another string manually.

let mainStr = "javascriptdeveloper";
let subStr = "script";
let found = false;

for (let i = 0; i < mainStr.length - subStr.length; i++) {
    let match = true;
    for (let j = 0; j < subStr.length; j++) {
        if (mainStr[i + j] !== subStr[j]) {
            match = false;
            break;
        }
    }
    if (match) {
        found = true;
        break;
    }
}
if (found) {
    console.log("Substring Found");
} else {
    console.log("SubString not found");
}

// Check if a string starts and ends with the same character.

let string = "radaR";

if (string.length === 0) {
    console.log("Invalid Email");
} else if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
    console.log(`String starts and ends with ${string[0]}`)
} else {
    console.log(`String does not starts and ends with the same character`);
}

// Check if string has equal number of x and o.

let str = "rrroxx";
let NumOfX = 0;
let NumOfO = 0;

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === 'x') {
        NumOfX++;
    } else if (char === 'o') {
        NumOfO++;
    }
}
console.log(str.length);
console.log(NumOfO);
console.log(NumOfX);
if ((NumOfX === NumOfO) && ((NumOfO > 0) || (NumOfX > 0))) {
    console.log("String has equal no. of 'x' and 'o'");
} else if (NumOfX > NumOfO) {
    console.log("String has more 'x' than 'o'");
} else if (NumOfX < NumOfO) {
    console.log("String has more 'o' than 'x'");
} else {
    console.log("String neither contains 'x' nor 'o'");
}

// Check if a string is fully uppercase or lowercase.

str = "anurag";
if (str.toLowerCase() === str) {
    console.log("String is fully in lowercase");
} else if (str.toUpperCase() === str) {
    console.log("String is fully in uppercase");
} else {
    console.log("String is neither fully lowercase nor fully uppercase");
}

// Check if the string contains consecutive duplicate characters.

str = "common";
let hasDuplicates = false;

for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
        hasDuplicates = true;
        break;
    }
}
if (hasDuplicates) {
    console.log("String contains consecutive duplicates");
} else {
    console.log("String does not contains consecutive duplicates");
}

// Determine if the last digit of a number is divisible by 3.

let number = 126;
let lastDigit = number % 10;
if (lastDigit % 3 === 0) {
    console.log(`Last Digit of ${number} is divisible by 3`);
} else {
    console.log(`Last Digit of ${number} is not divisible by 3`);
}

// ✅ LEVEL 3 – ARRAY-BASED CONDITIONALS (21–30)

// Check if all elements in an array are unique.

let arr = [1, 2, 3, 4, 5];
let isUnique = true;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            isUnique = false;
            break;
        }
    }
    if (!isUnique) break;
}

console.log(isUnique ? "All elements are unique" : "Array has duplicates");


// Check if an array is symmetrical (mirror array).

arr = [1, 2, 3, 2, 1];
let isSymmetric = true;

for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
        isSymmetric = false;
        break;
    }
}

console.log(isSymmetric ? "Array is symmetric" : "Array is not symmetric");


// Check if an array contains a specific number.

let numToCheck = 5;
arr = [1, 2, 3, 4, 5];
let matchFound = false;
for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char === numToCheck) {
        matchFound = true;
        break;
    }
}
if (matchFound) {
    console.log(`Array contains ${numToCheck}`);
} else {
    console.log(`Array does not contains ${numToCheck}`);
}

// Check if an array is strictly increasing.

arr = [1, 2, 3, 4, 5];
let isIncreasing = true;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
        isIncreasing = false;
        break;
    }
}
if (isIncreasing) {
    console.log("Array is strictly Increasing");
} else {
    console.log("Array is not strictly Increasing");
}

// Check if an array is strictly decreasing.

arr = [5, 4, 3, 2, 1];
let isDecreasing = true;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
        isDecreasing = false;
        break;
    }
}
if (isDecreasing) {
    console.log("Array is strictly Decreasing");
} else {
    console.log("Array is not strictly Decreasing");
}

// Check if the sum of first half equals sum of second half.

arr = [1, 2, 3, 3, 4, 1];
let mid = arr.length / 2;
let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < mid; i++) {
    sum1 += arr[i];
    sum2 += arr[mid + i];
}
console.log(sum1);
console.log(sum2);
if (sum1 === sum2) {
    console.log("sum of first half equals sum of second half")
} else {
    console.log("sum of first half is not equals sum of second half")
}

// Check if a 2D grid is a magic square.

let grid = [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
];

let n = grid.length;
let magicSum = 0;
let isMagic = true;

for (let j = 0; j < n; j++) {
    magicSum += grid[0][j];
}

for (let i = 1; i < n; i++) {
    let rowSum = 0;
    for (let j = 0; j < n; j++) {
        rowSum += grid[i][j];
    }
    if (rowSum !== magicSum) {
        isMagic = false;
        break;
    }
}

for (let j = 0; j < n && isMagic; j++) {
    let colSum = 0;
    for (let i = 0; i < n; i++) {
        colSum += grid[i][j];
    }
    if (colSum !== magicSum) {
        isMagic = false;
    }
}

let diag1 = 0;
let diag2 = 0;

for (let i = 0; i < n; i++) {
    diag1 += grid[i][i];
    diag2 += grid[i][n - 1 - i];
}

if (diag1 !== magicSum || diag2 !== magicSum) {
    isMagic = false;
}

console.log(isMagic ? "Magic Square" : "Not a Magic Square");


// Check if any element appears more than n/2 times (majority element).

arr = [1, 2, 3, 2, 2, 3, 2, 2, 2];
n = arr.length;
let majorityFound = false;

for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    if (count > n / 2) {
        console.log("Majority Element:", arr[i]);
        majorityFound = true;
        break;
    }
}
if (!majorityFound) {
    console.log("No Majority Found");
}

// Check if two arrays are equal (same elements + same order).

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 4, 3];
let isEqual = true;
if (arr1.length !== arr2.length) {
    isEqual = false;
} else {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            isEqual = false;
            break;
        }
    }
}
console.log(isEqual ? "Arrays are Equal" : "Arrays are not equal");

// Check if a target sum pair exists in array.

arr = [1, 2, 3, 4, 5];
let target = 10;
let pairFound = false;

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            pairFound = true;
            break;
        }
    }
    if (pairFound) break;
}
console.log(pairFound ? "Target sum pair exists" : "Target sum pair does not exists");

// ✅ LEVEL 4 – NESTED CONDITIONAL LOGIC (31–40)

// Simulate ATM logic: PIN → balance → withdrawal blocks.

let enteredPIN = 1234;
let correctPIN = 1234;
let balance = 10;
let withdrawalAmount = 5;

if (enteredPIN !== correctPIN) {
    console.log("PIN is Incorrect");
} else {
    if (balance < 0) {
        console.log("Invalid Balance Amount");
    } else {
        if (withdrawalAmount <= 0) {
            console.log("Invalid Withdrawal Amount");
        } else {
            if (withdrawalAmount > balance) {
                console.log("Available Balance:", balance);
            } else {
                balance -= withdrawalAmount;
                console.log("Withdrawal Successful");
                console.log("Remaining Balance:", balance);
            }
        }
    }
}

// Determine grade from marks but with multi-level conditions.

let marks = 110;

if (marks > 100) {
    console.log("Not Valid Marks");
} else if (marks > 90) {
    console.log("Grade A+");
} else if (marks > 80) {
    console.log("Grade A");
} else if (marks > 70) {
    console.log("Grade B");
} else if (marks > 60) {
    console.log("Grade C");
} else if (marks > 50) {
    console.log("Grade D");
} else if (marks > 40) {
    console.log("Grade E");
} else {
    console.log("Fail");
}

// Given time in 24-hr format, determine greeting (morning/afternoon/night).

let time = 4;

if (time < 0 || time > 23) {
    console.log("Invalid Time");
} else if (time < 12 && time > 3) {
    console.log("Good Morning");
} else if (time > 11 && time < 16) {
    console.log("Good Afternoon");
} else if (time > 15 && time < 22) {
    console.log("Good Evening");
} else {
    console.log("Good Night");
}

// Check if three sides form a valid triangle.

let side1 = 60;
let side2 = 60;
let side3 = 60;
let isTriangle = false;
if (side1 + side2 + side3 === 180) {
    console.log("This Forms a valid triangle");
    isTriangle = true;
} else {
    console.log("Not A valid triangle");
}

// Classify triangle as equilateral, isosceles, or scalene.

if (isTriangle) {
    if (side1 === side2 && side2 === side3) {
        console.log("Equilateral Triangle");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log("Isosceles Triangle");
    } else {
        console.log("Scalene Triangle");
    }
}

// Given coordinates (x,y), determine which quadrant.

let x = "Saint";
let y = 0;

if (typeof x !== "number" || typeof y !== "number") {
    console.log("Invalid Inputs");
}
else if (x === 0 && y === 0) {
    console.log("On the Origin");
}
else if (x === 0) {
    console.log("On the Y-Axis");
}
else if (y === 0) {
    console.log("On the X-Axis");
}
else if (x > 0 && y > 0) {
    console.log("Quadrant 1");
}
else if (x < 0 && y > 0) {
    console.log("Quadrant 2");
}
else if (x < 0 && y < 0) {
    console.log("Quadrant 3");
}
else if (x > 0 && y < 0) {
    console.log("Quadrant 4");
}


// Check if a person can vote (check age + citizen status).

let age = 18;
let isIndian = true;
isVotingToBJP = true;

if (age <= 0) {
    console.log("Invalid Age");
} else if (age < 18) {
    console.log("Person is Not Eligible to Vote yet");
} else {
    if (!isIndian) {
        console.log("Person must be Indian to vote");
    } else {
        if (isVotingToBJP) {
            console.log("Person can vote");
        } else {
            console.log("Person can't vote");
        }
    }
}

// Decide if a store is open based on day & time.

time = 8;

if (time < 0 || time > 23) {
    console.log("Invalid Time Entered");
} else if (time > 8 && time < 22) {
    console.log("Store is Open");
} else {
    console.log("Store is Closed");
}

// Validate traffic-light colors (red/green/yellow).

let color = "Blue";

if (color.toLowerCase() === "red") {
    console.log("Stop");
} else if (color.toLowerCase() === "yellow") {
    console.log("You can Go but in slow speed");
} else if (color.toLowerCase() === "green") {
    console.log("Go");
} else {
    console.log("Invalid Color");
}

// Simulate simple calculator using switch-case.

a = 30;
b = 40;
let operator = "*";

switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        if (b === 0) {
            console.log("Cannot Divide by Zero");
        } else {
            console.log(a / b);
        }
        break;
    default:
        console.log("Invalid Operator");
}

// ✅ LEVEL 5 – ADVANCED LOGIC CHALLENGES (41–50)

// Implement a mini-rule engine (multiple AND/OR conditions).

age = 20;
let income = 20000;
let hasGuarantor = true;
let isBlacklisted = false;

if (
    age >= 18 &&
    (income >= 25000 || hasGuarantor === true) &&
    isBlacklisted === false
) {
    console.log("Approved");
} else {
    console.log("Rejected");
}

// Determine if a string is a valid Roman numeral.

let roman = "MCMXCIV";
let valid = true;

let allowed = "IVXLCDM";

for (let i = 0; i < roman.length; i++) {
    if(!allowed.includes(roman[i])) {
        valid = false;
        break;
    }
}

if (
    /IIII|XXXX|CCCC|MMMM/.test(roman) ||
    /VV|LL|DD/.test(roman)
) {
    valid = false;
}

console.log(valid ? "Valid Roman Numerical" : "Not A Valid Roman Numerical");

// Check if a number can be expressed as sum of two squares.

n = 25;
let possible = false;

for (let a = 0; a * a <= n; a++) {
    for (let b = 0; b * b <= n; b++) {
        if (a * a + b * b === n) {
            possible = true;
            break;
        }
    }
    if (possible) break;
}

console.log(possible ? "Yes" : "No");


// Determine if a number is a “happy number.”

num = 19;
let seen = new Set(); //Why Set? To detect infinite loops

while (num !== 1 && !seen.has(num)) {
    seen.add(num);
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }

    num = sum;
}

console.log(num === 1 ? "Happy Number" : "Not a Happy Number");


// Build rock-paper-scissors logic with clean conditions.

let player1 = "rock";
let player2 = "scissors";

if (player1 === player2) {
    console.log("Draw");
} else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
) {
    console.log("Player 1 Wins");
} else {
    console.log("Player 2 Wins");
}

// Determine if a date is valid (considering month-length).

let day = 26;
let month = 8;
year = 2025;
isValid = true;

if(month < 1 || month > 12) {
    isValid = false;
} else if (day < 1) {
    isValid = false;
} else if (
    (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && day > 31
) {
    isValid = false;
} else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    isValid = false;
} else if (month === 2 && day > 28) {
    isValid = false;
}

console.log(isValid ? "Valid Date" : "Not A Valid Date");

// Implement logic to detect duplicates without loops (pure conditions).

a = 5, b = 7, c = 5;

if (a === b || b === c || a === c) {
    console.log("Duplicate exists");
} else {
    console.log("All unique");
}

// Build a simple captcha validator (string comparison + conditions).

let generatedCaptcha = "X7P9Q";
let userInput = "X7P9Q";

if (
    userInput.length === generatedCaptcha.length &&
    userInput === generatedCaptcha
) {
    console.log("Captcha Verified");
} else {
    console.log("Invalid Captcha");
}

// Given temperature & humidity, classify weather category.

temp = 35;
let humidity = 80;

if (temp >= 30 && humidity >= 60) {
    console.log("Hot and Humid");
} else if (temp >= 30 && humidity < 60) {
    console.log("Hot and Dry");
} else if (temp < 30 && humidity >= 60) {
    console.log("Cold and Humid");
} else {
    console.log("Cold and Dry");
}

// Determine if a user-provided password violates ANY of 10+ rules (nested &&, ||).

password = "Pass123!";
let username = "user";

let invalid =
    password.length < 8 ||
    password === password.toLowerCase() ||
    password === password.toUpperCase() ||
    !/[0-9]/.test(password) ||
    !/[!@#$%^&*]/.test(password) ||
    password.includes(" ") ||
    /^[0-9]/.test(password) ||
    /[0-9]$/.test(password) ||
    password.includes(username) ||
    /(.)\1/.test(password);

if (invalid) {
    console.log("Password Violates Rules");
} else {
    console.log("Strong Password");
}

//Uffffff