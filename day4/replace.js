let str = "welcome to new world"
let replaces = str.replace("new", "hello")
console.log(str);
console.log(replaces);


let str2 = "welcome to new world for New"
let regex = /new/g;
let replaces2 = str2.replace(regex, "old")
console.log(str2);
console.log(replaces2);