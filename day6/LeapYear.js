let x = prompt("enter the year");
function year(years) {
  if ((years % 4 == 0 && years % 100 !== 0) || years % 400 == 0) {
    console.log("the given " + years + " is leap year");
  } else {
    console.log("the given " + years + " is not a leap year");
  }
}
year(x);

let x1 = prompt("enter the year");
function y(year1) {
  let leap = new Date(year1, 1, 29).getDate() == 29;
  if (leap) {
    console.log("the given " + year1 + " is leap year");
  } else {
    console.log("the given " + year1 + " is not a leap year");
  }
}
y(x1);
