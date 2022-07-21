let y1 = [1, 8, 6, 9, 5];
console.log(y1.sort());

function x(a, b) {
  return a.age - b.age;
}
let student = [
  { name: "sanh", age: 23 },
  { name: "san", age: 13 },
  { name: "sant", age: 24 },
];
console.log(student.sort(x));

//******************************** */
function x1(a, b) {
  let name1 = a.name.toUpperCase();
  let name2 = b.name.toUpperCase();
  compare = 0;
  if (name1 > name2) {
    compare = 1;
  } else if (name1 < name2) {
    compare = -1;
  }
  return compare;
}
let student1 = [
  { name: "sanh", age: 23 },
  { name: "san", age: 13 },
  { name: "sant", age: 24 },
];
console.log(student1.sort(x1));



