let n1 = parseInt(prompt("enter the no"));
let sum = 0;
let temp = n1;
while (temp > 0) {
  let remainder = temp % 10;
  sum = sum + remainder * remainder * remainder;
 temp = parseInt(temp / 10);
}
if (sum == n1) {
  console.log(`the ${n1} is armsrong no`);
} else {
  console.log(`the ${n1} is not armsrong no`);
}



let n2 = parseInt(prompt("enter the 2nd no"));
let noOfDigits=n2.length
let sum2 = 0;
let temp2 = n2;
while (n2 > 0) {
    let rem = n2 % 10;
    sum2 = sum2 + rem ** noOfDigits
     n2=parseInt(n2/10)
}
if (sum2 == temp2) {
  console.log(`the ${temp2} is armsrong no`);
} else {
  console.log(`the ${temp2} is not armsrong no`);
}
