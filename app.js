let title = document.querySelector("#title");
let content = document.querySelector("#content");
let unOrderList = document.createElement("ul");

let submitBtn = document.querySelector("#submit");
let form = document.getElementById("notesForm");
let notes = [];

window.onload = () => {
  notes = JSON.parse(localStorage.getItem('notes')) || []; 
  display(); 
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value1 = title.value;
  const value2 = content.value;

  if (submitBtn.innerHTML !== "update") {
    const obj = { title: value1, content: value2 };
    notes.push(obj);
  } else {
  
    submitBtn.innerHTML = "submit";
  }

 
  localStorage.setItem('notes', JSON.stringify(notes));

  display();
  title.value = ""; // Reset title
  content.value = ""; // Reset content
});

function display() {
  let container = document.querySelector("#display");
  container.innerHTML = ''; 

  notes.forEach((note, index) => {
    let nodeList = document.createElement("li");

    let heading = document.createElement("h4");
    heading.textContent = note.title;
    nodeList.appendChild(heading);

    let para = document.createElement("p");
    para.textContent = note.content;
    nodeList.appendChild(para);

    var del = document.createElement("BUTTON");
    del.innerHTML = "delete";
    nodeList.appendChild(del);

    del.addEventListener("click", () => {
      notes.splice(index, 1);
      
      localStorage.setItem('notes', JSON.stringify(notes));
      display(); 
    });

    var edit = document.createElement("BUTTON");
    edit.innerHTML = "edit";
    nodeList.appendChild(edit);

    edit.addEventListener("click", () => {
      title.value = note.title;
      content.value = note.content;
      submitBtn.innerHTML = "update";
 
      nodeList.removeChild(heading);
     nodeList.removeChild(para);
     nodeList.removeChild(del);
     nodeList.removeChild(edit);
    });

    container.appendChild(nodeList);
  });
}
