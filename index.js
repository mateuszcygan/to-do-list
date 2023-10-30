let createLabel = (input) => {
  let label = document.createElement("label");
  label.innerText = input;
  return label;
};

let createCheckbox = (label, neededElements) => {
  for (let i = 0; i < neededElements.length; i++) {
    label.appendChild(neededElements[i]);
  }
  return label;
};

function containsOnlyWhiteSpaces(str) {
  return !str.replace(/\s/g, "").length;
}

function addNewToDoTask() {
  //get a list with tasks to do and value of the input in input field
  let ul = document.getElementById("list-to-do");
  let input = document.getElementById("search-box").value;

  if (containsOnlyWhiteSpaces(input)) {
    //get all elements from the webpage (empty input => only warning pop-up visible)
    let warning = document.querySelector(".alert-error");
    let title = document.getElementById("title");
    let searchBox = document.getElementById("main");
    let tasksToDo = document.getElementById("my-tasks");
    let tasksDone = document.getElementById("done");

    warning.style.display = "flex";
    // document.body.style.display = "flex";
    // document.body.style.justifyContent = "center";
    // document.body.style.alignItems = "center";
    // warning.style.alignItems = "center";

    // console.log("Height: ", document.body.style.height);
    title.style.display = "none";
    searchBox.style.display = "none";
    tasksToDo.style.display = "none";
    tasksDone.style.display = "none";
  } else {
    let taskListElement = document.createElement("li");
    let taskLabel = createLabel(input);

    //create elements needed for checkbox
    let taskInput = document.createElement("input");
    taskInput.type = "checkbox";

    let taskSpan = document.createElement("span");
    taskSpan.class = "checkmark";

    let checkboxElements = [taskInput, taskSpan];

    taskLabel = createCheckbox(taskLabel, checkboxElements);

    taskListElement.appendChild(taskLabel);
    ul.appendChild(taskListElement);
  }
}

let confirmEmptyInput = () => {
  document.querySelector(".alert-error").style.display = "none";
  document.getElementById("title").style.removeProperty("display");
  document.getElementById("main").style.removeProperty("display");
  document.getElementById("my-tasks").style.removeProperty("display");
  document.getElementById("done").style.removeProperty("display");
};
