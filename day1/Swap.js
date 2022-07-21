let n1 = Number(prompt("enter 1st no"));
console.log(`n1 is ${n1}`);
let n2 = Number(prompt("enter 2nd no"));
console.log(`n2 is ${n2}`);
let temp;
temp = n1;
n1 = n2;
n2 = temp;
console.log(`n1 is ${n1} and n2 is ${n2}`);

let n3 = Number(prompt("enter 1st no"));
let n4 = Number(prompt("enter 2nd no"));
console.log(`n3 is ${n3} n4 is ${n4}`);
[n3, n4] = [n4, n3];
console.log(`n3 is ${n3} n4 is ${n4}`);
