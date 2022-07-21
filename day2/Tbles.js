let n1 = parseInt(prompt("enter the no"))
 console.log(`tables of ${n1} are`);
for (let i = 1; i <= 10; i++){
    let result = i * n1
    console.log(` ${n1}*${i}=${result}`);
}
console.log("***************************************************");
let n2 = parseInt(prompt("enter the no"))
let range = parseInt(prompt("enter 2nd no"))
for (let i = 1; i <= range; i++){
    let result1 = i * n2;
    console.log(`${n2}*${i}=${result1}`);
}