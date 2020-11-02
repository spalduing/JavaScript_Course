// JS Objets

/////Js Objects initialization////

// let student = {
//   usn: "114",
//   firstName: "Miguel",
//   lastName: "Diaz",
//   greet: function () {
//     return "Hello guys";
//   },
//   subjects : ["Web Dev", "AI", "blockchain"]
// };

// console.log("Output is: ", student.greet());
// console.log("Output is: ", student.firstName);
// console.log("Output is: ", student.subjects[2]);



////JS Objects constructor////

// let myLaptop = new Object();

// myLaptop.brand = "Dell";
// myLaptop.cores = 8;
// myLaptop["storage"] = "2TB";

// console.log(
//   "My laptop info: ",
//   myLaptop.brand,
//   ", Cores: ",
//   myLaptop["cores"],
//   ", Storage: ",
//   myLaptop.storage,
//   ", screen resolution: ",
//   myLaptop.screenResolution // This property/atribute is undefined
// );


///Object.create()////

// const occupation = {
//   type : "none",
//   displayType : function(){
//     console.log(this.type);
//   }
// };

// //police


// let police = Object.create(occupation);

// police.type = "police";


// police.displayType();


///Object.assing()////

// cloning

// let student = {
//   name : "Miguel",
//   age: 21
// };


// let tutor = { };

// tutor = Object.assign({}, student);

// console.log("Student's name: ", student.name, "\t Tutor's name: ", tutor.name);


// appending

// let student = {
//   name : "Miguel",
//   age: 21
// };

// let skills = {
//   languages : "Python, JavaScript",
//   experience : 3
// }

// student = Object.assign({}, student, skills);

// console.log("Student: ", student, "\t Skills: ", skills);


// merging

// let student = {
//   name : "Miguel",
//   age: 21
// };

// let skills = {
//   languages : "Python, JavaScript",
//   experience : 3
// };

// let hobbies = {
//   hobby1 : "Book reading"
// };

// // student = Object.assign({}, student, skills, hobbies);
// Object.assign(student, student, skills, hobbies);

// console.log("Student: ", student, "\t Skills: ", skills, "\t Hobbies: ", hobbies);


// delete properties

let demoObj = new Object;
demoObj.a = 10;
demoObj.b = 20;

console.log(demoObj);

delete demoObj.b;

console.log(demoObj);