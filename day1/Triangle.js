let height = Number(prompt("enter height of triangle"))
let width = Number(prompt("enter width of triangle"));
let area = 1 / 2 *(height * width)
console.log(`the arae of triangle is ${width} and ${height}= ${area}`);



let side1 = Number(prompt("enter 1st side"))
let side2 = Number(prompt("enter 2nd side"));
let side3 = Number(prompt("enter 3rd side"));

let  x = (side1 + side2 + side3) / 2
console.log(x);
let area2 = x * (x - side1) * (x - side2) * (x - side3)
console.log(`the area of triangle is ${area2}`);