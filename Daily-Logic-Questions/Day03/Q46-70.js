// 📦 SECTION 3: Arrays Basic (25 questions)
// Create an array of 5 numbers
let arr = [1,2,3,4,5];

// Access 1st and last element of an array
console.log(arr.at(0));     // start se dekhenge toh 0 se shuru hota hai
console.log(arr.at(-1));   // end se dekhenge toh -1 se shuru hota hai

// Change value at index 2
arr[2] = 10;
console.log(arr);

// Add new element to end
arr.push(6);
console.log(arr);

// Remove last element
arr.pop();
console.log(arr);
// Add new element to beginning
arr.unshift(0);
console.log(arr);

// Remove first element
arr.shift();
console.log(arr);
// Print all elements using for loop
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Print all elements using while loop
let i = 0;
while(i < arr.length) {
    console.log(arr[i]);
    i++;
}

// Find the sum of all elements
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr.at(i);
}
console.log("Sum of all elements: ", sum);
// Find the largest element

let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
    
}
console.log("Largest element: ", largest);
// Find the smallest element
let smallest = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log("Smallest element: ", smallest);

// Count how many elements are even
let even = 0;
for (let i = 0; i< arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even++;
    }
}
console.log("Count of evens: ", even);

// Count how many are odd
let odd = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        odd++;
    }
}
console.log("Count of odds: ", odd);

// Reverse the array manually
let reverse = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
}
console.log("Reversed array: ", reverse);
// Create a new array with squares of elements
let squares = [];
for(let i = 0; i < arr.length; i++) {
    squares.push(arr[i] * arr[i]);
}
console.log("Squared array: ", squares);
// Check if an element exists in array
let tofind = 3;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === tofind) {
        console.log(`${tofind} exists in the array at index ${i}`);
        break;
    } else{
        console.log(`${tofind} does not exist in the array.`);
        break;
    }
}
// Count frequency of a given number
let freq = 0;
let num = 2;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        freq++;
    }
}
console.log("Frequency of", num, "is:" , freq);

// Print all elements > 50
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 50) {
        console.log(arr[i]);
    }
}

// Create array of first N odd numbers
let N = 10;
let odds = [];
for (let i = 0; i < N; i++) {
    odds.push(2 * i + 1);
}
console.log(odds);

// Create array of first N even numbers
let evens = [];
for (let i = 0; i < N; i++) {
    evens.push(2 * i);
}
console.log(evens);

// Sort an array in ascending order (without .sort())

for (let i = 0; i < arr.length - 1; i++) {      // outer loop
  for (let j = 0; j < arr.length - i - 1; j++) { // inner loop
    if (arr[j] > arr[j + 1]) { // compare
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp; // swap
    }
  }
}

console.log(arr); // [2, 3, 4, 5, 8]


// // Copy all elements from one array to another

let source = [1, 2, 3, 4, 5];
let another = [];
for (let i = 0; i < source.length; i++) {
    another.push(source[i]);
}
console.log(another);

// // Swap first and last element

let temp = arr[0];
arr[0] = arr[arr.length - 1]; // arr.length - 1 gives last index
arr[arr.length - 1] = temp;
console.log("Array after swapping: ", arr);

// // Print alternate elements (0th, 2nd, 4th...)

for (let i = 0; i < arr.length; i += 2) {
    console.log(arr[i]);
}