
//  function UserCard2(){
//     return (
//         <>
//        <div className='card'>
//        <img className="image" alt='image' src='https://placehold.co/300x200'/>
//        <h3>Rahul</h3>
//        <p>abc@gmail.com</p>

//        </div>
//         </>
//     )
//  }
//  function UserCard3(){
//     return (
//         <>
//        <div className='card'>
//        <img className="image" alt='image' src='https://placehold.co/300x200'/>
//        <h3>Rahul</h3>
//        <p>abc@gmail.com</p>

//        </div>
//         </>
//     )
//  }
function UserCard(props){
    const {imgSrc,name,email}=props.userDetails
    return (
        <>
       <div className='card'>
       <img className="image" alt='image' src={imgSrc}/>
       <h3>{name}</h3>
       <p>{email}</p>

       </div>
        </>
    )
 }
const users=[
    {
      imgSrc:'https://placehold.co/300x200',
      name:'rahul',
      email:'rahul@gmail.com'
    },
    {
        imgSrc:'https://placehold.co/300x200',
        name:'jerry',
        email:'jerry@gmail.com'
    },
    {
      imgSrc:'https://placehold.co/300x200',
      name:'john',
      email:'john@gmail.com'
    }
]

function App(){
    return(
        <>
       <div className='main'>
        {users.map((user)=>(
         <UserCard  userDetails={user}/>
        ))}
       </div>
        </>
    )
 }
 ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
//  function App(){
//     return(
//         <>
//        <div className='main'>
//         {users.map((user)=>(
//          <UserCard imgSrc={user.imgSrc} name={user.name} email={user.email}/>
//         ))}
//        </div>
//         </>
//     )
//  }
//  ReactDOM.createRoot(document.getElementById('root')).render(<App/>)


