function addNewToDoTask() {
    let ul = document.getElementById("list-to-do");
    let input = document.getElementById("search-box").value;
    let li = document.createElement('li');
    ul.appendChild(li).innerText = input;
}