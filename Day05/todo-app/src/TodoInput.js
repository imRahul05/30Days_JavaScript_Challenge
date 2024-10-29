import { useEffect, useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  useEffect(()=>{
    if(props.isEditing && props.currentTodo){
      setInputText(props.currentTodo.text);
    }
  },[props.isEditing, props.currentTodo]);

  const handleAddOrUpdate = () => {
    if(props.isEditing){
      props.updateTodo(props.currentTodo.index, inputText);
    }else{
      props.addList(inputText);
    }
    setInputText("");
  };
  return (
    <div className="flex justify-center">
      <input
        type="text"
        class="border-2 border-gray-300 p-2"
        placeholder="Enter the Todo name.. "
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
      />
      <button
        className="bg-blue-500 text-white p-4 rounded"
        onClick={handleAddOrUpdate}  >
        {props.isEditing ? "Update" : "Add"}
      </button>
    </div>
  );
}
export default TodoInput;
