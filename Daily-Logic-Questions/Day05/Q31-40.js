// Nested Arrays
// Access a value from a 2D array.
let arr = [[1, 2], [3, 4], [5, 6]];
console.log(arr[0][1]); // 0th index ke array ka 1st index element

// Sum all numbers in a 2D array.
let sum = arr.flat().reduce((acc, curr) => acc + curr, 0);  // flat 2D array ko 1D array mein convert karta hai, then reduce sum kar dega
console.log(sum);

// Find the largest number in a 2D array.
let largest = arr.flat().reduce((acc, curr) => Math.max(acc, curr), -Infinity);
console.log(largest);

// Transpose a matrix (2D array).
let transpose = arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));
console.log(transpose);

// Multiply two matrices.
let matA = [[1, 2], [3, 4]];
let matB = [[5, 6], [7, 8]];
let product = matA.map((row, i) => row.map((_, j) => row.reduce((sum, curr, k) => sum + curr * matB[k][j], 0)));
console.log(product);

// Search for an element in a 2D array.
let searchElement = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === target) {
                return [i, j]; // Return the indices of the found element
            }
        }
    }
    return null; // Return null if not found
};
console.log(searchElement(arr, 4)); // [1, 1]

// Flatten a 3D array into a 1D array.
let arr3D = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let flatten = arr3D.flat(2);
console.log(flatten);

// Convert a nested array into a single string.
let nest = ['Hello', [' ', 'World', '!']];
let single = nest.flat().join('');
console.log(single);

// Create a 5×5 array filled with 0.
let zeroarr = Array.from({ length: 5 }, () => Array(5).fill(0));
console.log(zeroarr);

// Create a multiplication table (2D array).
let number = 10;
let table = Array.from({ length: number }, (_, i) =>
    Array.from({ length: number }, (_, j) => (i + 1) * (j + 1))
);
console.log(table);
