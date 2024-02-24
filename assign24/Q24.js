"use strict";
// //24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2);
console.log(str1 !== str2);
// // • Tests using the lower case function
const stri1 = "Hello Girls";
const stri2 = "hello girls";
console.log(stri1.toLowerCase() === stri2);
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 15;
const num2 = 10;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// // • Tests using "and" and "or" operators
const a = 15;
const b = 10;
const c = 5;
console.log(a > b && b > c);
console.log(a > b || b > c);
console.log(a < b && b < c);
console.log(a < b || b < c);
// // • Test whether an item is in a array
const fruit = ["apple", "banana", "grapes", "orange"];
console.log(fruit.includes('banana'));
console.log(fruit.includes('mango'));
// • Test whether an item is not in a array
const colours = ['orange', 'blue', 'green', 'purple'];
console.log(!colours.includes('blue'));
console.log(!colours.includes('red'));
