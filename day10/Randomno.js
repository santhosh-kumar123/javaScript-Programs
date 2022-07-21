let a = function () {
    let x = Math.floor(Math.random() * -50)
    console.log(x);
}
a()



let b = function (max, min) {
  let x = Math.floor(Math.random() * ((max-min)+1))+min;
  console.log(x);
};
b(1,50);