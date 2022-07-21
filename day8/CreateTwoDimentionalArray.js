function x() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      arr[i] = [];
      //    console.log((arr[i] = []));
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j <= 10; j++) {
      arr[i][j] = j;
    }
  }
  //   console.log(arr);
  return arr;
}
// x();
console.log(x());