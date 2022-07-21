// console.log("start");
// function x() {
//   if (arguments.length == 0) {
//     console.log("fill arguments");
//   } else if (arguments.length == 1) {
//     console.log("fill more than one arguments");
//   } else {
//     let result = 0;
//     let length = arguments.length;
//     for (let i = 0; i < length; i++) {
//       result = result + arguments[i];
//       }
//       console.log(result);
//   }
// }
// console.log("end");
// x();
// x(1);
// x(1, 2);
// x(1, 2, 3, 4, 5, 6);

function x() {
  switch (arguments.length) {
    case 0:
      console.log("fill arguments");
      break;

    case 1:
      console.log("fill more than one argument");
      break;

    default:
      let result = 0;
      let length = arguments.length;
      for (i = 0; i < length; i++) {
        result = result + arguments[i];
      }
      console.log(result);
      break;
  }
}
x();
x(1);
x(2, 5);
x(1, 2, 3, 4, 5, 6);
