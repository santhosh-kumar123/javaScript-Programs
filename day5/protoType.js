let emp1 = {
    name: "santhosh",
    id:12345,
skils:["java","sql","mern"]
}
let emp2 = {
    age: 24,
    sal:200000
}
emp1.__proto__=emp2
for (let key in emp1) {
    console.log(key + " = " + emp1[key]);
}
console.log(emp1);
console.log(emp2
);