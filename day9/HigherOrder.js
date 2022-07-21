function getfile(filename) {
  const extention = filename.substring(
    filename.lastIndexOf(".") + 1,
    filename.length
  );
  return extention;
}

let result1 = getfile("module.js");
console.log(result1);
let result2 = getfile("text.txt");console.log(result2);
