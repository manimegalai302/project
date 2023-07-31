let container = document.querySelector("#display");
let title = document.querySelector("#title");
let content = document.querySelector("#content");
let nodeList = document.createElement("li");
let submitBtn = document.querySelector("#submit");
let form = document.getElementById("notesForm");
let array = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value1 = title.value;

  let heading = document.createElement("h4");
  heading.textContent = value1;

  nodeList.appendChild(heading);

  const value2 = content.value;
  let para = document.createElement("p");

  para.textContent = value2;

  nodeList.appendChild(para);

  const obj = { title: value1, des: value2 };
  console.log(obj);

  array.push(obj);
  // console.log(array);

  var del = document.createElement("BUTTON");
  del.innerHTML = "delete";
  nodeList.appendChild(del);

  del.addEventListener("click", () => {
    nodeList.removeChild(heading);
    nodeList.removeChild(para);
    nodeList.removeChild(del);
    nodeList.removeChild(edit);
  });

  var edit = document.createElement("BUTTON");
  edit.innerHTML = "edit";
  nodeList.appendChild(edit);
  edit.addEventListener("click", () => {
    title.value = obj.title;
    content.value = obj.des;

    // submitBtn.innerHTML="update";

    nodeList.removeChild(heading);
    nodeList.removeChild(para);
    nodeList.removeChild(del);
    nodeList.removeChild(edit);
  });

  title.value = ""; //reset title
  content.value = ""; //reset content
});

container.appendChild(nodeList);
