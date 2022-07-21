let img = new Image();
img.src =
  "https://tse2.mm.bing.net/th?id=OIP.U88J_cJjZbfpEGjWI3si7QHaEK&pid=Api&P=0&w=309&h=174";
img.onload = function () {
  console.log(this.height);
  console.log(this.width);
};
