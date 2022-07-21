function x1(x) {
    if (typeof x == "number" && !isNaN(x)) {
        if (Number.isInteger(x)) {
            console.log("number is integer");
        }
        else {
            console.log("number is  float");
        }
    }
    else {
        console.log("is not a no");
    }
}
x1(10.5)