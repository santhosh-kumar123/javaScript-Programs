let emp = {
    name: "santhosh",
    id:1234,
}
let result = JSON.stringify(emp)
console.log(result);
console.log(typeof (result));


let emp1 = {
    name: "santhosh",
    id:1234
}
let result1=String(emp1)
let result2 = String(emp1["name"])
console.log(result1);
console.log(result2);
console.log(typeof(result1));
console.log(typeof(result2));