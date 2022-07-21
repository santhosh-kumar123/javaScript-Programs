let root1, root2;
let a = Number(prompt("enter a value"));
let b = Number(prompt("enter b value"));
let c = Number(prompt("enter c value"));

let n1 = b * b - (4 * a * c);
if (n1 > 0) {
  root1 = (-b + Math.sqrt(n1)) / 2 * a;
  root2 = (-b - Math.sqrt(n1)) / 2 * a;
  console.log(`the roots of the quadratic equation is ${root1} and ${root2}`);
} else if (n1 == 0) {
  root1 = root2 = -b / (2 * a);
  console.log(`the root is ${root1} and ${root2}`);
} else {
  let realPath = (-b / (2*a)) .toFixed(2);
  let imaginaryPath = (Math.sqrt(n1) / (2 * a)).toFixed(2); ;
  console.log(`the real and imaginary root is${realPath} + ${imaginaryPath}i and ${realPath} `);
}
