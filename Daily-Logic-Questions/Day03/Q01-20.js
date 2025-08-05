// 🔁 SECTION 1: Loop Logic (20 questions)
// Print numbers from 1 to N (for loop)
let N = 10;
for (let i = 1; i <= N; i++) {
    console.log(i);
}

// Print numbers from N to 1 (while loop)
N = 9;
while (N > 0) {
    console.log(N);
    N--;
}


// Print all even numbers from 1 to N
N = 10;
for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
        console.log(i);        
    } 
}

// Print all odd numbers from 1 to N
for (let i = 1; i <= N; i++) {
    if (i % 2 === 1) {
        console.log(i);
    } 
}

// Print sum of numbers from 1 to N
N = 5;
let sum = 0
for (let i = 1; i <= N; i++){
    sum += i;
}
console.log(sum);

// Print factorial of a number
let num = 4;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
    
}
console.log(factorial);
// Print reverse of a number (e.g. 123 → 321)


// Count number of digits in a number
num = 23456557474;
let count = 0;
while (num > 0) {
    let digit = num % 10;
    count++;
    num = Math.floor(num / 10);
}
console.log(count);

// Count how many digits are even in a number
num = 63463255154;
let counts = 0;
while (num > 0) {
    let digit = num % 10;
    if (digit % 2 === 0) {
        counts++;
    }
    num = Math.floor(num / 10);
}
console.log(counts);

// Print digits of a number individually
num = 23564546635355;
while (num > 0) {
    let digit = num % 10;
    console.log(digit);
    num = Math.floor(num / 10);
}

// Find the product of digits in a number

// Check if a number is a palindrome


// Count how many numbers between 1-1000 are divisible by 7

// Print squares of all numbers from 1 to N
N = 10;
for (let i = 1; i <= N; i++) {
    let sq = i ** 2;
    console.log(`Square of ${i} is ${sq}`);
}

// Print cube of each number from 1 to N
N = 10;
for (let i = 1; i <= N; i++) {
    let cube = i ** 3;
    console.log(`Cube of ${i} is ${cube}`);
}

// Generate multiplication table of N
N = 7;
for (let i = 1; i <= 10; i++) {
    let table = i * N;
    console.log(`${N} X ${i} = ${table}`);
}

// Print numbers divisible by both 3 and 5 between 1 and 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
        console.log(i);
    }  
}

// Check if a number is Armstrong (e.g., 153 → 1³+5³+3³ = 153)

// Check if a number is perfect (sum of divisors = number)

// Find GCD of two numbers (Euclidean Algorithm)