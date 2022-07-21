let str = "sun is red color shines Red"
let regex = /red/gi;
console.log(str.replace(regex, "orange"));




let str1 = "sun is shines only in day and not shines in night"
let result = str1.split("shines").join("glowes")
console.log(result);