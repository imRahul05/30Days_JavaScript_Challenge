
// const div =  document.getElementById('root')
// const head = document.createElement('h1')
// head.textContent='Hello World'
// div.appendChild(head)




//Declarative and imperative

// console.log(React)
// let name = React.createElement('h1',null,'Hi Rahul!!')
// let root = ReactDOM.createRoot(document.getElementById('root')).render(name)

//React original  without babel

// let txt = React.createElement('div',{id:'rk'},[
//     React.createElement('h1',null,'Hello'),
//     React.createElement('h2',null,'Rahul!!')
// ])


// let root = ReactDOM.createRoot(document.getElementById('root')).render(txt)



//WITH babel React

//JSX javascript XML

// let head = (<h1>Hello Rahul</h1>)
// let root = ReactDOM.createRoot(document.getElementById('root')).render(head)
{/* <></>  Fragments because it won't take space */}


// const user = {
//     imageUrl: 'https://www.w3schools.com/dsa/img_linkedlists_singly.svg',
//     name: 'Jane Doe',
//     bio: 'Software Engineer with 5 years of experience in web applications.',
//     email: 'jane.doe@example.com',
//     phone: '+1234567890',
//     subsribed:true
//   };


// const User = ()=>{
//     return   (
    
//         <>
//           <img src={user.imageUrl}></img>
//           <h1>{user.name}</h1>
//           <p>{user.bio}</p>
//           <p>{user.email}</p>
//           <p>{user.phone}</p>
//           <p>{user.subsribed}</p>
//         </>
//     )
// }

// const Navbar =()=>{
//     return (
//         <nav>
//             <div class="left">
//                 <title>My React title</title>
//             </div>
//             <div class="right">

//             </div>
//         </nav>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<User/>)
// const button = <button onclick={() => alert("Clicked!")}>Click Me</button>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
const list = ["Apple", "Banana", "Cherry"];
const element = (
  <ul>
    {list.map(item => (
      <li>{item}</li>
    ))}
  </ul>
);
ReactDOM.createRoot(document.getElementById("root")).render(element);
