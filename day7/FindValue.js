let arr = ["i", "am", "learning", "javaScript"]
let arr2 = arr.includes("javaScript")//it is case Sensitive
if (arr2 == true) {
    console.log("it contains javascript");
}
else {
    console.log("it not contains javascript");
}



let arr3 = ["i", "am", "learning", "javaScript"];
let arr4 = arr3.indexOf("javaScript")!=-1; //it is case Sensitive
if (arr4) {
  console.log("it contains javascript");
} else {
  console.log("it not contains javascript");
}