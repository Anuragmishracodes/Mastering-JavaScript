// LEVEL 1 — FOUNDATION (Warm-up but mandatory)

// Find the largest element in an array.

let arr = [1, 2, 3, 4, 5, 6, 7];
let largest = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest element :", largest);

// Find the smallest element in an array.

let smallest = 9;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log("Smallest Element:", smallest);

// Calculate the sum of all elements.

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Sum of All Elements:", sum);

// Calculate the average of elements.

let average = sum / arr.length;
console.log("Average of elements:", average);

// Count how many even numbers exist.

let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log("Count of even elements:", evenCount);

// Count how many odd numbers exist.

console.log("Count of odd elements:", oddCount);


// Count positive, negative, and zero elements.

arr = [-3, -2, -1, 0, 0, 1, 2, 3, 4, 5];
let positives = 0;
let negatives = 0;
let zeros = 0;

for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char === 0) {
        zeros++;
    } else if (char > 0) {
        positives++;
    } else if (char < 0) {
        negatives++;
    }
}
console.log("No. of Positive elements:", positives);
console.log("No. of Negative elements:", negatives);
console.log("No. of Zero elements:", zeros);

// Find the second largest number.

arr = [10, 5, 8, 12, 20, 15, 40, 40, 25, 25];
largest = -Infinity;
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

// Check if an array is sorted (ascending).

arr = [1, 2, 3, 4, 5];
let ascending = true;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
        ascending = false;
        break;
    }
}
if (ascending) {
    console.log("Array is Sorted in Ascending Order");
} else {
    console.log("Array is not sorted")
}

// Reverse an array without using .reverse().

arr = [1, 2, 3, 4, 5];
let reverseArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
}
console.log(reverseArr);

// LEVEL 2 — THINKING REQUIRED (Control + Logic)

// Remove all duplicate elements.

arr = [1, 2, 3, 4, 5, 2, 1, 5];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {   // Why ? because indexOf left to right search karta hai
        newArr.push(arr[i]);               // returns the index if found, -1 if not found
    }
}
console.log(arr)
console.log(newArr)

// Find the first repeating element.

arr = [1, 2, 3, 3, 4, 3, 5, 5];
let seen = [];
let firstRepeat = null;

for (let i = 0; i < arr.length; i++) {
    if (seen.indexOf(arr[i]) !== -1) {
        firstRepeat = arr[i];
        break;
    }
    seen.push(arr[i]);
}
console.log(firstRepeat)

// Find the frequency of each element.

let freq = {};

for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    freq[val] = (freq[val] || 0) + 1;
}
console.log(freq)

// Move all zeros to the end (order preserved).

arr = [1, 2, 3, 4, 0, 2, 0, 1, 0, 3, 0, 4];
let withoutZero = [];
let zeroArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        withoutZero.push(arr[i]);
    } else if (arr[i] === 0) {
        zeroArr.push(arr[i]);
    }
}
newArr = [...withoutZero, ...zeroArr];
console.log(newArr);

// Rotate array left by 1.

arr = [1, 2, 3, 4];
newArr =[];

for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
}
newArr.push(arr[0]);
console.log(newArr);

// Rotate array right by 1.

newArr = [];
newArr.push(arr[arr.length - 1]);
for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
}
console.log(newArr);

// Rotate array by k positions.

arr = [1, 2, 3, 4, 5];
let k = 6;
k = k % arr.length;
let rotateArr = [];
for (let i = 0; i < arr.length; i++) {
    rotateArr.push(arr[(i + k) % arr.length]);
}
console.log(rotateArr);

// Merge two sorted arrays into one sorted array.

arr1 = [1, 3, 5, 7, 9];
arr2 = [2, 4, 6, 8, 10];
arr = [...arr2, ...arr1].sort((a, b) => a - b);
console.log(arr);

// Find the intersection of two arrays.

arr1 = [1, 2, 3, 4, 5];
arr2 = [2, 3, 4, 67, 6, 45];
let intersection = arr1.filter((val, index) => arr2.includes(val) && arr1.indexOf(val) === index);
console.log(intersection);

// Find the union of two arrays.

let union = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
console.log(union);

// LEVEL 3 — MIND BENDING

// Find the maximum subarray sum (Kadane’s Algorithm).

arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let maxSum = arr[0];
let currentSum = arr[0];

for (let i = 1; i < arr.length; i++) {
  currentSum = Math.max(arr[i], currentSum + arr[i]);
  maxSum = Math.max(maxSum, currentSum);
}

console.log(maxSum);

// Find all pairs whose sum equals a given number.

arr = [1, 2, 3, 4, 5, 6, 7];
let target = 7;
let pairs = [];

for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (
        arr.includes(complement) && arr.indexOf(complement) > i
    ) {
        pairs.push([arr[i], complement]);
    }
}
console.log(pairs);



// Find the missing number from range 1 to n.

arr = [1, 2, 3, 5]
let n = 5;
let trueSum = n * (n + 1) / 2;
let actualSum = 0;

for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
}
console.log(trueSum - actualSum);

// Find the element that appears only once (others twice).

arr = [2, 3, 5, 4, 5, 3, 4];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    result = result ^ arr[i];   // XOR cancels duplicates
}
console.log(result);

// Split array into equal sum partitions.

arr = [1, 2, 3, 6];

let totalSum = 0;
for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
}

if (totalSum % 2 !== 0) {
    console.log(false);
} else {
    let half = totalSum / 2;
    let prefixSum = 0;
    let canSplit = false;
    
    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];
        if (prefixSum === half) {
            canSplit = true;
            break;
        }
    }
    
    console.log(canSplit);
}



// Find the majority element (> n/2 times).

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

// Find all triplets whose sum equals zero.(nahi padha hu abhi DSA mein karunga)
// Find the longest increasing subsequence.
// Rearrange array so positive and negative alternate.
// Implement custom map, filter, and reduce from scratch.