// 60 & 72 hcf = 12

// let hcf;
// let n1 = prompt("enter 1st no")
// let n2 = prompt("enter 2nd no")
// for (let i = 1; i <= n1 && i <= n2; i++){
//     if (n1 % i == 0 && n2 % i == 0) {
//          hcf = i;
//     }
// }
// console.log(`HCF of ${n1} and ${n2} is ${hcf}`);


let n3 = prompt("enter 3rd no")
let n4 = prompt("enter 4th no")
while (n1!=n2) {
    if (n1 > n2) {
       n1=n1-n2 
    }
    else {
        n2=n2-n1
    }
}
console.log(`HCF of ${n3} and ${n4} is ${n1}`);
