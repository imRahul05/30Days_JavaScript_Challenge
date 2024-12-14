const input = document.getElementById("todo-input");
const addbtn = document.getElementById("add-btn");
const tododis = document.getElementById("todo-list")
const arr = [];

addbtn.addEventListener("click", add);

function add() {
    if (input.value == "")
        alert("Please enter a task....");
    else {
        arr.push(input.value);
        input.value = ""
        display();
    }
}

function display() {
    tododis.innerHTML = ''
    arr.forEach((task, i) => {
        const li = document.createElement("li");
        li.className = "todo-item";

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "check";
        checkBox.addEventListener("click", () => strike(i));

        const taskText = document.createElement("span");
        taskText.className = "todo-text";
        taskText.innerHTML = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "btn btn-danger";
        deleteBtn.addEventListener("click", () => del(i));

        const editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.className = "btn btn-warning";
        editBtn.addEventListener("click", () => edit(i));

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "todo-buttons";
        buttonContainer.appendChild(editBtn);
        buttonContainer.appendChild(deleteBtn);

        li.appendChild(checkBox);
        li.appendChild(taskText);
        li.appendChild(buttonContainer);

        tododis.appendChild(li);
    });
}

function del(i) {
    arr.splice(i, 1)
    display();
}

function edit(i) {
    const nwtask = prompt("Enter task");
    arr[i] = nwtask
    display();
}

function strike(i) {
    const li = document.querySelectorAll("li")[i];
    li.classList.toggle("strike");
    arr[i] = li.classList.contains("strike") ? `~~${arr[i]}~~` : arr[i].replace(/~~/g, '');
}
