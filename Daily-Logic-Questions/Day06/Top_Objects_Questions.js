// Create an object student with keys name, age, and marks. Print each value using both dot and bracket notation.

let student = {
    name: "Anurag",
    age: 21,
    marks: 500,
}
//Dot Notation
console.log(student.name);
console.log(student.age);
console.log(student.marks);
//Bracket Notation
console.log(student["name"]);
console.log(student["age"]);
console.log(student["marks"]);

// Add a new property grade to an existing object and then update it.

student.grade = "A+";
console.log(student.grade);
student.grade = "A"
console.log(student.grade);

// Delete a property from an object and verify it no longer exists.

delete student.grade;
console.log(student);

// Check whether a key exists in an object without using if (obj.key).

console.log(student.grade);   // must be undefined

// Count the number of properties in an object.

let count = 0;
for (const key in student) {
      count++;
}
console.log(count);

// Iterate over an object and print only the keys.

for (const key in student) {
    console.log(key);
}

// Iterate over an object and print only the values.

for (const key in student) {
    console.log(student[key]);
}

// Convert an object into an array of [key, value] pairs.

// Explain (with code) what happens when you assign one object to another variable and modify it.

// Create an object with keys that contain spaces and access those properties.

// ⚙️ LEVEL 2 — Object Manipulation & Thinking

// Find the key with the maximum value in an object.

// Reverse the keys and values of an object.

// Merge two objects without modifying the originals.

// Remove all properties whose values are null or undefined.

// Freeze an object and demonstrate that changes are not allowed.

// Seal an object and demonstrate what operations are allowed vs blocked.

// Destructure an object to extract nested values.

// Convert an array of objects into a single object keyed by a property.

// Count the frequency of elements in an array using an object.

// Deep clone a simple nested object (no libraries).

// 🧠 LEVEL 3 — Mindset & Real-World Object Problems

// Write a method inside an object that uses this correctly.

// Show a case where this breaks and explain why.

// Implement a simple configuration object that controls program behavior.

// Detect whether two objects have the same keys and values.

// Simulate a small database using an object (CRUD: create, read, update, delete).