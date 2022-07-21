let str = "            hello world          hi         "
console.log(str);
let result = str.trim();
console.log(result);



function str1(x) {
    let result = x.replace(/^\s+|\s$/g,"")
    return result
}
console.log(str1("    hello world"));