let str = prompt("enter a word");

function x(str1) {
  let str2 = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    str2 = str2 + str1[i];
    // console.log(str2);
  }
  // return str2
  console.log(str2);
}
x(str);

let dtr = prompt("enter 2nd word");
function x1(dtr1) {
  let splits = dtr1.split("");
  let reverses = splits.reverse();
  let joins = reverses.join("s");
  return joins;
}
console.log(x1(dtr));
