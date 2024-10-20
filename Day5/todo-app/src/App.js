import { useState } from "react";
import TodoInput from "./TodoInput";

function App() {
  const [TodoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addList = (inputText) => {
    setTodoList([...TodoList, inputText]);
  };

  const updateTodo = (index, newText) => {
    const updatedTodos = TodoList.map((todo, i) =>
      i === index ? newText : todo
    );
    setTodoList(updatedTodos);
    setIsEditing(false);
    setCurrentTodo(null);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = TodoList.filter((_, i) => i !== index);
    setTodoList(newTodos);
  };

  const handleEditTodo = (index) => {
    setIsEditing(true);
    setCurrentTodo({ index, text: TodoList[index] });
  };

  return (
    <>
      <h1 className="text-center text-3xl p-4">Todo APP</h1>
      <TodoInput
        addList={addList}
        isEditing={isEditing}
        currentTodo={currentTodo}
        updateTodo={updateTodo}
      />
      <ul className="list-disc list-inside">
        {TodoList.map((todo, index) => (
          <li key={index} className="p-2 border-b border-gray-300 flex justify-between items-center">
            {todo}
            <div>
              <button
                className="bg-yellow-500 text-white p-2 rounded mr-2"
                onClick={() => handleEditTodo(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

    </>
  );
}

export default App;

