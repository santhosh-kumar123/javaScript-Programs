// numeric string used with + gives string type
// let result;
// //  Implicit Conversion to String
// result = "3" + 2;
// console.log(result); // "32"

// result = "3" + true;
// console.log(result); // "3true"

// result = "3" + undefined;
// console.log(result); // "3undefined"

// result = "3" + null;
// console.log(result); // "3null"

// Note: When a number is added to a string, JavaScript converts the number to a string before concatenation.


// *****************************************************************


// Example 2: Implicit Conversion to Number
// // numeric string used with - , / , * results number type

// let result;

// result = '4' - '2';
// console.log(result); // 2

// result = '4' - 2;
// console.log(result); // 2

// result = '4' * 2;
// console.log(result); // 8

// result = '4' / 2;
// console.log(result); // 2




// *****************************************************************************

// Example 3: Non-numeric String Results to NaN
// non-numeric string used with - , / , * results to NaN

// let result;

// result = 'hello ' + 'world';
// console.log(result); // NaN

// result = '4' - 'hello';
// console.log(result); // NaN





// different between null and undefined
// Example 5: null Conversion to Number
// // null is 0 when used with number
// let result;

// result = 4 + null;
// console.log(result);  // 4

// result = 4 - null;
// console.log(result);  // 4


// // *****************************************************
// console.log(x);
// console.log(y);
// var x = 10;
// let y = 20;

// // *****************************************************
// / Arithmetic operation of undefined with number, boolean or null gives NaN

// let result;

// result = 4 + undefined;
// console.log(result);  // NaN

// result = 4 - undefined;
// console.log(result);  // NaN

// result = true + undefined;
// console.log(result);  // NaN

// result = null + undefined;
// console.log(result);  // NaN




