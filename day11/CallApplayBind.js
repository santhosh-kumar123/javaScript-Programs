var emp = {
    name: "Santhosh Kumar J R",
    age:24
}
var emp1 = {
    name: "santhosh",
    age:24
}
function check(a,b) {
    console.log(a+b);
    console.log(this.name);
    // console.log(this.age);
}
check(emp)
check.call(emp, 10, 20);
check.apply(emp,[10, 50]);
check.bind(emp,40,50)();