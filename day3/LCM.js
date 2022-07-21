 let hcf;
let n1 = prompt("enter 1st no")
let n2 = prompt("enter 2nd no")
for (let i = 1; i <= n1 && i <= n2; i++){
    if (n1 % i == 0 && n2 % i == 0) {
         hcf = i;
    }
}
let lcm=n1*n2/hcf
console.log(`LCM of ${n1} and ${n2} is ${lcm}`);





// let n3 = prompt("enter 3rd no");
// let n4 = prompt("enter 4th no");
// let min = n3 > n4 ? "n3" : "n4";
// while (true) {
//   console.log("san");
//   if (min % n3 == 0 && min && n4 == 0) {
//     console.log(`LCM of ${n3} and ${n4} is ${min} `);
//     break;
//   }
//   min++;
// }


