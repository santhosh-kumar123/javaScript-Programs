let emp = {
    name: "santhosh",
    id: 123,
    sal:20000
}
let count = 0;
for (let key in emp) {
    count++
    console.log(key);
}
console.log(count);





let emp2 = {
    name: "santhosh kumar j r",
    id: 1234,
    sal:20000
}
let emp3 = {
    gender:"male"
}
emp3.__proto__ = emp2
let count1 = 0;
for (let key in emp3) {
    count1++
    console.log(key);
}
console.log(count1);
console.log(emp3);





let emp4 = {
    name: "santhosh",
    id: 1234,
    sal:20000
}
console.log(Object.keys(emp4).length);