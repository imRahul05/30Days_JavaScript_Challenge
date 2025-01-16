const input = document.getElementById("todo-input");
const addbtn = document.getElementById("add-btn");
const tododis = document.getElementById("todo-list")
const arr = [];

const filterButtons = document.getElementById("filter-buttons");
const totalTasksCounter = document.getElementById("total-tasks");
const completedTasksCounter = document.getElementById("completed-tasks-count");
const incompleteTasksCounter = document.getElementById("incomplete-tasks-count");

filterButtons.addEventListener("click", (e) => {
    if (e.target.id === "all-tasks") {
        display();
    } else if (e.target.id === "completed-tasks") {
        display("completed");
    } else if (e.target.id === "incomplete-tasks") {
        display("incomplete");
    }
});

addbtn.addEventListener("click", add);

function updateCounters() {
    const totalTasks = arr.length;
    const completedTasks = arr.filter(task => task.completed).length;
    const incompleteTasks = totalTasks - completedTasks;

    totalTasksCounter.textContent = totalTasks;
    completedTasksCounter.textContent = completedTasks;
    incompleteTasksCounter.textContent = incompleteTasks;
}

function add() {
    if (input.value == "") {
        alert("Please enter a task....");
    } else {
        arr.push({ text: input.value, completed: false });
        input.value = "";
        display();
    }
}

function display(filter = "all") {
    tododis.innerHTML = '';
    arr.forEach((task, i) => {
        if (filter === "completed" && !task.completed) return;
        if (filter === "incomplete" && task.completed) return;

        const li = document.createElement("li");
        li.className = "todo-item";

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "check";
        checkBox.checked = task.completed;
        checkBox.addEventListener("click", () => toggleCompletion(i));

        const taskText = document.createElement("span");
        taskText.className = "todo-text";
        taskText.innerHTML = task.text;
        if (task.completed) taskText.classList.add("strike");

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
    updateCounters();
}

function del(i) {
    arr.splice(i, 1);
    display();
}

function edit(i) {
    const nwtask = prompt("Enter task");
    arr[i].text = nwtask;
    display();
}

function toggleCompletion(i) {
    arr[i].completed = !arr[i].completed;
    display();
}

document.getElementById("sort-tasks").addEventListener("click", () => {
    arr.sort((a, b) => a.text.localeCompare(b.text));
    display();
});
