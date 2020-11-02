// JS Objets

// Js Objects initialization

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

// JS Objects constructor

let myLaptop = new Object();

myLaptop.brand = "Dell";
myLaptop.cores = 8;
myLaptop["storage"] = "2TB";

console.log(
  "My laptop info: ",
  myLaptop.brand,
  ", Cores: ",
  myLaptop["cores"],
  ", Storage: ",
  myLaptop.storage,
  ", screen resolution: ",
  myLaptop.screenResolution // This property/atribute is undefined
);
