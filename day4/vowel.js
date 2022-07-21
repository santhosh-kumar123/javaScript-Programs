// let str = prompt("enter word")
// let x = function (strings) {
//     let y = strings.match(/[aeiou]/gi).length;
//     return y
// }
// console.log( x(str));



let str2 = prompt("enter the word")
let x=function () {
   let count = 0;
    let y = function (string) {
        let str3 = ["a", "e", "i", "o", "u"];
        for (let i of string) {
            if (i.includes(str3)) {
                count++;
            }
        }
        return count;
        // console.log(count);
    }
   y(str2)
}
x();



console.log(z);