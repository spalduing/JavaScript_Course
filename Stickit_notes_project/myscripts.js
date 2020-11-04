// function buttonClicked() {
//   alert("The button is clicked!");
// }

// document.getElementById("test").addEventListener("click", buttonClicked);

document.getElementById("btnSubmit").addEventListener("click", function (e) {
    e.preventDefault();
  });

document.getElementById("btnSubmit").addEventListener("click", function (e) {
  console.log(e.target.type);
});

document.getElementById("btnSubmit").addEventListener("click", function (e) {
  console.log(`(${e.clientX}, ${e.clientY})`);
});

document.getElementById("btnSubmit").addEventListener("click", function (e) {
  console.log(e.shiftKey);
});


