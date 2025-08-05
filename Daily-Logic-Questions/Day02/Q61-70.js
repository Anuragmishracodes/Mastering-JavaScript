// ⭐ Pattern Practice (10 Qs)
// (All use nested loops)
// 61. Print square of * of size 5×5.
let size = 5;

for (let i = 1; i <= size; i++) {           // kitne lines chahiye
  let row = "";

  for (let j = 1; j <= size; j++) {         // har line mein kitne * chahiye
    row += "*";
  }

  console.log(row);                         // print
}

// 62. Print right-angle triangle.
let k = 2
for (let i = 1; i < k; i++) {
    let row = "";
    for (let j = 1; j < k; j++) {
        row += "*"
        
    }
    k++;
    if (k === 10) {
        break;
    }
    console.log(row);
}
// 63. Print inverted triangle.
size = 5;

for (let i = size; i >= 1; i--) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}

// 64. Print half pyramid with numbers.
 k = 2
for (let i = 1; i < k; i++) {
    let row = "";
    for (let j = 1; j < k; j++) {
        row += j                        //nothing special bas * ki jagah j ki value
        
    }
    k++;
    if (k === 10) {
        break;
    }
    console.log(row);
}
// 65. Print pyramid with *.
size = 5;

for (let i = 1; i <= size; i++) {
  let row = "";

  // 1️⃣ Add spaces first (decreasing)
  for (let j = 1; j <= size - i; j++) {
    row += " ";
  }

  // 2️⃣ Add stars (increasing: 2*i - 1 stars)
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }

  console.log(row);
}

// 66. Print triangle of numbers 1 22 333…
size = 5;

for (let i = 1; i <= size; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += i;
  }

  console.log(row);
}

// 67. Print number pyramid (like Pascal triangle base).
size = 5;

for (let i = 1; i <= size; i++) {
  let row = "";

  // 1️⃣ Print spaces to center align
  for (let s = 1; s <= size - i; s++) {
    row += " ";
  }

  // 2️⃣ Print increasing numbers
  for (let j = 1; j <= i; j++) {
    row += j + " ";   // to add space between numbers
  }

  console.log(row);
}

// 68. Print full diamond star pattern.
size = 5;

// 🔺 Top half
for (let i = 1; i <= size; i++) {
  let row = "";

  // Spaces (decreasing)
  for (let j = 1; j <= size - i; j++) {
    row += " ";
  }

  // Stars (increasing odd numbers)
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }

  console.log(row);
}

// 🔻 Bottom half
for (let i = size - 1; i >= 1; i--) {
  let row = "";

  // Spaces (increasing)
  for (let j = 1; j <= size - i; j++) {
    row += " ";
  }

  // Stars (decreasing)
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }

  console.log(row);
}

// 69. Print hollow square.
 size = 5;

for (let i = 1; i <= size; i++) {
  let row = "";

  for (let j = 1; j <= size; j++) {
    // Border condition
    if (i === 1 || i === size || j === 1 || j === size) {
      row += "*";
    } else {
      row += " ";
    }
  }

  console.log(row);
}

// 70. Print Floyd’s triangle.
let rows = 5;
let num = 1;

for (let i = 1; i <= rows; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += num + " ";
    num++;
  }

  console.log(row);
}
// damn bahot bade bade concepts hain

