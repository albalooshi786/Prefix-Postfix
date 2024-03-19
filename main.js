"use strict";
// <<<Prefix & Postfix>>>>
// Prefix Example 
let a = 10;
++a;
console.log(a); //Output 11
// Postfix Example
let b = 10;
b++;
console.log(b); //Output 11
// Prefix Example
let x = 5;
let y = ++x; // Prefix increment: x is incremented first, then its new value is assigned to y
console.log(x); //Output 6
console.log(y); //Output 6
// Postfix Example
let m = 5;
let n = m++; // Postfix increment: m current value is assigned to n, then m is incremented
console.log(m); //Output 6
console.log(n); //Output 5
