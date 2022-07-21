let date = new Date();
let date1 = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
console.log(`${month}/${date1}/${year}`);
console.log(`${month}-${date1}-${year}`);
console.log(`${date1}/${month}/${year}`);
console.log(`${date1}-${month}-${year}`);
