let n1 = parseInt(prompt("enter 1st no"));
let n2 = parseInt(prompt("enter 2nd no"));
let n3 = parseInt(prompt("enter 3rd no"));
let largest;
if (n1 > n2 && n1 > n3) {
    largest=n1;
}
else if (n2 > n1 && n2 > n3) {
    largest=n2
}
else{
largest=n3
}
console.log(`lsrgest number among ${n1},${n2},${n3} is ${largest} `);



let s1 = parseFloat(prompt("enter s1 no"))
let s2 = parseFloat(prompt("enter s2 no"));
let s3 = parseFloat(prompt("enter s3 no"));
let large = Math.max(s1, s2, s3)
console.log(`the largest among s series ${s1},${s2},${s3} is ${large}`);