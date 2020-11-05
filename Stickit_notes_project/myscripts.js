// function buttonClicked() {
//   alert("The button is clicked!");
// }

// document.getElementById("test").addEventListener("click", buttonClicked);

// document.getElementById("btnSubmit").addEventListener("click", function (e) {
//     e.preventDefault();
//   });

// document.getElementById("btnSubmit").addEventListener("click", function (e) {
//   console.log(e.target.type);
// });

// document.getElementById("btnSubmit").addEventListener("click", function (e) {
//   console.log(`(${e.clientX}, ${e.clientY})`);
// });

// document.getElementById("btnSubmit").addEventListener("click", function (e) {
//   console.log(e.shiftKey);
// });

function* noteCount() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

function createUL() {
  let ulTag = document.createElement("ul");
  let liTag = document.createElement("li");
  ulTag.id = "notes";
  liTag.id = "notes-list";
  ulTag.appendChild(liTag);
}

let count = 0;
function createNote(noteTitle, noteBody) {
  count += 1;
  document.getElementById("no-notes").classList.add("hidden");

  if (document.getElementById("notes") == null) {
    createUL();
  }
  let liTag = document.getElementById("notes-list");

  let aTag = document.createElement("a");
  let h2Tag = document.createElement("h2");
  let btnTag = document.createElement("button");
  let pTag = document.createElement("p");

  let currentRef = 1;
  aTag.id = currentRef.toString();

  btnTag.className = "delete";
  btnTag.innerHTML = "X";
  h2Tag.innerHTML = noteTitle;
  pTag.innerHTML = noteBody;

  aTag.appendChild(h2Tag);
  aTag.appendChild(btnTag);
  aTag.appendChild(pTag);

  let lastNote = document.querySelector("a:last-child");

  if (lastNote == null) {
    liTag.appendChild(aTag);
    liTag.insertAdjacentElement("afterbegin", aTag);
  } else {
    liTag.appendChild(aTag);
    lastNote.insertAdjacentElement("afterend", aTag);
  }
}

function createNoteFromInput(e) {
  e.preventDefault();

  let noteTitle = document.getElementById("new-note-title-input").value;
  let noteBody = document.getElementById("new-note-body-input").value;

  document.getElementById("new-note-title-input").value = "";
  document.getElementById("new-note-body-input").value = "";

  createNote(noteTitle, noteBody);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you wanna delete this note?")) {
      let aTag = e.target.parentElement;
      let liTag = e.target.parentElement.parentElement;
      liTag.removeChild(aTag);
    }
  }

  count -= 1;
  if (count < 1) {
    document.getElementById("no-notes").className = "";
  }
}

document
  .getElementById("inputForm")
  .addEventListener("submit", createNoteFromInput, false);

document.getElementById("notes").addEventListener("click", removeItem, false);
