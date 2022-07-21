let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 5,2]
let x = new Set(arr1)
console.log(x);
let y = new Set(arr2)
console.log(y);
let arr = []
// for (let i of y) {
//     if (x.has(i)) {
//         arr.push(i)
//     }
// }
console.log(arr);





let arr3 = [1, 2, 3, 4, 5]
let arr4 = [6, 7, 8, 9, 5, 2,1]
let arr5 = arr3.filter((x) => arr4.indexOf(x) !== -1)
console.log(arr5);