let emp1={
    name: "santhosh",
    id:123,
}
let emp2 = Object.assign({}, emp1)
emp2.name = "sanjay"
console.log(emp1.name);
console.log(emp2.name);
console.log(emp1);
console.log(emp2);



let emp3 = {
    name: "santhosh kumar",
    id:1234,
}
let emp4 = { ...emp3 }
emp4.name = "sanjay kumar"
console.log(emp3.name);
console.log(emp4.name);



let emp5 = {
    name: "santhosh kumar j r",
    id: 1234,
    place: {
        place: "davanagere",
        phone: 8837223,
    },
    skills:["java","sql"]
}
let emp6 = Object.assign({}, emp5)
emp6.skills[0]="mern"
emp6.place.place = "Bengaluru"//shallow copy changes happen
console.log(emp5);
console.log(emp6);



let emp7 = {
    name: "santhosh j r",
    id: 12345,
    place: {
        place:"davanagere"
    }
}
let emp8 = JSON.parse(JSON.stringify(emp7))
console.log(emp8);
emp8.id = 987
emp8.place.place = "Mysore";//deep copy no change
console.log(emp7);
console.log(emp8);

