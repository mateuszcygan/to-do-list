//function that creates id (1, 2, 3 ...)
let incrementID = (function (n) {
  return function () {
    console.log("Test");
    n += 1;
    return n;
  };
})(0);

let createLabel = (input) => {
  let integerID = incrementID();
  let stringID = integerID.toString();
  // console.log(integerID);

  let label = document.createElement("label");
  label.innerText = input;
  label.id = stringID;
  return label;
};

function crossOut(label) {
  label.setAttribute(
    "style",
    "text-decoration: line-through; color: rgb(211, 211, 211)"
  );
  // console.log(label);
}

let cancelCrossOut = (label) => {
  label.removeAttribute("style");
};

let createLabelWithCheckbox = (label, neededElements) => {
  for (let i = 0; i < neededElements.length; i++) {
    label.appendChild(neededElements[i]);
  }
  return label;
};

function containsOnlyWhiteSpaces(str) {
  return !str.replace(/\s/g, "").length;
}

function changeList(task, checked) {
  let tasksDoneList = document.querySelector("#list-done");

  if (checked) {
    tasksDoneList.appendChild(task);
  } else {
    tasksDoneList.removeChild(task);
  }
}

function addNewToDoTask() {
  //get a list with tasks to do and value of the input in input field
  let listToDo = document.getElementById("list-to-do");
  let listDone = document.getElementById("done");

  let input = document.getElementById("search-box").value;

  //create a paragraph that will be displayed in the tasks-done
  let para = document.createElement("p");
  para.textContent = input;
  para.setAttribute("style", "display:none");
  listDone.appendChild(para);

  if (containsOnlyWhiteSpaces(input)) {
    //get all elements from the webpage (empty input => only warning pop-up visible)
    let warning = document.querySelector(".alert-error");
    let title = document.getElementById("title");
    let searchBox = document.getElementById("main");
    let tasksToDo = document.getElementById("my-tasks");
    let tasksDone = document.getElementById("done");
    let divWrapper = document.getElementById("wrapper");
    let divShade = document.getElementById("shade");
    let divImageStack = document.getElementById("image-stack");

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
    divWrapper.style.display = "none";
    divShade.style.display = "none";
    divImageStack.style.display = "none";
  } else {
    //list element structure:
    // <li>
    //   <label id="1">go to the gym
    //      <input type="checkbox">
    //      <span></span>
    //   </label>
    // </li>

    let taskListElement = document.createElement("li");
    let taskLabel = createLabel(input);

    //create elements needed for checkbox
    let inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";

    let taskSpan = document.createElement("span");
    taskSpan.classList.add("checkmark");

    let checkboxElements = [inputCheckbox, taskSpan];

    taskLabel = createLabelWithCheckbox(taskLabel, checkboxElements);

    taskListElement.appendChild(taskLabel);
    listToDo.appendChild(taskListElement);

    //after checking the checkbox, the task is crossed out
    inputCheckbox.addEventListener("change", function () {
      let checked = inputCheckbox.checked;
      //first is the checkbox changed and then the function executed
      if (checked) {
        crossOut(inputCheckbox.parentElement);
        para.removeAttribute("style");
      } else {
        cancelCrossOut(inputCheckbox.parentElement);
        para.setAttribute("style", "display: none");
      }
    });

    //after changing the state of the checkbox, the task toggles between "Tasks to do" and "Tasks done"
    // inputCheckbox.addEventListener("change", function () {
    //   let checked = inputCheckbox.checked;
    //   //after checking the checkbox, the task should appear under "Tasks done"
    //   changeList(taskListElement, checked);
    // });
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
