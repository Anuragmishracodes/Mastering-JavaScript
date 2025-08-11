// 🧱 SECTION 2: Pattern Printing (25 questions)
// Print square of *
let size = 5;
for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        row += '*';
    }
    console.log(row);
}

// Print right-angled triangle of *
let height = 5;
for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

// Print inverted triangle of *
for (let i = height; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
// Print half pyramid of numbers
let num = 5;
for (let i = 1; i <= num; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}

// Print inverted half pyramid of numbers
for (let i = num; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}

// Print full pyramid of *
for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= height - i; j++) {  //for spaces
        row += ' ';
    }
    for (let j = 1; j <= (2 * i - 1); j++) {  // for stars
        row += '*';
    }
    console.log(row);
}

// Print number pyramid
num = 5;
for (let i = 1; i <= num; i++) {
    let row = '';
    for (let j = 1; j <= num - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= (2 * i - 1); j++) {
        row += i;
    }
    console.log(row);
}

// Print Floyd’s triangle
num = 5;
let count = 1;
for (let i = 1; i <= num; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += count + ' ';
        count++;
    }
    console.log(row);
}

// Print hollow square
for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
            row += '*';
        } else {
            row += " ";
        }
    }
    console.log(row);
}

// Print full diamond
for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= height - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= (2 * i - 1); j++) {
        row += "*";
    }
    console.log(row);
}
// Print hollow diamond
for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= (2 * i -1); j++) {
        if (j === 1 || j === (2 * i -1) || i === height) {
            row += "*";
        } else {
            row += " ";
        }

    }
    console.log(row);
}

// Print triangle of 1s and 0s (alternating)
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        if ((i + j) % 2 === 0) {
            row += "1";
        } else {
            row += "0";
        }
    }
    console.log(row);
}

// Print Pascal’s triangle (first 5 rows)
let pascal = 5;
for (let i = 0; i < pascal; i++) {
    let row = "";
    for (let j = 0; j < pascal - i - 1; j++) {
        row += " ";
    }
    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            row += "1";
        } else {
            let num = 1;
            for (let k = 1; k <= j; k++) {
                num = num * (i - k + 1) / k;
            }
            row += num;
        }
    }
    console.log(row);
}

// Print triangle of increasing letters (A, AB, ABC...)
let h = 5;
for (let i = 0; i < h; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += String.fromCharCode(65 + j); // 65 is ASCII code for A
    }
    console.log(row);
}

// Print triangle with fixed letter (A, BB, CCC...)
for (let i = 1; i <= h; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "A";
    }
    console.log(row);
}

// Print triangle of increasing numbers (1 2 3...)
for (let i = 1; i <= h; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// Print triangle of decreasing numbers
for (let i = h; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// Print triangle of same numbers per row (1, 22, 333...)
for (let i = 1; i <= h; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}

// Print triangle with increasing number series (1, 2 3, 4 5 6...)
for (let i = 1; i <= h; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// Print reverse triangle of numbers
for (let i = h; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// Print right-aligned triangle
for (let i = 1; i <= h; i++) {
    let row = "";
    for (let j = 1; j <= h - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// Print mirrored triangle
for (let i = 1; i <= h; i++) {
    let row = "";
    for (let j = 1; j <= h - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// Print diamond of numbers
for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= (2 * i - 1); j++) {
        row += i;
    }
    console.log(row);
}




// Print centered number triangle
for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= (2* i - 1); j++) {
        row += i;
    }
    console.log(row);
}

// Print hollow triangle
for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= (2 * i -1); j++) {
        if (j === 1 || j === (2 * i -1) || i === height) {
            row += "*";
        } else {
            row += " ";
        }

    }
    console.log(row);
}

// mujhe loops ke questions se bahot darr lagta hai!!!