// let n1 = prompt("enter word");
// let n2 = prompt("enter character");
// function char(word, letter) {
//   let count = 0;
//   for (let i = 0; i <= word.length; i++) {
//     if (word[i] == letter) {
//       count = count + 1;
//     }
//     }
//     return count;
// }
// let x = char(n1, n2);
// console.log("no of letter " + n2 + " accurance in " + n1 + " is " + x);



// // using regex
let n3=prompt("enter words")
let n4 = prompt("enter letters")
let y = function (word1, letter1) {
    let re =new RegExp((letter1, 'g'))
  let z = word1.match(re).length
  retue = z
}
console.log(y(n3,n4));



let but = document.createElement("button");
but.innerHTML = "click";
but.addEventListener("click", () => {
  alert("hi");
});
but.removeEventListener("click", () => {
  alert("hello");
});

document.body.append(but);
