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
let words = ["apple", "banana", "apricot", "blueberry", "cherry", "avocado"];
let grouped = words.reduce((acc, word) => {
    let firstLetter = word[0];
    if (!acc[firstLetter]) {
        acc[firstLetter] = [];
    }
    acc[firstLetter].push(word);
    return acc;
}, {});
console.log(grouped);

// Use .reduce() to calculate total price from an array of products.
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];
let totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);

// Find the most frequent element in an array.
let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
let frequency = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
console.log(frequency);

// Find the least frequent element in an array.
let leastFrequent = Object.entries(frequency).reduce((acc, [item, count]) => {
    if (acc.count === undefined || count < acc.count) {
        acc.item = item;
        acc.count = count;
    }
    return acc;
}, {});
console.log(leastFrequent);

// Split an array into chunks of size n.
function chunkArray(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

// Shuffle an array randomly.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));

// Rotate an array k times to the right.
function rotateArray(array, k) {
    k = k % array.length;
    return array.slice(-k).concat(array.slice(0, -k));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]