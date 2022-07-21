function Palindrome(str) {
    for (let i = 0; i < str.length/2; i++){
        if (str[i] === str[str.length -1-i]) {
            console.log(str + " is palindrome");
        }
        else {
        console.log(str + " is not a palindrome")
        }
    }
}
let n1=prompt("enter the value")
 Palindrome(n1)



let n2 = prompt("enter the 2nd value")
function Palindrome2(str) {
    let splits = str.split("")
    let reverses = splits.reverse()
    let joins = reverses.join("")
    if (n2 == joins) {
      console.log(n2 + "is palindrome");
    } else {
      console.log(n2 + "is not palindrome");
    }
}
console.log(Palindrome2(n2));
