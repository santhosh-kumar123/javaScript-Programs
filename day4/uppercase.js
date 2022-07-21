let str = prompt("enter the word")
let z=function x(strings){
   console.log(strings[0].toUpperCase()+ strings.slice(1));
}
console.log(z(str));
// console.log(str.toUpperCase());


let str2 = prompt("enter the word")
let x1 = (string) => {
    console.log(string.replace(/^./,string[0].toUpperCase()));
}
x1(str2)