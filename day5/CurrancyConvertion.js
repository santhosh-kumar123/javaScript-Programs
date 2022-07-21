let formatter = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD"
});
formatter.format(2500)
 console.log(formatter);





let number = 2500.12045
let result = "$" + number.toFixed(2)
console.log(result);





let n1 = (2500).toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(n1);




let n2 = 2500.2136.toFixed(2).replace(/\d(?=(\d{2})+\.)/g, "$&,");
console.warn("$"+n2);