let n1 = parseInt(prompt("enter 1st no"))
let n2 = parseInt(prompt("enter 2nd no"));
let n3 = parseInt(prompt("enter 3rd no"));

let res1 = n1 % 10;
let res2 = n2 % 10;
let res3 = n3 % 10;

if (res1 == res2 && res1 == res3) {
    console.log("the last digit is same");
}
else {
    console.log("the last digit is not same");
}
