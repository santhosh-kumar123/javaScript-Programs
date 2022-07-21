function* x(a1) {
  // let a = 5;
  console.log(a1);
  //    yield a;  //5
  // yield (a1 * 10);  //100
  // yield a1 + 50;  //60
}
x(5); //no output
x(5).next().value; //5
// console.log(x(10).next().value);
// console.log(x(10).next().value);
// console.log(x(10).next().value)

// ***********************************************************

function* y() {
  var y1 = 0;
  while (true) {
    yield y1++;
  }
}
var y2 = y();
console.log(y2.next().value); //0
console.log(y2.next().value); //1
console.log(y2.next().value); //2

// ***********************************************************


function* expandSpan(xStart, xLen, yStart, yLen) {
  const xEnd = xStart + xLen;
  const yEnd = yStart + yLen;
  for (let x = xStart; x < xEnd; ++x) {
    // for (let y = yStart; y < yEnd; ++y) {
      yield [x,y];
        yield { x, y };
    // }
  }
} 
let x10=expandSpan()
console.log(expandSpan(2, 5).next().value);
console.log(expandSpan(2, 5).next().value);



// ***********************************************************
function* z(a, b) {
    for (let i = a; i <= b; i += 1){
        yield i
    }
}
function range(a, b) {
    if (typeof a == "string") {
        let res = [...z(a.charCodeAt(), b.charCodeAt())].map(n =>
          String.fromCharCode(n)
        );
        //  let res = [...z(a.charCodeAt(), b.charCodeAt(), c.charCodeAt())].map(
        //    n => String.fromCharCode(n)
        //  );//3rd parameter no use
        console.log(res);
    }
    else {
        let res = [...z(a, b)];
        console.log(res);
    }
}
range(1,100)
range("1", "9","")
range("A","z","")