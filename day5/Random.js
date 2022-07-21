let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function x(length) {
    let result = ""
    for (let i = 0; i < length; i++) {
         result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
    }
    return result
}
console.log(x(10));




let str = Math.random().toString(36).substring(2,7);
console.log(str);