let n1 = parseInt(prompt("enter number"))
let isPrime = true;
if (n1 == 1) {
    console.log("the no is nither prime not composite no");
}
else if (n1 > 1) {
    for (let i = 2; i < n1; i++) {
        if (n1 % i == 0) {
            isPrime = false;
            break;
        }
    }
        if (isPrime) {
            console.log(`the ${n1} is prime`);
        }
        else {
            console.log(`the ${n1} is not prime`);
        }
    
}
else {
    console.log(`the no is not prime`);
}