//function that creates id (1, 2, 3 ...)
let incrementID = (function (n) {
  return function () {
    n += 1;
    return n;
  };
})(0);

let createLabel = (input) => {
  let integerID = incrementID();
  let stringID = integerID.toString();
  console.log(integerID);

  let label = document.createElement("label");
  label.innerText = input;
  label.id = stringID;
  return label;
};

function crossOut(label) {
  label.setAttribute("style", "text-decoration: line-through");
  console.log(label);
}

let cancelCrossOut = (label) => {
  label.removeAttribute("style");
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

let hideToDoList = () => {
  let title = document.getElementById("title");
  let searchBox = document.getElementById("main");
  let tasksToDo = document.getElementById("my-tasks");
  let tasksDone = document.getElementById("done");
  let divWrapper = document.getElementById("wrapper");
  let divShade = document.getElementById("shade");
  let divImageStack = document.getElementById("image-stack");
  title.style.display = "none";
  searchBox.style.display = "none";
  tasksToDo.style.display = "none";
  tasksDone.style.display = "none";
  divWrapper.style.display = "none";
  divShade.style.display = "none";
  divImageStack.style.display = "none";
};

//array with tasks-text that user entered
const tasks = [];

function addNewToDoTask() {
  //get a list with tasks to do and value of the input in input field
  let ul = document.getElementById("list-to-do");
  let input = document.getElementById("search-box").value;
  console.log(input);
  console.log(tasks);

  if (containsOnlyWhiteSpaces(input)) {
    //get all elements from the webpage (empty input => only warning pop-up visible)
    hideToDoList();
    let warning = document.querySelector(".alert-error");

    // let title = document.getElementById("title");
    // let searchBox = document.getElementById("main");
    // let tasksToDo = document.getElementById("my-tasks");
    // let tasksDone = document.getElementById("done");
    // let divWrapper = document.getElementById("wrapper");
    // let divShade = document.getElementById("shade");
    // let divImageStack = document.getElementById("image-stack");

    warning.style.display = "flex";
    // document.body.style.display = "flex";
    // document.body.style.justifyContent = "center";
    // document.body.style.alignItems = "center";
    // warning.style.alignItems = "center";

    // console.log("Height: ", document.body.style.height);

    // title.style.display = "none";
    // searchBox.style.display = "none";
    // tasksToDo.style.display = "none";
    // tasksDone.style.display = "none";
    // divWrapper.style.display = "none";
    // divShade.style.display = "none";
    // divImageStack.style.display = "none";
  } else {
    tasks.forEach((element) => {
      if (element == input) {
        console.log("Duplicate!");
        let warning = document.querySelector(".alert-warning");
        warning.style.display = "flex";
        hideToDoList();
      }
    });
    tasks.push(input);
    let taskListElement = document.createElement("li");
    let taskLabel = createLabel(input);

    //create elements needed for checkbox
    let inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.addEventListener("change", function () {
      let checked = inputCheckbox.checked;
      //first is the checkbox changed and then the function executed
      if (checked) {
        crossOut(inputCheckbox.parentElement);
      } else {
        cancelCrossOut(inputCheckbox.parentElement);
      }
    });

    let taskSpan = document.createElement("span");
    taskSpan.class = "checkmark";

    let checkboxElements = [inputCheckbox, taskSpan];

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
  document.getElementById("wrapper").style.removeProperty("display");
  document.getElementById("shade").style.removeProperty("display");
  document.getElementById("image-stack").style.removeProperty("display");
};
