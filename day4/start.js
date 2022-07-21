let str = prompt("enter the world")
function x() {
    if (str.startsWith("s") && str.endsWith("h")) {
      console.log("string is strat with s and ends with h");
    } else if (str.startsWith("s")) {
      console.log("string is strat with s and not ends with h");
    } else if (str.endsWith("h")) {
      console.log("string is not strat with s and ends with h");
    }
    else {
        console.log("string is not strat with s and not ends with h");
    }
}
x(str)




let str1 = prompt("enter the world");
function x1() {
  if (/^s/i.test(str) && /h$/i.test(str)) {
    console.log("string is strat with s and ends with h");
  } else if (/^s/i.test(str)) {
    console.log("string is strat with s and not ends with h");
  } else if (/h$/i.test(str)) {
    console.log("string is not strat with s and ends with h");
  } else {
    console.log("string is not strat with s and not ends with h");
  }
}
x1(str);