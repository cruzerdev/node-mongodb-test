db.student.insert({
  name:"Devanshu Gupta",
  age:21,
  subject:["CSE 526","INT 411"],
  dept:"CSE"
});
var studentData=
[
  {
    name:"Hari K",
    age:17,
    city:"Kerala",
    dept:"AGR",
    contact:9592327893
  },
  {
    name:"Rahman MK",
    age:19,
    city:"Nilambur",
    dept:"AGR I",
    contact:836002760
  }
]
db.student.insert({
  name:"Akash Sharma",
  age:23,
  subject:["CSE 526","INT 411"],
  dept:"CSE"
});
db.student.insert(studentData);
