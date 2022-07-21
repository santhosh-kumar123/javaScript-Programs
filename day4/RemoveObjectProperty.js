let emp = {
    ename: "santhosh",
    eid: "1a234",
    place: {
        place: "davanagere",
        phone: 883723
    },
    skils: ["java", "sql", "html", "mern"],
    about: function () {
        console.log("i am a mern developer");
    }
}
delete (emp.ename)
console.log(emp);
emp.ename = "santhosh kumar jr";
console.log(emp);
