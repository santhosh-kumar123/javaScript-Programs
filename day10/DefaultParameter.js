let z = function (x=10,y=20) {
    return x+y
}
console.log(z(1, 1));
console.log(z(1));
console.log(z());



let a = function (b = 10, c = b + 10) {
    return  b+c
}
console.log(a(1, 1));
console.log(a());