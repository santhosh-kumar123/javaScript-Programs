//literal
let obj1 = {
    name: "san",
    id: 123,
    place: {
        place: "Davanagere",
        Phone:88372321,
    }
}
let { name, id, place = { place: "davanagere", Phone: 123456 } } = obj1
console.log(name);
console.log(place.Phone);
console.log(obj1.name);
console.log(obj1.place.place);

//by class instance
class obj2 {
    constructor(name1,id1) {
         this.name1=name1;
         this.id1=id1;
    }
}
let o1 = new obj2("san", 123)
console.log(o1.name1);
console.log(o1.id1);
    


//this by function
function obj3(name1,id1) {
     this.name1 = name1;
     this.id1 = id1;
     }
var o2 = new obj3("santhosh", 12345)
console.log(o2.name1);
console.log(o2.id1);
    

//by object
let obj4 = new Object({
  name: "santhosh kumar J R",
  id: 123456,
  place: {
      place: "Davanagere",
      Phone:88372321,
    },
skills: ["java", "sql", "react", "javascript"],
about: function obj5(){
    x="santhos is a mern developer";
    return x;
  }
});
console.log(obj4.name);
console.log(obj4.place.place);
console.log(obj4.skills[2], obj4.skills);
console.log(obj4.about());
console.log(typeof (obj4));



//by constructor function
let obj6 = function (name,age) {
    this.name = name;
    this.age = age;
    this.skills = ["java", "sql", "mern", "react"]
    this.place = {
        place: "davanager",
        Phone:123456798998745631
    }
    this.about = function () {
        console.log("santhosh is a mern developer");
    }
}
let o4 = new obj6("santhosh", "24")
console.log(o4.name,o4.age);
console.log(o4.skills[2]);
console.log(o4.place);
o4.about();