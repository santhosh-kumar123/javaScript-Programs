// let str1 = prompt("enter the string");
// let str2 = prompt("enter the substring");
// if (str1.toUpperCase()===str2.toUpperCase()) {
//   console.log(str1 +"="+ str2);
// } else {
//   console.log(str1 + "!=" + str2);
// }



let str3 = prompt("enter the string");
let str4 = prompt("enter the substring");
let result=new RegExp(str3,"gi").test(str4)
if (result) {
  console.log("regex "+str3 + "=" + str4);
} else {
  console.log(str3 + "!=" + str4);
}




let str5 = prompt("enter the string");
let str6 = prompt("enter the substring");
let result1 = str5.localeCompare(str6, undefined, { sensitivity: "base" });
if (result) {
  console.log("tocompare " + str5 + "=" + str6);
} else {
  console.log(str5 + "!=" + str6);
}








