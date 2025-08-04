// 🔁 Loops (30 Qs)
// Print 1 to 100.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Print even numbers between 1–100.
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        continue; // Skip odd numbers
    }
}

// Print odd numbers between 1–100.
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Find factorial of a number.
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`Factorial of ${num} is ${factorial}`);
// Sum of numbers from 1 to N.
let N = 10;
let sum = 0;
for (let i = 1; i <= N; i++) {
    sum += i;
}
console.log(`Sum of numbers from 1 to ${N} is ${sum}`);
// Sum of even digits in a number.
let number = 123456;
let sumEven = 0;
while (number > 0) {
    let digit = number % 10;
    if (digit % 2 === 0) {
        sumEven += digit;
    }
    number = Math.floor(number / 10);
}
console.log(`Sum of even digits is ${sumEven}`);
// Count the digits of a number.
let count = 0;
number = 123456;
while (number > 0) {
    count++;
    number = Math.floor(number / 10);
}
console.log(`Number of digits is ${count}`);
// Reverse a number (e.g., 123 → 321).
number = 123;
let reverse = 0;
while (number > 0) {
    digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
}
console.log(`Reversed number is ${reverse}`);
// Sum of digits of a number.
number = 123;
let sumDigits = 0;
while (number > 0) {
    sumDigits += number % 10;
    number = Math.floor(number / 10);
}
console.log(`Sum of digits is ${sumDigits}`);

// Product of digits of a number.
number = 123;
let products = 1;
while (number > 0) {
    products *= number % 10;
    number = Math.floor(number / 10);
}
console.log(`Product of digits is ${products}`);

// Count how many digits are even.
let number2 = 234645;
let countDigits = 0;
while (number2 > 0) {
    let digit = number2 % 10;
    if (digit % 2 === 0) {
        countDigits++;
    }
    number2 = Math.floor(number2 / 10);
}
console.log(`count of even digits is ${countDigits}`);

// Count how many digits are odd.
let number3 = 234645;
let countodd = 0;
while (number3 > 0) {
    let digit = number3 % 10;
    if (digit % 2 !== 0) {
        countodd++;
    }
    number3 = Math.floor(number3 / 10);
}
console.log(`count of odd digits is ${countodd}`);

// Count number of zeroes in a number.
let number4 = 10000122;
let countzero = 0;
while (number4 > 0) {
    let digit = number4 % 10;
    if (digit === 0) {
        countzero++;
    }
    number4 = Math.floor(number4 / 10);
}
console.log(`count of zeroes is ${countzero}`);

// Fibonacci series up to N terms.
let n = 10; // how many terms to print
let a = 0;  // first number
let b = 1;  // second number

console.log("Fibonacci Series:");

for (let i = 1; i <= n; i++) {
    console.log(a);        // print current number
    let next = a + b;      // calculate next number
    a = b;                 // shift a → b
    b = next;              // shift b → next
}


// Find the first N prime numbers.
let numb = 10;  // how many primes you want
let counts = 0;
let nm = 2;

while (counts < numb) { // kyunki 0 se shuru se ho rha hai toh 10 chahiye toh 9 pe rokenge
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(nm); i++) {
        if (nm % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(nm);
        counts++;
    }

    nm++; // move to next number
}


// Check if a number is prime.
let number5 = 29; // any number to check
let isPrime = true;

if (number5 <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number5); i++) {
    if (number5 % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${number5} is a Prime Number.`);
} else {
  console.log(`${number5} is NOT a Prime Number.`);
}


// Print table of a number.
let totable = 30;
for (let i = 1; i < 11; i++) {
    let table = totable * i;
    console.log(`${totable} X ${i} = ${table}`);
}

// Print all multiples of 3 under 100.
let number6 = 30;
for (let i = 1; i < 101; i++){
    if (i % 3 === 0) {
        console.log(i);
    }
   
}

// Print square of all numbers 1 to N.
let sq = 30;
for (let i = 1; i <= sq; i++) {
    let square = i ** 2;
    console.log(`Square of ${i} is ${square}`);
}

// Sum of series: 1 + 3 + 5 + … N terms.

let Series = 5;       // number of terms
let summ = 0;
let numm = 1;     // first odd number

for (let i = 1; i <= Series; i++) {
  summ += numm;
  numm += 2;      // next odd number
}

console.log(`Sum of first ${Series} odd numbers is: ${summ}`);

// and also without loop
let sumseries = Series ** 2;
console.log(`Sum of first ${Series} odd numbers is: ${sumseries}`);


// Sum of series: 2 + 4 + 6 + … N terms.
let n_even = 5;       // number of terms
let sumeven = 0;
let numeven = 2;     // starting even number

for (let i = 1; i <= n_even; i++) {
  sumeven += numeven;
  numeven += 2;
}

console.log(`Sum of first ${n_even} even numbers is: ${sumeven}`);

// and also the coolest way

let sumserieseven = n_even * (n_even + 1);
console.log(`Sum of first ${n_even} even numbers is: ${sumserieseven}`);

// Find GCD (HCF) of two numbers.
function findGCD(a2, b2) {    // Advance concept but efficient
  while (b2 !== 0) {   
    let temp = b2;
    b2 = a2 % b2;
    a2 = temp;
  }
  return a2;
}

// Example
let a2 = 36, b2 = 60;
console.log(`GCD of ${a2} and ${b2} is:`, findGCD(a2, b2));


// Find LCM of two numbers.
function findLCM(a2, b2) {
  let gcd = findGCD(a2, b2);
  return (a2 * b2) / gcd;
}

a2 = 36, b2 = 60;
console.log(`LCM of ${a2} and ${b2} is:`, findLCM(a2, b2));


// Count numbers divisible by 3 and 5 up to N.
let n35 = 100;
let countdiv = 0;
for (let i = 1; i <= n35; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        countdiv++;      
    }
       
}
console.log(countdiv);

// Count how many numbers are palindromes from 1–1000.
let countpalin = 0;

for (let i = 1; i <= 1000; i++) {
  let str = i.toString();
  let reversed = str.split('').reverse().join('');
  
  if (str === reversed) {
    countpalin++;
    // console.log(i);
  }
}

console.log(`Total palindromes from 1 to 1000:`, countpalin);


// Count digits in a number using while loop.
let countdigit = 563463636363463;
let countdig = 0;
while (countdigit > 0) {
    countdigit = Math.floor(countdigit / 10);
    countdig++;
}
console.log(countdig);
// Remove last digit from a number using loop.
let number7 = 4532;

while (number7 > 0) {
  console.log("Before:", number7);
  number7 = Math.floor(number7 / 10);  // Remove last digit
}


// Find smallest digit in a number.
num = 93857;
let smallest = 9;  // kyunki digits mein 9 sabse bada hota hai

while (num > 0) {
  let digit = num % 10;
  if (digit < smallest) {
    smallest = digit;
  }
  num = Math.floor(num / 10);
}

console.log("Smallest digit:", smallest);


// Find largest digit in a number.
num = 203457;
let largest = 0;
while (num > 0) {
    let digit = num % 10;
    if (digit > largest) {
        largest = digit;        
    }
    num = Math.floor(num / 10);
}
console.log("Largest digit:", largest); 
// Find the average of N numbers.
let arr = [2, 25, 33];
sum = 0;
for (let i = 0; i < arr.length; i++) { //Advance topic
    sum += arr[i];
    
}
let avg = sum / arr.length;
console.log(avg);