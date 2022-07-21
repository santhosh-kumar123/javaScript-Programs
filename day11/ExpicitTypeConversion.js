// 1. Convert to Number Explicitly
// To convert numeric strings and boolean values to numbers, you can use Number(). For example,

// let result;

// // string to number
// result = Number('324');
// console.log(result); // 324

// result = parseFloat('324e-1')
// console.log(result); // 32.4

// result = Number('344e-1')
// console.log(result); // 32.4

// // boolean to number
// result = Number(true);
// console.log(result); // 1

// result = Number(false);
// console.log(result); // 0

// In JavaScript, empty strings and null values return 0. For example,

// let result;
// result = Number(null);
// console.log(result);  // 0

// let result = Number(' ')
// console.log(result);  // 0



// If a string is an invalid number, the result will be NaN. For example,

// let result;
// result = Number('hello');
// console.log(result); // NaN

// result = Number(undefined);
// console.log(result); // NaN

// result = Number(NaN);
// console.log(result); // NaN



// Note: You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor(). For example,

// let result;
// result = parseInt('20.01');
// console.log(result); // 20

// result = parseFloat('20.01');
// console.log(result); // 20.01

// result = +'20.01';
// console.log(result); // 20.01

// result = Math.floor('20.01');
// console.log(result); // 20



// 2. Convert to String Explicitly
// To convert other data types to strings, you can use either String() or toString(). For example,

//number to string
// let result;
// result = String(324);
// console.log(result);  // "324"

// result = String(2 + 4);
// console.log(result); // "6"

// //other data types to string
// result = String(null);
// console.log(result); // "null"

// result = String(undefined);
// console.log(result); // "undefined"

// result = String(NaN);
// console.log(result); // "NaN"

// result = String(true);
// console.log(result); // "true"

// result = String(false);
// console.log(result); // "false"

// // using toString()
// result = (324).toString();
// console.log(result); // "324"

// result = true.toString();
// console.log(result); // "true"



// 3. Convert to Boolean Explicitly
// To convert other data types to a boolean, you can use Boolean().

// In JavaScript, undefined, null, 0, NaN, '' converts to false. For example,

// let result;
// result = Boolean('');
// console.log(result); // false

// result = Boolean(0);
// console.log(result); // false

// result = Boolean(undefined);
// console.log(result); // false

// result = Boolean(null);
// console.log(result); // false

// result = Boolean(NaN);
// console.log(result); // false

// All other values give true. For example,

result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true


// JavaScript Type Conversion Table
// The table shows the conversion of different values to String, Number, and Boolean in JavaScript.

// Value	String Conversion	Number Conversion	Boolean Conversion
// 1	"1"	1	true
// 0	"0"	0	false
// "1"	"1"	1	true
// "0"	"0"	0	true
// "ten"	"ten"	NaN	true
// true	"true"	1	true
// false	"false"	0	false
// null	"null"	0	false
// undefined	"undefined"	NaN	false
// ''	""	0	false
// ' '	" "	0	true
// You will learn about the conversion of objects and arrays to other data types in later tutorials.

