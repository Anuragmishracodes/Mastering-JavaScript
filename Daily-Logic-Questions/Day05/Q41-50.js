// Advanced Array Methods
// Chain .map() and .filter() to square only even numbers.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenarr = arr.filter(num => num % 2 === 0);
let evensquare = evenarr.map(num => num ** 2);
console.log(evensquare);
// and the shortcut
console.log(arr.filter(num => num % 2 === 0).map(num => num ** 2));

// Chain .map() and .reduce() to find the sum of doubled numbers.
let sumofdoubles = arr.map(num => num * 2).reduce((acc, num) => acc + num, 0);
console.log(sumofdoubles);

// Create an array of first letters from an array of strings.
let strarr = ["Anurag", "Tanay", "Rohan", "Priyanshu", "Vishnu"];
strarr = strarr.sort();
let arrfirst = strarr.map(name => name[0]);
console.log(arrfirst);

// Use .reduce() to group words by their first letter.

// Use .reduce() to calculate total price from an array of products.

// Find the most frequent element in an array.

// Find the least frequent element in an array.

// Split an array into chunks of size n.

// Shuffle an array randomly.

// Rotate an array k times to the right.