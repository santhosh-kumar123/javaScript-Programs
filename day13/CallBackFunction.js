function great(a) {
    console.log("hello world");
    return a
}
function name(a, func) {
     let x = func("how are you");
     console.log(a);
    console.log(x);
   
}
name("hi",great)