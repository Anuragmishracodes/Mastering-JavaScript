// 🌀 Switch, Break, Continue (10 Qs)
// Build a calculator using switch.
let num1 = 25;
let num2 = 0;
let operator = '/';  // Change this to '+', '-', '*', '/', '%'

let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            result = "Cannot divide by zero";
        } else {
            result = num1 / num2;
        }
        break;
    case '%':
        if (num2 === 0) {
            result = "Cannot divide by zero";
        } else {
            result = num1 % num2;
        }
        break;
    default:
        result = "Invalid operator";
}

console.log(`Result: ${result}`);


// Weekday from number (1 = Monday, 7 = Sunday).
let val = 5;
switch (val) {
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
    default: console.log("Invalid");
}
// Month name from number.
let month = 8;
switch (month) {
    case 1: console.log("january");
        break;
    case 2: console.log("February");
        break;
    case 3: console.log("March");
        break;
    case 4: console.log("April");
        break;
    case 5: console.log("May");
        break;
    case 6: console.log("June");
        break;
    case 7: console.log("July");
        break;
    case 8: console.log("August");
        break;
    case 9: console.log("September");
        break;
    case 10: console.log("October");
        break;
    case 11: console.log("November");
        break;
    case 12: console.log("December");
        break;
    default: console.log("Invalid Month Number");
}

// Grade system using switch.
let marks = 50;
switch (Math.floor(marks / 10)) {
    case 9: console.log("Grade A+");
        break;
    case 8: console.log("Grade A");
        break;
    case 7: console.log("Grade B");
        break;
    case 6: console.log("Grade C");
        break;
    case 5: console.log("Grade D");
        break;
    case 4: console.log("Fail");
        break;
    default: console.log("Invalid Marks");
        break;
}
// Vowel or consonant using switch.
let char = 'A';  // You can test with any letter

// Convert to lowercase to handle uppercase inputs
char = char.toLowerCase();

switch (char) {
    case 'a':    // fall through ka sahi upyog
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`${char} is a Vowel`);
        break;

    default:
        if (char >= 'a' && char <= 'z') {  // for verification
            console.log(`${char} is a Consonant`);
        } else {
            console.log("Invalid");
        }
}


// Use break to exit loop on condition.
for (let i = 0; i < 20; i++) {
    if (i === 15) {
        break;
    }
    console.log(i);
}

// Use continue to skip certain value.
for (let i = 1; i < 52; i++) {
    if (i === 4 || i === 5 || i === 3) {
        continue;
    }
    console.log(i);
}

// Find first 5 odd numbers using break.
let odds = 5;
for (let i = 0; i < 30; i++) {
    if (i % 2 === 1) {
        console.log(i);
        odds--;
        if (odds === 0) {  // decrement ki practice nahi hui thi meri
            break;
        }
    }
    
}
console.log("Next Question");
// Skip multiples of 3 using continue.
for (let i = 1; i < 32; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);

}

// Use nested switch (challenging).
let department = "IT";  // can be useful for multi - level decision making
let designation = "Manager";   

switch (department) {      // switch mein condition rakh sakte hain, lekin cases mein values hi jaayengi, condition nahi
  case "IT":
    switch (designation) {
      case "Manager":
        console.log("IT Manager: Handles tech team and projects.");
        break;
      case "Developer":
        console.log("IT Developer: Builds and maintains software.");
        break;
      default:
        console.log("Unknown designation in IT.");
    }
    break;

  case "HR":
    switch (designation) {
      case "Manager":
        console.log("HR Manager: Manages hiring and employee relations.");
        break;
      case "Executive":
        console.log("HR Executive: Assists with HR operations.");
        break;
      default:
        console.log("Unknown designation in HR.");
    }
    break;

  case "Sales":
    switch (designation) {
      case "Manager":
        console.log("Sales Manager: Leads the sales team.");
        break;
      case "Representative":
        console.log("Sales Rep: Handles client interactions.");
        break;
      default:
        console.log("Unknown designation in Sales.");
    }
    break;

  default:
    console.log("Invalid department.");
}
