// let x = () => {
//   console.log("hello world");
//   alert("hello world");
//   confirm("hello world");
//   document.write("hello world");
//   document.writeln("hello world");
//   let h = document.createElement("h1");
//   h.innerHTML = "hello world";
//   document.body.appendChild(h);
// };
// x();

let arr = ["a", 1, true, "hello wrld", 2]
console.log(arr);
let y1 = arr.splice(2, 1, "santhosh")
console.log(arr);

let obj = {
    name: "santhosh",
    age: 24,
    company:"TYSS"
}
let y2 = obj.id = "tyss102122"
console.log(obj);


let student = [
  {
    name: "santhosh",
    marks: 401,
  },
  {
    name: "prashanth",
    marks: 402,
  },
  {
    name: "santhosh1",
    marks: 403,
  },
  {
    name: "prashanth1",
    marks: 404,
  },
  {
    name: "santhosh2",
    marks: 405,
  },
];
console.log(student);
let y = student.splice(3, 0, { name: "sanjay", marks: 406 });

console.log(student);





function person(name, id) {
  this.name = name;
  this.id = id;
}
let p1 = new person("santhosh", 123);

function emp(sal, desig) {
  this.sal = sal;
  this.desig = desig;
}
let e1 = new emp(20000, "assosiate Software Engg");
e1.__proto__ = p1; 
console.log(e1.sal);
console.log(e1.name);
console.log(p1.sal);


let obj1 = {
  name:"santhosh"
}
let x = function (a,b) {
  console.log(this.name + a + b);
  
}
x.call(obj1, 10, 20)
x.apply(obj1, [10, 20])
x.bind(obj1, 10, 20)()



