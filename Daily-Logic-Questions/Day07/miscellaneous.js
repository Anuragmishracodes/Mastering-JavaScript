// 4️⃣ OBJECTS (20 Questions)

// Create an object representing a user and access properties using dot & bracket notation.

let obj = {
    name: "Anurag",
    age: 21,
    skills: ["HTML", "CSS", "JS", "React"],
    location: {
        pincode: 400612,
        state: "MH",
        country: "IN",
    }
}
console.log(obj.name);
console.log(obj["skills"]);
console.log(obj.location.country);

// Add a new property to an object dynamically.

obj.gender = "Male";
console.log(obj);

// Delete a property and verify its removal.

delete obj.gender;
console.log(obj);

// Count the number of properties in an object without Object.keys().

let count = 0;

for (const key in obj) {
    count++;
}
console.log(count);

// Check whether a property exists in an object.

for (const key in obj) {
    if (key === "age") {
        console.log(`${key} exists`);
        break;
    }
}

// Loop through an object and print keys and values.

for (const key in obj) {
    console.log(key, obj[key]);
}

// Convert an object into an array of keys manually.

let arr = [];
for (const key in obj) {
    arr.push(key);
}
console.log(arr);

// Convert an object into an array of values manually.

arr = [];
for (const key in obj) {
    arr.push(obj[key]);
}
console.log(arr);

// Find the sum of all numeric values in an object.

obj = {
    one: 32,
    two: "Sand",
    three: 57,
    four: "Sand",
    five: 43,
}
let sum = 0;
for (const key in obj) {
    if (typeof obj[key] === "number") {
        sum += obj[key];
    }
}
console.log(sum);

// Find the property with the highest numeric value.

// Rename a property key in an object.

// Create a nested object and access deeply nested values.

// Merge two objects without using spread operator.

// Compare two objects for shallow equality.

// Freeze an object and test whether modification is allowed.

// Clone an object and prove reference vs copy behavior.

// Convert an array of objects into a single object.

// Count how many properties have string values.

// Remove properties with null or undefined values.

// Create a method inside an object and use this keyword correctly.

// 5️⃣ FUNCTIONS (20 Questions)

// Write a function that returns the square of a number and test it with multiple inputs.

function square(elem) {
    console.log(elem * elem);
}
square(112);

// Create a function that checks whether a number is even or odd.

function kejrival(elem) {
    if (typeof elem !== "number") {
        console.log("Invalid Input");
    }
    else if (elem % 2 === 0) {
        console.log(`${elem} is even`);
    } else {
        console.log(`${elem} is odd`);
    }
}
kejrival(4);

// Write a function that accepts an array and returns its sum.

function arrSum(...arr) {
    return arr.reduce((acc, val) => acc + val, 0)
}
arr = [1, 2, 3, 4, 5, 6];
console.log(arrSum(...arr))

// Create a function that returns the largest of two numbers.

function largest(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Invalid Inputs");
    } else if (a === b) {
        console.log("both are equal");
    } else if (a > b) {
        console.log(`${a} is largest`);
    } else {
        console.log(`${b} is largest`);
    }
}
largest();

// Write a function that counts vowels in a string.

// Create a function that returns true if a number is prime.

// Write a function that reverses a string.

// Create a function with a default parameter and test different cases.

// Write a function that accepts another function as an argument and executes it.

// Create a function that returns an object containing multiple values.

// Write a function that modifies an external variable and observe side effects.

// Create a function that returns a function.

// Write a function that validates a password using multiple conditions.

// Create a function that formats a user’s full name.

// Write a function that counts how many times it has been called.

// Create a function that simulates a retry mechanism (max 3 attempts).

// Write a function that filters positive numbers from an array.

// Create a function that uses arguments object.

// Write a function that demonstrates function scope vs block scope.

// Create a function that prevents modification of its returned object.