let number = parseInt(prompt("enter the no"))
let n1=0, n2=1, next
for (let i = 1; i <= number; i++){
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2=next
}

console.log("*********************************************************");
let number1 = parseInt(prompt("enter the 2nd no"))
let s1 = 0, s2 = 1, next1
console.log(s1);
console.log(s2);
next1 = s1 + s2;
while (next1 <= number1) {
    console.log(next1);
    s1 = s2
    s2 = next1
    next1=s1+s2
}