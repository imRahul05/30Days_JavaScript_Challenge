class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       
        <style>
        nav{
        display: flex;
        justify-content: space-around;
        align-items:center;
        background-color: rgb(55, 97, 98);
        height: 70px;
        
        }
        nav ul{
        display: flex;
        justify-content: center;
        }
        nav ul li{
        list-style: none;
        margin: 0 23px;
        }
        nav  ul li a{
        text-decoration: none;
        color: white;
        }
        nav ul li a:hover{
        color:lavender;
        font-size: 1.03rem;
        }
        
        </style>
    <nav>
        <div class="left"> WEB HOMEPAGE </div>
        <div class="right">
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="cart.html">Cart</a></li>
         </ul>
        </div>
    </nav>`;
  }
}



class SpecialFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML=`
    <style>
      footer {
    padding: 20px;
    background-color: rgb(55, 97, 98);
    align-items:center;
    justify-content:center;

     }
    footer p {
    margin: 0;
    font-size: 0.9em;
    align-items:center
    }
    </style>
    <footer>

     <div class="footer-content">
      <p>
        Created by Rahul Kumar | Acharya Institute of Technology, Bangalore,
        Karnataka, India | Mob: +91 9572280546
      </p></div>
      
    </footer>`
  }
}
customElements.define('special-footer',SpecialFooter)
customElements.define("special-header", SpecialHeader);
