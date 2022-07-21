let n1 = prompt("enter the character string")
let splits = n1.split("")
let sorts = splits.sort()
console.log("the sorted value is");
for (let element of sorts) {
    console.log(element);
}