let n1 = parseInt(prompt("enter no"));
console.log(`factors of ${n1} are`);
for (let i = 2; i < n1; i++) {
  if (n1 % i == 0) {
    console.log(i);
  }
}
