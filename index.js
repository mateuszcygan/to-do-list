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
    let warning = document.querySelector(".alert-error");
    console.log(warning);
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
