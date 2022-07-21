function x(email) {
    let a = email.indexOf("@")
    if (a < 1) {
        return false
    }
    let b = email.indexOf(".")
    if (b <= a + 2) {
        return false
    }
    if (b === email.length - 1) {
        return false
    }
    // return true;
    if (true) {
        console.log("the email address is valid")
    }
    else {
        console.log("the email address is  not valid");
    }
}
console.log(x("santhoshkumarjr01gmail.com"))
console.log(x("santhoshkumarjr01@gmail.com"));