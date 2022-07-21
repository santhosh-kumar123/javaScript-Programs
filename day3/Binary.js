let n1 = Number(prompt("enter positive no"))
let bin = 0; let i = 1;
while (n1 != 0) {
    let rem = n1 % 2;
    bin = bin + rem * i;
   i=i*10
    n1 = parseInt(n1 / 2);
  
}
console.log(bin);



let n2 = Number(prompt("enter 2nd positive no"))
let result = n2.toString(2)
console.log(result);