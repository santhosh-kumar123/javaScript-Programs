let str = "hello world";
let str1 = "he";
if (str.startsWith(str1)) {
  console.warn("the string starts with he");
} else {
  console.warn("the string not starts with he");
}



let str2 = "h6ello world";
let str3 = "he";
if (str2.lastIndexOf(str3,0)==0) {
    console.warn("the string starts with he");
}
else {
    console.warn("the string not start with he");
}




let str4 = "hello world he"
let str5 = /^he/;
if (str5.test(str4)) {
  console.warn("the string starts with he");
} else {
  console.warn("the string not start with he");
}

