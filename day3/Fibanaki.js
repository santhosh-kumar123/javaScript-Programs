function fiban(n) {
  if (n < 2) {
    return n;
  } else {
    return fiban(n - 1) + fiban(n - 2);
  }
}
let n1 = Number(prompt("enter pasitive no"));
for (let i = 0; i <= n1; i++) {
  if (n1 <= 0) {
    console.log("enter positive no");
  } else {
    for (let i = 0; i < n1; i++) {}
    console.log(fiban(i));
  }
}
