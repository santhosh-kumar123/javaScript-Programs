let str = `santhosh
kumar
j
r`
let result = str.replace(/\r\n|\r|\n/g, " <br/> ")
console.log(result);




let str1 = `santhosh
kumar
j
r`;
let result1 = str.split("\n").join(" <br/> ");
console.log(result);