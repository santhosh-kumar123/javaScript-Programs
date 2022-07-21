let n1 = parseInt(prompt("enter the positive no"))
if (n1 <0) {
    console.log("we cant get factorial for the negative no");
}
else if (n1 == 0) {
    console.log(`the factorial of ${n1} is 1`);
}
else{
    fact = 1
    for (let i = 1; i <= n1; i++){
        fact = fact * i
       
    }
     console.log(fact);
}