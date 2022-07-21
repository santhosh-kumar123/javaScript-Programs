let small = parseInt(prompt("enter the small no"))
let large = parseInt(prompt("enter the large no"))
for (let i = small; i <= large; i++) {
    let sum = 0;
    let temp = i;
    noOfDigits = i.toString().length
    while (temp > 0) {
        let rem = temp % 10;
        sum = sum + rem ** noOfDigits
        temp = parseInt(temp / 10)
    }
    if (i == sum) {
        console.log(i);
    }
}