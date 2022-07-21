let emp = {
    name: "santhosh",
    id: 1234,
    place: {
        place: "davanagere",
    }
}
let check = "name" in emp
if (check) {
    console.log("key is there");
}
else {
        console.log("key is not prasent");
}



let emp2 = {
    Name: "santhosh",
    id: 1234,
    age:24,
}
let check1 = emp2.hasOwnProperty("name")
if (check1) {
        console.log("key is there");
}
else {
        console.log("key is not there");
}