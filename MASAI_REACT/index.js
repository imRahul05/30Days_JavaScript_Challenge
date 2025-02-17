
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

// const button = <button onclick={() => alert("Clicked!")}>Click Me</button>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const list = ["Apple", "Banana", "Cherry"];
// const element = (
//   <ul>
//     {list.map(item => (
//       <li>{item}</li>
//     ))}
//   </ul>
// );
// ReactDOM.createRoot(document.getElementById("root")).render(element);
const Navbar =()=>{
    return (
        <nav>
            <div className="left">
                <h2>My React title</h2>
            </div>
            <div className="right">
             <ul>
                <li>HOME</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Blog</li>
             </ul>
            </div>
        </nav>
    )
}

const Main = () => {
    return (
        <div className="main">
            <h1>Welcome to the main Page.</h1>
            <p>This is the main content area where you can add more information about your website.</p>
            <section>
                <h2>Section 1</h2>
                <p>Details about section 1.</p>
            </section>
            <section>
                <h2>Section 2</h2>
                <p>Details about section 2.</p>
            </section>
            <section>
                <h2>Section 3</h2>
                <p>Details about section 3.</p>
            </section>
        </div>
    );
}


const Footer =()=>{
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2025 My Website. All rights reserved.</p>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    )
}

function  App(){
    return (
        <>
        <Navbar/>
        <Main/>
        <Footer/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
