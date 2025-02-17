function Todo(){
    const [value,setValue] = React.useState('')
    const [todos,setTodos]=React.useState([])

    function handleChange(e){
        setValue(e.target.value)
    }

    function handleAdd(){
        setTodos([...todos,value])
        console.log(todos)
    }

    return (
        <>
        <h1>Todo List</h1>
        <input onChange={handleChange} type='text' placeholder='Enter Task...'/>
        <button onClick={handleAdd}>Add todo</button>
         <div>
            todos.map()
         </div>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<Todo/>)




