// Array Methods (Basics)
// Use .map() to double each number in an array.
let arr = [1, 2, 3, 4, 5, 6];
const double = arr.map(num => num * 2);
console.log(double);

// Use .map() to convert an array of names to uppercase.
let names = ["amar", "akbar", "anthony", "jaspreet"];
let upper = names.map(naam => naam.toUpperCase());
console.log(upper);

// Use .map() to get the lengths of each string in an array.
let length = names.map(naam => naam.length);
console.log(length);

// Use .map() to create an array of objects with {value, square} from a number array.
let square = arr.map(num => ({ value: num, square: num ** 2 }));
console.log(square);

// Use .filter() to get only even numbers from an array.
let evens = arr.filter(num => num % 2 === 0);
console.log(evens);

// Use .filter() to get all names starting with "A".
let arr2 = ["Anurag", "Tanay", "Avinash", "Priyanshu", "Rohan"];
let A = arr2.filter(name => name.startsWith("A"));
console.log(A);

// Use .filter() to remove falsy values (false, 0, "", null, undefined, NaN) from an array.
let falsy = ["", 0, false, null, undefined, "Anurag", NaN, 42, 10.6];
let truthy = falsy.filter(Boolean);  //boolean lagane se false baahar aa jaate hain
console.log(truthy);

// Use .reduce() to sum all numbers in an array.
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Use .reduce() to find the maximum number in an array.
let max = arr.reduce((acc, num) => Math.max(acc, num), arr[0]);
console.log(max);

// Use .reduce() to flatten a 2D array into a 1D array.
let twoD = [[1, 2], [3, 4], [5, 6]];
let flat = twoD.reduce((acc, subarr) => acc.concat(subarr), []);
console.log(flat);

// Use .forEach() to print each element with its index.
arr.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`)
});


// Use .find() to get the first number greater than 50.
let num = [10, 20, 30, 40, 50, 60, 70];
let fifty = num.find(n => n > 50);
console.log(fifty);

// Use .findIndex() to get the index of the first negative number.
console.log(num.findIndex(n => n < 0));

// Use .some() to check if any number in the array is greater than 100.
console.log(num.some(n => n > 100));

// Use .every() to check if all elements in the array are positive.
console.log(num.every(n => n > 0));