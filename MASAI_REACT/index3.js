//NORMAL way to or brute way to do it


// function Counter(){
//     let count=0
//     function increment(){
//         count++
//         document.getElementById('count').innerText = 'Counter :' + count
//     }

//     function decrement(){
//         count--
//         document.getElementById('count').innerText='Counter :' + count

        
//     }
//     return(
//         <div>
//             <h1 id='count'>Counter : {count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)



// USING hooks

// function Counter(){
//    const [count,setCount]=React.useState(100)
//     function increment(){
//         setCount(count+1)
//     }

//     function decrement(){
//         setCount(count-1)
        
//     }
//     return(
//         <div>
//             <h1 id='count'>Counter : {count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)


// function Log(){
//     const [log, setLog] = React.useState(false)
//     const [status, setStatus] = React.useState('Login')
//     function login() {
//         if (!log) {
//             setLog(true)
//             setStatus('Log out')
//         } else {
//             setLog(false)
//             setStatus('Log in')
//         }
//     }

//     return (
//         <div>
//             <h1 id='count'>{status}</h1>
//             <button onClick={login}>{status}</button>
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Log/>)


// function Log(){
   
//     const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    
//     function login() {
//         setIsLoggedIn(!isLoggedIn)
//         }
//     return (
//         <div>
//             <h1>{isLoggedIn?"logged In":"Logged out"}</h1>
//             <button onClick={login}>{isLoggedIn?'Logout':'LogIn'}</button>
//         </div>
//     )
// }


// ReactDOM.createRoot(document.getElementById('root')).render(<Log/>)
// function ItemRemover() {
//     const [items, setItems] = React.useState(["A", "B", "C"]);
  
//     function removeFirstItem() {
//       items.shift();
//       setItems(items);
//     }
  
//     return (
//       <ul>
//         {items.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     );
//   }
// function Welcome() {
//     const [name, setName] = React.useState();
  
//     return <h1>Welcome, {name || "Guest"}!</h1>;
//   }
  
function Counter() {
    const [count, setCount] = React.useState(0);
  
    function increment() {
      setCount(count + 1);
      console.log(count);
    }
  
    return <button onClick={increment}>Count: {count}</button>;
  }
  
  
ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)
console.log(ReactDOM.createRoot(document.getElementById('root')));