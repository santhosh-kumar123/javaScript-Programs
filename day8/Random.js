let y = Math.floor(Math.random() * 100);
console.log(y);


function z() {
    let arr = [1, "hello", 2, 3, true]
    let x = Math.floor(Math.random() * arr.length)
    let item = arr[x]
    return item
}
console.log(z());

let emp = {
    name: "santhosh",
    age: 24,
    skills:["java","sql","html","css","javaScript","react"]
}
let x1=Math.floor(Math.random()*emp.skills.length)
console.log(x1);
