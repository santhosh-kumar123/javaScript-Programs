let emp1 = {
  name: "santhosh",
  id: 123,
  place: {
    place: "davanagere",
    phone: 8837223,
  },
  skills: ["java", "sql", "mern"],
};
for (let x in emp1) {
    console.log(x + " = " +emp1[x]);
}



// object.entry
let emp2 = {
    name: "santhosh",
    id:1234
}
console.log(Object.keys(emp2));
console.log(Object.values(emp2));
console.log(Object.entries(emp2));
for (let [key,values] of (Object.entries(emp2))) {
    console.log(key+" = "+values);
}