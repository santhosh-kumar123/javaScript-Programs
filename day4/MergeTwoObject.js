let emp = {
    ename: "santhosh",
    eid:1234,
}
let emp1 = {
    esal: 20000,
    edesig:"Assosiate software enggineer"
}
console.log(Object.assign(emp, emp1));




let emp2 = {
  ename: "santhosh",
  eid: 1234,
};
let emp3 = {
  esal: 20000,
  edesig: "Assosiate software enggineer",
};
console.log({ ...emp2, ...emp3 });