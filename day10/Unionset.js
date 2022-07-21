// unionofSet

// let arr1 = [1, 2, 3, 4, 5, 6]
// let arr2 = [4, 5, 6, 7, 8, 9, 10]
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);

//set
let arr1 = new Set([1, 2, 3, 4, 5, 6]);
let arr2 = new Set([4, 5, 6, 7, 8, 9, 10]);
let arr3 = [...arr1, ...arr2];
console.log(arr3);
let arr4 = new Set([...arr1, ...arr2]);
console.log(arr4);

function x(a, b) {
  let union = new Set(a);
  for (let i of b) {
    union.has(i);
  }
  return union;
  for (let i of b) {
    union.add(i);
  }
  return union;
}
let a1 = [1, 2, 3, 4, 5, 6];
let set1 = new Set(a1);
let set2 = new Set([7, 6, 8, 2, 1, 3, 8, 9]);
console.log(x(set1, set2));
