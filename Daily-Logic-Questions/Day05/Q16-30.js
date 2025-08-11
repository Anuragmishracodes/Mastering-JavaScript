// Intermediate Problems
// Remove duplicates from an array (using .filter() or Set).
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4];
let uniQ = [...new Set(arr)];
console.log(uniQ);
let uniQ2 = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniQ2);

// Reverse an array without using .reverse().
let reverse = [...arr].reverse();
console.log(reverse);

// Get the second largest number in an array.
function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

console.log(secondLargest([10, 5, 20, 8, 12])); // 12
console.log(secondLargest([1, 1, 1])); // null (no second largest)


// Get the second smallest number in an array.
function secondSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num > smallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest === Infinity ? null : secondSmallest;
}

console.log(secondSmallest([10, 5, 20, 8, 12])); // 8
console.log(secondSmallest([1, 1, 1])); // null (no second smallest)

// Count how many times each element appears in an array.
let occurs = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(occurs);

// Merge two arrays without duplicates.
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6, 7, 8];
let merge = [...new Set([...arr1, ...arr2])];
console.log(merge);

// Find the intersection of two arrays.
let intersect = arr1.filter(item => arr2.includes(item));
console.log(intersect);

// Find the difference between two arrays.
let diff = arr1.filter(item => !arr2.includes(item));
console.log(diff);

// Group objects by a property (e.g., group students by grade).
let students = [
    {name: 'Amar', grade: "A"},
    {name: 'Akbar', grade: "A"},
    {name: 'Anthony', grade: "B"},
    {name: 'Jaspreet', grade: "C"},
    {name: 'Cyrus', grade: "B"}
]
let group = students.reduce((acc, student) => {
    (acc[student.grade] = acc[student.grade] || []).push(student);
    return acc;
}, {});
console.log(group);

// Sort an array of objects by age.
let people = [
    {name: "Amar", age: 80},
    {name: "Akbar", age: 36},
    {name: "Anthony", age: 17},
    {name: "Jaspreet", age: 40},
    {name: "Cyrus", age: 69}
]
console.log(people.sort((a, b) => a.age - b.age));

// Sort an array of objects by name alphabetically.
console.log(people.sort((a, b) => a.name.localeCompare(b.name)));

// Check if two arrays are equal.
let arr3 = [1, 2, 3];
let arr4 = [1, 2, 3];
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
console.log(arraysEqual(arr3, arr4));

// Find the longest string in an array.
let strs = ['apple', 'bananas', 'cherry', 'date'];
let longest = strs.reduce((a, b) => a.length > b.length ? a : b);
console.log(longest);

// Find the shortest string in an array.
let shortest = strs.reduce((a, b) => a.length < b.length ? a : b);
console.log(shortest);

// Remove all negative numbers from an array.
let arrnega = [1, 2, 3, -1, -2, 4, -4, -5];
let positives = arrnega.filter(num => num >= 0);
console.log(positives);