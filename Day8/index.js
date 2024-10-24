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