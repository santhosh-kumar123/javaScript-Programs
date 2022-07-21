let n1 = prompt("enter the number1");
if (n1 % 2 == 0) {
  console.log(n1 + " is even number");
} else {
  console.log(n1 + " is odd number");
}
//ternary operator
let n2 = prompt("enter the number2");
let value = n2 % 2 == 0 ? "even" : "odd";

console.log(` the number ${n2} is ${value}`);
