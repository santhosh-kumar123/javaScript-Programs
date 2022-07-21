let n1 = Number(prompt("enter no"))
function sum(num) {
    if (num>0) {
        return num+sum(num-1)
    }
    else {
        return num
    }
}
const result = sum(n1)
console.log(`the sum of ${result}`);