let symbol = prompt("enter the symbol (+,-,*,/")
let n1 = parseInt(prompt("enter 1st no"))
let n2 = parseInt(prompt("enter 2nd no"))
let result;
if (symbol == "+") {
   result=n1+n2 
}
else if (symbol == "-") {
  result = n1 - n2;
}
else if (symbol == "*") {
  result = n1 * n2;
}
else if(symbol == "/") {
  result = n1 / n2;
}
console.log(`${n1} ${symbol} ${n2} = ${result}`);



let symbol1 = prompt("enter the symbol (+,-,*,/");
let s1 = parseInt(prompt("enter 1st no"));
let s2 = parseInt(prompt("enter 2nd no"));
let result1;
switch (symbol) {
  case "+": {
    result1 = s1 + s2;
        console.log(`${s1} ${symbol1} ${s2} = ${result1}`);
        break;
  }
  case "-": {
    result1 = s1 - s2;
        console.log(`${s1} ${symbol1} ${s2} = ${result1}`);
        break;
  }
  case "*": {
    result1 = s1 * s2;
        console.log(`${s1} ${symbol1} ${s2} = ${result1}`);
        break;
  }
  case "/": {
    result1 = s1 / s2;
        console.log(`${s1} ${symbol1} ${s2} = ${result1}`);
        break;
    }
    default: {
        console.log("invalid operator");
        }
}