let n1 = Number(prompt("enter positive no"));
if (n1 >= 0) {
  let result = fact(n1);
  console.log("facorial of " + n1 + " is " + result);
} else {
  console.log("enter positive no");
}
function fact(x) {
    if ( x== 0) {
        return 1
    }
    else {
        return x*fact(x-1)
    }
}