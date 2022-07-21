let x = function (check) {
  if (check instanceof Function) {
    console.log("variable is function type");
  } else {
    console.log("variable is not a function type");
  }
};
let count = true;
const z = function () {
  console.log("i am function type");
};
x(count);
x(z);





// let x = function (check) {
//   if (typeof check==="function") {
//     console.log("variable is function type");
//   } else {
//     console.log("variable is not a function type");
//   }
// };
// let count = true;
// const z = function () {
//   console.log("i am function type");
// };
// x(count);
// x(z);








// let x = function (check) {
//   if (Object.prototype.toString.call(check)=="[object Function]") {
//     console.log("variable is function type");
//   } else {
//     console.log("variable is not a function type");
//   }
// };
// let count = true;
// const z = function () {
//   console.log("i am function type");
// };
// x(count);
// x(z);

