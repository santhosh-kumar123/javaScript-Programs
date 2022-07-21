let str = "Learning JavaScript";
//encoding
let result = window.btoa(str);
console.log(result);

// decoding
let result1 = window.atob(result);
console.log(result1);
