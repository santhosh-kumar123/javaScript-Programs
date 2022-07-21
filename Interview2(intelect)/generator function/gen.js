// //generator is a function it is helps for iterate
// // it accept any data type
// let x = function* () {
//   yield "santhosh";
//   yield 2;
//   yield true;
//   yield null;
// };
// let g = x();
// console.log(g.next().value);//value is gives value
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// // it accept 2 arguments 1].value->it gives values in that position
// 2].done->it gives boolean values ********************************************************************
// let y = function* () {
//      let i = 0;
//   while (false) {
//     yield i++;
//   }
// };
// let g1 = y();
// console.log(g1.next().value);
// console.log(g1.next().done);
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

// // it acts as like a map method
// if value is present then it gives done as false
// else gives true
// ********************************************************************
let z = function* (num) {
  yield num + 10;
  yield num + 20;
  yield num + 30;
};
let g2 = z(10);
console.log(g2.next().value);
console.log(g2.next());
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next());
