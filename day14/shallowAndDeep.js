let arr = [1, 2, 3, 4];
let arr1 = arr;
let arr2 = [...arr];
console.log(arr1);
arr1[0] = [1, 2];
console.log(arr);//array reference
console.log(arr1);//shallow copy
console.log(arr2);//deep copy
// *****************************************************************
// shallow and deepcopy in object
//normal it is also a shallow
// let x = { a: 1 };
// let y = x;
// x.b = 2;
// console.log(y);
// console.log(x);
// in array==============================================
// let a = [1,2];
// let b = a;
// x[2] = 3;
// console.log(a);
// console.log(b);
// *************************************************************************************************************************************
// shallow copy it is take rference of an parent if any change in parent it changes the children
//in spread for matrix array----------------------------------------------
// let x1 = { a: 1, a1: { a2: 2 } };
// let y1 = { ...x1 };
// x1.b = 3; //not updated in y1//deep copy
// x1.a1.a2 = 4; //updated in y1//shallow copy multiple object spread operator behaves like a shallow copy
// console.log(x1);
// console.log(y1);
// =============================================
// let a1 = [1,[2]]
// let b1 = [...a1 ];
// a1[2] = [[3]]; //not updated in y1//deep copy
// a1[3] = 4; //updated in y1//shallow copy multiple object spread operator behaves like a shallow copy
// console.log(a1);
// console.log(b1);
// // ***********************************************************************************************************************************
//deep copy it is also take reference of an parent if any change in parent it dosent change the children
// let x1 = { a: 1, a1: { a2: 2 } };
// // let y1 = { ...x1 };
// let y1=Object.assign({},x1)
// x1.b = 3;
// x1.a1.a2=4
// console.log(x1);//shallow copy so to over come this we use object.parser(object.stringify(x1))
// console.log(y1);//deep copy

// ----------------------------------------------
// const x = { a: 1, a1: { a2: 2 } };
// const y=JSON.parse(JSON.stringify(x))
// x.b = 3
// x.a1.a2 =4
// console.log(x);
// console.log(y);

//******************************************************* */
//cloning through destructuring
// let a = 10;
// let b = 20;
// [a,b]=[b,a]
// console.log(a);
// console.log(b);
