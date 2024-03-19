Prefix & Postfix Increment Examples
This code snippet demonstrates the difference between prefix and postfix increment operators in JavaScript.

Prefix Example
let a = 10;
++a;
console.log(a); // Output: 11
In the prefix example, ++a increments the value of a before it's used in the expression. So, the value of a becomes 11.

Postfix Example
let b = 10;
b++;
console.log(b); // Output: 11
In the postfix example, b++ uses the current value of b in the expression, then increments b. So, the value of b becomes 11.

More Examples
let x = 5;
let y = ++x;
console.log(x); // Output: 6
console.log(y); // Output: 6
In the prefix increment, ++x increments x first (to 6), then assigns the new value of x to y.

let m = 5;
let n = m++;
console.log(m); // Output: 6
console.log(n); // Output: 5
In the postfix increment, m++ assigns the current value of m to n (5), then increments m.

This README provides a brief explanation of prefix and postfix increment examples along with their outputs.


