let x = function (a,b) {
    let z = a.map((item) => { return item[b] })
    return z
}
let y = [
  {
    a1: "santhosh",
    b1: 12,
    c1: "Male",
  },
  {
    a1: "santhosh1",
    b1: 13,
    c1: "Male",
  },
  {
    a1: "santhosh2",
    b1: 15,
    c1: "Male",
  },
];
console.log(x(y, "b1"));










let x1 = function (arr, prop) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++){
        arr1.push(arr[i][prop])
    }
  
  return z1;
};
let y1 = [
  {
    a1: "santhosh",
    b1: 12,
    c1: "Male",
  },
  {
    a1: "santhosh1",
    b1: 13,
    c1: "Male",
  },
  {
    a1: "santhosh2",
    b1: 13,
    c1: "Male",
  },
];
console.log(x(y1, "a1"));