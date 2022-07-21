// console.log("start");
// let x = function () {
//     setTimeout(() => {
//         console.log("i am set timeout 1");
//     },1000)
// }
// x()
// console.log("end");

// // *******************************************************************
let x1 = function (a,b) {
    console.log("i am set timeOut 2");
    console.log(a+b);
}
setTimeout(x1, 2000,10,30);

// *****************
let x2 = (a,b) => {
    console.log("i am  set time out3rd");
    console.log(a+b);
}
setTimeout(x2, 3000, 10, 30)

// // this key word*******************************************************************
// var z=10
// let y = {
//   z: 4,
//   z1: function y1() {
//     console.log();
//     console.log(this.z);
//   },
// };
// y.z1();

// *********************

// var z=10
// let y = {
//   z: 4,
//   z1:  ()=> {
//     console.log();
//     console.log(this.z);
//   },
// };
// y.z1();

// argument object
// // *******************************************************************
var z=10
let y = {
  z: 4,
  z1: function y1() {
    console.log();
    console.log(this.z);
  },
};
y.z1();

// *********************

// var z=10
// let y = {
//   z: 4,
//   z1:  ()=> {
//     console.log();
//     console.log(this.z);
//   },
// };
// y.z1();

// constructor is

// console.log(typeof(1*"2"));
// console.log(1 + true);
// console.log(1+null);
// console.log(1+" "+1);
// console.log(1-"n");
