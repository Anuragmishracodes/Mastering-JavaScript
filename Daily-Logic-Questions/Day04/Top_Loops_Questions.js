// ✅ LEVEL 1 – ESSENTIAL FUNDAMENTALS (1–10)

// Print numbers from 1 to 100 using all loop types (for, while, do…while).

for (let i = 1; i < 101; i++) {
    console.log(i)  
}

let i = 1;
while (i < 101) {
    console.log(i);
    i++
}

let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 100);

// Print only even numbers between 1 and 200.

for (let i = 2; i < 201; i += 2) {
    if (i % 2 === 0) {
        console.log(i);        
    } 
}

// Print the multiplication table of any number entered by the user.

// let n = Number(prompt("Enter a number: "));
let n = 5; // taaki code vs tak hi seemit rahe

for (let i = 1; i < 11; i++) {
    console.log(`${n} X ${i} = ${n * i}`);   
}

// Count how many digits a number has (without converting to string).

let num = 123456;
let count = 0;
while (num != 0) {
    num = Math.floor(num / 10); // Removes last digit, How?? 12345.6 ka floor 12345 hota hai
    count++;
}
console.log("Number of Digits:", count);

// Reverse a number using loops (1234 → 4321).

let number = 1234;
let reverse = 0;
while (number != 0) {
    let digit = number % 10; // modulus se last digit milti hai
    reverse = reverse * 10 + digit; // taaki reversed number mein 4 ke baad 3 aaye naaki 4 ko hi 3 bana de
    number = Math.floor(number / 10); // 123.4 ka floor 123 hota hai taaki agle iteration mein 3 mile
}
console.log("Reversed Number:", reverse);

// Display the sum of all digits of a number (987 → 24).

number = 987;
let sum = 0;
while(number != 0) {
    let digit = number % 10; // extract karne ke liye modulus
    sum += digit;
    number = Math.floor(number / 10); // remove karne liye floor
}
console.log("Sum of Digits:", sum);

// Calculate the factorial of a number using a loop.

num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`Factorial of ${num} is ${factorial}`);

// Print the first 20 Fibonacci numbers using loops.

let [a, b] = [0, 1];
console.log(a);
console.log(b);
for (let i = 2; i < 10; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}

// Find the smallest digit in a number.

number = 987654321;
let smallest = 9;
while (number != 0) {
    let digit = number % 10;
    if (digit < smallest) {
        smallest = digit;
    }
    number = Math.floor(number / 10);
}
console.log("Smallest Digit:", smallest);

// Find the largest digit in a number.

number = 987654321;
let biggest = 0;
while (number != 0) {
    let digit = number % 10;
    if (digit > biggest) {
        biggest = digit;
    }
    number = Math.floor(number / 10);
}
console.log("Biggest Digit:", biggest);

// ✅ LEVEL 2 – STRING LOOPING (11–20)

// Reverse a string manually using a loop.

let str = "Hello World";
let reversedStr = "";
for (let i = str.length -1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log("Reversed String:", reversedStr);

// Count vowels and consonants in a given string.

str = "Supercalifragilisticexpialidocious";
let vowels = 0;
let consonants = 0;
for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if ("aeiou".includes(char)) {
        vowels++;
    } else if (char >= 'a' && char <= 'z') {
        consonants++;
    }
}
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);

// Check if a string is a palindrome using loops only.

str = "malayalam";
let palindrome = true;
for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 -i]) {
        palindrome = false;
        break;
    }
}
console.log(`Is "${str}" a palindrome?`, palindrome);

// Find the frequency of every character in a string.

str = "malayalam"
let frequency = {};
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}
console.log("Character Frequency:", frequency);

// Remove duplicate characters from a string using loops.

str = "programming";
let uniqueStr = "";
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!uniqueStr.includes(char)) {
        uniqueStr += char;
    }
}
console.log("String without Duplicates:", uniqueStr);

// Print a string in “wave” pattern (H e l l o).

str = "Hello";
let wavestr = "";
for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        wavestr += str[i].toLowerCase();
    } else {
        wavestr += str[i].toUpperCase();
    }
}
console.log("Wave Pattern String:", wavestr);

// Count how many uppercase and lowercase letters exist in a string.

str = "SUPERCALIFRAGILISTICexpialidocious";
let uppercase = 0;
let lowercase = 0;
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= 'A' && char <= 'Z') {
        uppercase++;
    } else if (char >= 'a' && char <= 'z') {
        lowercase++;
    }
}
console.log("Uppercase Count:", uppercase);
console.log("Lowercase Count:", lowercase);

// Find which character appears the maximum number of times.

str = "supercalifragIlisticexpialidocious";
console.log(str);
let maxchar = '';
let maxcount = 0;
frequency = {};
for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
    if (frequency[char] > maxcount) {
        maxcount = frequency[char];
        maxchar = char;
    }
}
console.log(`Character with Maximum Frequency: ${maxchar} (${maxcount} times)`);

// Create a new string removing all vowels using loops.

let novowelStr = "";
for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (!"aieou".includes(char)) {
        novowelStr += str[i];
    }
}
console.log("String Without Vowels:", novowelStr);

// Rotate a string by 1 character (hello → elloh).

str = "hello";
let rotatestr = "";
for (let i = 1; i < str.length; i++) {
    rotatestr += str[i];
}
rotatestr += str[0];
console.log("Rotated String:", rotatestr);

// ✅ LEVEL 3 – ARRAY LOOPING LOGIC (21–30)

// Find the sum of all elements of an array.

let arr = [1, 2, 3, 4, 5];
let arrSum = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    arrSum += element;
}
console.log("Sum of Array Elements:", arrSum);

// Print only unique elements of an array (without using Set).

arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!uniqueArr.includes(element)) {
        uniqueArr.push(element);
    }
}
console.log("Unique Elements in Array:", uniqueArr);

// Rotate an array by k positions using loops.

arr = [1, 2, 3, 4, 5];
let k = 6;
k = k % arr.length;
let rotateArr = [];
for (let i = 0; i < arr.length; i++) {
    rotateArr.push(arr[(i + k) % arr.length]);
}
console.log("Rotated Array:", rotateArr);

// Find the second largest number in an array.

arr = [10, 5, 8, 12, 20, 15, 40, 40, 25, 25];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > largest) {
        secondLargest = largest;
        largest = element;
    } else if (element > secondLargest && element != largest) {
        secondLargest = element;
    }
}
console.log("Second Largest Number:", secondLargest);

// Remove duplicates from an array manually.

arr = [1, 2, 3, 4, 5, 3, 2, 1];
uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!uniqueArr.includes(element)) {
        uniqueArr.push(element);
    }
}
console.log("Array without Duplicates:", uniqueArr);

// Merge two arrays without using .concat().

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7];
let mergedArr = [];
for (let i = 0; i < arr1.length; i++) {
    mergedArr.push(arr1[i]);
}
for (let j = 0; j < arr2.length; j++) {
    mergedArr.push(arr2[j]);
}
console.log("Merged Array:", mergedArr);

// Count how many times a number appears in an array.

arr = [1, 2, 3, 2, 4, 2, 5, 3];
let target = 12;
let countNum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        countNum++;
    }
}
console.log(`Number ${target} appears ${countNum} times in this array`);

// Reverse an array manually.

arr = [1, 2, 3, 4, 5];
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}
console.log("Reversed Array:", reversedArr);

// Create a new array containing only even numbers.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
    }
}
console.log("Array of even numbers:", evenArr);

// Find if an array is sorted (ascending or descending).

arr = [5, 4, 3, 2, 1];
let ascending = true;
let descending = true;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
        descending = false;
    } else if (arr[i] > arr[i + 1]) {
        ascending = false;
    }
}
if (ascending) {
    console.log("Array is sorted in ascending order");
} else if (descending) {
    console.log("Array is sorted in descending order");
} else {
    console.log("Array is unsorted");
}

// ✅ LEVEL 4 – PATTERN PRINTING (31–40)

// Print a right-angled triangle of *.

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// Print an inverted triangle.

for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// Print a pyramid pattern.

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}

// Print a hollow pyramid.

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 1 || k === 2 * i - 1 || i === 5) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}

// Print a diamond pattern.

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}

// Print a number pyramid.

for (let i = 1; i <= 5; i++) {
    let num = "4";
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += num;
    }
    console.log(row);
}

// Print Floyd’s triangle.

let numb = 1;
for (let i = 1; i <= 7; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += numb + " ";
        numb++;
    }
    console.log(row);
}

// Print Pascal’s triangle (loops only).

for (let i = 0; i <= 5; i++) {
    let row = "";
    let coeff = 1;
    for (let j = 0; j <= i; j++) {
        row += coeff + " ";
        coeff = coeff * (i - j) / (j + 1);
    }
    console.log(row);
}

// Print a checkerboard pattern (8×8 grid).

for (let i = 0; i < 8; i++) {
    let row = "";
    for (let j = 0; j < 16; j++) {
        if ((i + j) % 2 === 0) {
            row += "#";
        } else {
            row += " ";
        }
    }
    console.log(row);
}

// Print a hollow square of stars.

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        if (i === 1 || i === 5 || j === 1 || j === 5) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}

// ✅ LEVEL 5 – HIGH-LEVEL LOGIC (41–50)

// Check if a number is prime without using Math functions.

let primeNum = 27;
let isPrime = true;
for (let i = 2; i <= primeNum / 2; i++) {
    if (primeNum % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(`Is ${primeNum} a prime number ?`, isPrime);

// Print all prime numbers from 1 to 1000 using loops.

for (let num = 2; num <= 200; num++) {
    let isPrime = true;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}

// Print all Armstrong numbers between 1 and 10000.

for (let num = 10; num <= 1000; num++) {
    let sum = 0;
    let temp = num;
    let digits = num.toString().length;
    while (temp != 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    if (sum === num) {
        console.log(num);
    }
}

// Find the LCM of two numbers using loops.

a = 4;
b = 6;
let lcm = (a > b) ? a : b;
while (true) {
    if (lcm % a === 0 && lcm % b === 0) {
        break;
    }
    lcm++;
}
console.log("LCM is:", lcm);

// Find the GCD of two numbers using loops (Euclidean method).

a = 56;
b = 98;
while (b != 0) {
    let temp = b;
    b = a % b; // Why? Because GCD of a and b is same as GCD of b and remainder of a/b
    a = temp;
}
console.log("GCD is:", a);

// Generate all possible pairs in an array using nested loops.

arr = [1, 2, 3, 4];
let pairs = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        console.log(pairs.push([arr[i], arr[j]]));
    }
}
console.log("All Possible Pairs without repetition:", pairs);

// Count how many subarrays exist in an array.

console.log(arr);
n = arr.length;
let subArrayCount = (n * (n + 1)) / 2;
console.log("Number of Subarrays:", subArrayCount);

// Flatten a 2D array using loops only.

let twoDarr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
];
let flatArr = [];
for (let i = 0; i < twoDarr.length; i++) {
    for (let j = 0; j < twoDarr[i].length; j++) {
        flatArr.push(twoDarr[i][j]);
    }
}
console.log("Flattened Arr:", flatArr);

// Count how many palindromic substrings are in a string.
console.log(str);
str = "racecar";
let palCount = 0;
for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
        let substr = str.slice(i, j);
        let revsubstr = "";
        for (let k = substr.length - 1; k >= 0; k--) {
            revsubstr += substr[k];
        }
        if (substr === revsubstr) {
            palCount++;
        }
    }
}
console.log("Number of Palindromic Substrings:", palCount);

// Generate every substring of a string using loops.

str = "abc";
let substrings = [];
for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
        substrings.push(str.slice(i, j));
    }
}
console.log("All Substrings:", substrings);