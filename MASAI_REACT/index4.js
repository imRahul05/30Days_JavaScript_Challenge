

function PricingTable() {
  return (
    <div className='main'>
      <div className="header">
        <h1>
          The Right Plan for <br/> <span>Your Business</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod
          in iure vero. Facilis magnam, sed officiis commodi labore odit.
        </p>
      </div>
      <div className="pricing-container">
        <div className="pricing-card">
          <h3>Starter</h3>
          <ul>
            <li>✔ 1 lorem ipsum</li>
            <li>✔ Lorem, ipsum dolor.</li>
            <li>✔ Monthly Updates</li>
          </ul>
          <h2>Free</h2>
          <button>Get Started</button>
        </div>
        <div className="pricing-card premium">
          <h3>Lorem Plus</h3>
          <ul>
            <li>✔ 1 lorem ipsum</li>
            <li>✔ Lorem, ipsum dolor.</li>
            <li>✔ Monthly Updates</li>
          </ul>
          <h2>$32.00</h2>
          <button>Get Started</button>
        </div>
        <div className="pricing-card">
          <h3>Lorem Pro</h3>
          <ul>
            <li>✔ 1 lorem ipsum</li>
            <li>✔ Lorem, ipsum dolor.</li>
            <li>✔ Monthly Updates</li>
          </ul>
          <h2>$50.00</h2>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

















function PricingCard(props) {
    const { title, price, isPremium } = props.planDetails
    return (
        <div className={`pricing-card ${isPremium ? 'premium' : ''}`}>
            <h3>{title}</h3>
            <ul>
                <li>✔ 1 lorem ipsum</li>
                <li>✔ Lorem, ipsum dolor.</li>
                <li>✔ Monthly Updates</li>
            </ul>
            <h2>{price}</h2>
            <button>Get Started</button>
        </div>
    )
}

const plans = [
    {
        title: 'Starter',
        price: 'Free',
        isPremium: false
    },
    {
        title: 'Lorem Plus',
        price: '$32.00',
        isPremium: true
    },
    {
        title: 'Lorem Pro',
        price: '$50.00',
        isPremium: false
    }
]

function App() {
    return (
        <div className='main'>
            <div className="header">
                <h1>
                    The Right Plan for <br /> <span>Your Business</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod
                    in iure vero. Facilis magnam, sed officiis commodi labore odit.
                </p>
            </div>
            <div className="pricing-container">
                {plans.map((plan, index) => (
                    <PricingCard key={index} planDetails={plan} />
                ))}
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);













function UserFrom(){
    const [name,setName] = React.useState('')
    const [email,setEmail]=React.useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,email)
    }
    return (
       <div>
        <input onChange={(e)=>setName(e.target.value)} type='text'   placeholder='Enter name' />
        <input onChange={(e)=>setEmail(e.target.value)} type='email'   placeholder='Enter mail' />
        <input  type='submit'/>
        
       </div >
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<UserFrom/>);


function UserFrom(){
    const [name,setName] = React.useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,email)
    }
    return (
       <div>
        <input onChange={(e)=>setName(e.target.value)} type='text'   placeholder='Enter name' />
        <input onChange={(e)=>setEmail(e.target.value)} type='email'   placeholder='Enter mail' />
        <input  type='submit'/>
        
       </div >
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<UserFrom/>);