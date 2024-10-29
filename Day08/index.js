const input = document.getElementById("todo-input");
const addbtn = document.getElementById("add-btn");
const tododis =  document.getElementById("todo-list")
const arr = [];

addbtn.addEventListener("click",add);
 

function add(){
    if(input.value=="")
        alert("Please enter a task....");
    else{
        arr.push(input.value);
        input.value=""
        display();
    }

 }
function display(){
    tododis.innerHTML=''
    arr.forEach((task,i)=>{


       const li = document.createElement("li")
       li.innerHTML= task

       const checkBox = document.createElement("input");
       checkBox.type= "checkbox"
       checkBox.className = "check"
       li.appendChild(checkBox)
       checkBox.addEventListener("click",()=>strike(i))

       const deleteBtn = document.createElement("button")
       deleteBtn.innerHTML = "Delete"
       deleteBtn.className = "btn btn-warning"
       li.appendChild(deleteBtn)
       deleteBtn.addEventListener("click",()=>del(i))
       tododis.appendChild(li)


       const editBtn = document.createElement("button")
       editBtn.innerHTML = "Edit"
       editBtn.className = "btn btn-danger"
       li.appendChild(editBtn)
       editBtn.addEventListener("click",()=>edit(i))

    })
}

function del(i){
    arr.splice(i,1)
   display();
 }

  function edit(i){
     const nwtask = prompt("Enter task");
     arr[i]= nwtask
     display();
  }
function strike(i){
    const li = document.querySelectorAll("li")[i]
    li.classList.toggle("strike")
    display();
}


// const input = document.getElementById("todo-input");
// const addbtn = document.getElementById("add-btn");
// const tododis = document.getElementById("todo-list");

// // Updated array to store task and completion state
// const arr = [];

// addbtn.addEventListener("click", add);

// function add() {
//     if (input.value == "") {
//         alert("Please enter a task....");
//     } else {
//         // Push object with task text and completion state
//         arr.push({ task: input.value, completed: false });
//         input.value = "";
//         display();
//     }
// }

// function display() {
//     tododis.innerHTML = '';
//     arr.forEach((item, i) => {
//         const li = document.createElement("li");

//         // Set task text and apply 'strike' class if completed
//         li.innerHTML = item.task;
//         if (item.completed) {
//             li.classList.add("strike");
//         }

//         // Create checkbox and set it based on the task's completion status
//         const checkBox = document.createElement("input");
//         checkBox.type = "checkbox";
//         checkBox.className = "check";
//         checkBox.checked = item.completed; // Set the checkbox state
//         li.appendChild(checkBox);
//         checkBox.addEventListener("click", () => toggleStrike(checkBox, li, i));

//         const deleteBtn = document.createElement("button");
//         deleteBtn.innerHTML = "Delete";
//         deleteBtn.className = "btn btn-warning";
//         li.appendChild(deleteBtn);
//         deleteBtn.addEventListener("click", () => del(i));
        
//         const editBtn = document.createElement("button");
//         editBtn.innerHTML = "Edit";
//         editBtn.className = "btn btn-danger";
//         li.appendChild(editBtn);
//         editBtn.addEventListener("click", () => edit(i));

//         tododis.appendChild(li);
//     });
// }

// function del(i) {
//     arr.splice(i, 1);
//     display();
// }

// function edit(i) {
//     const nwtask = prompt("Enter task", arr[i].task); // Prepopulate with the current task
//     if (nwtask !== null && nwtask.trim() !== "") { // Ensure the input isn't empty or canceled
//         arr[i].task = nwtask;
//         display();
//     }
// }

// function toggleStrike(checkBox, li, i) {
//     // Toggle the completed state of the task
//     arr[i].completed = checkBox.checked;

//     // Apply or remove the 'strike' class based on the checkbox state
//     if (checkBox.checked) {
//         li.classList.add("strike");
//     } else {
//         li.classList.remove("strike");
//     }
// }
