function x() {
    return "hello"
}
function y(x, func) {
    console.log("world");
    return x+func
}
console.log(y(x(), " word"));
