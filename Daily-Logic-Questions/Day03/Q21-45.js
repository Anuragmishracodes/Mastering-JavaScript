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

// Print full diamond

// Print hollow diamond

// Print triangle of 1s and 0s (alternating)

// Print Pascal’s triangle (first 5 rows)

// Print triangle of increasing letters (A, AB, ABC...)

// Print triangle with fixed letter (A, BB, CCC...)

// Print triangle of increasing numbers (1 2 3...)

// Print triangle of decreasing numbers

// Print triangle of same numbers per row (1, 22, 333...)

// Print triangle with increasing number series (1, 2 3, 4 5 6...)

// Print reverse triangle of numbers

// Print right-aligned triangle

// Print mirrored triangle

// Print diamond of numbers

// Print centered number triangle

// Print hollow triangle