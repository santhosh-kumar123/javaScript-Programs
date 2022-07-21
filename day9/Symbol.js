let symbol1 = Symbol();
let symbol2 = Symbol(42);
let symbol3 = Symbol("hi");
console.log(typeof symbol1);
console.log(symbol3.toString());
console.log(Symbol("hi") === Symbol("hi"));



console.log(1 == [1]);
console.log(1==true);
console.log(0=="");
console.log(0==="");



let arr = [1, 2, 3, 4, 5]
let arr1 = [1, 2, 3, 4, 5]
console.log(arr.concat(arr1));
let arr3=arr1
