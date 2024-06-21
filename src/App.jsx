import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram,faFacebook,faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';


function App() {
  

  return (
    <>
<header className="p-6 top-0 z-10 sticky">
  
    <section className="max-w-7xl mx-auto p-8   flex justify-between items-center">
      
      <h1 ><a href='/' className='text-[58px]'>HauteHex</a></h1>

      <div className="flex justify-between items-center gap-3 sm:hidden">

      <a href="/user" className="text-2xl"><FontAwesomeIcon icon={faUser} /></a>

        <a href="/basket" className="text-2xl"><FontAwesomeIcon icon={faCartShopping} /></a>
        
        <button id="mobile-hamburger" className="text-2xl sm:hidden">
        <FontAwesomeIcon icon={faBars}  /></button>
        
      </div>

      <div className='sm:flex flex-row gap-1 py-4 px-8 hidden'>
        <input type="text" placeholder='Search' className='px-6 py-3 border-2 sm:hidden lg:flex rounded border-[#e1e2ea]'></input>
        <select name="searchcategory" id="category" className='px-6 py-3 border-2 sm:hidden lg:flex rounded border-[#e1e2ea]'><option value="All">All</option><option value="Off">Off</option><option value="On">On</option></select>
        <button className="button-std sm:flex"><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      
      <div className="sm:flex hidden gap-11 p-4 items-center">
          <a href="/login" className=" text-base font-bold text-mainSpace-blue" >Login</a>
          <button href="/register" className='button-std min-w-56 '>Become a member</button>
      </div>
      
    
     </section>

      <div className='flex flex-col sm:hidden gap-1 mt-10 '>
        <input type="text" placeholder='Search' className='px-6 py-3 border-2  rounded border-[#e1e2ea]'></input>
        <select name="searchcategory" id="category" className='px-6 py-3 border-2  rounded border-[#e1e2ea]'><option value="All">All</option><option value="Off">Off</option><option value="On">On</option></select>
        <button className="button-std "><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      
      <nav className="sm:flex gap-4 hidden ">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/blog">Contact</a>
      </nav>
</header>
<body>


  
</body>

<footer className="sm:w-full flex flex-col ">
    <section className="flex flex-wrap justify-between my-0 gap-8 py-20 p-48 ">
      <div className='gap-3'>
        <h3 className='min-w-max' >Get In Touch</h3>
        <p className=" text-textPapayas-black text-sm min-w-max  ">
            the quick fox jumps over the <span className="block text-mainSpace-blue">lazy dog</span>
        </p>

        <nav className="flex flex-row gap-3" aria-label="footer-nav">
          <a href="/pages" className='text-2xl'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="/pages" className='text-2xl'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/pages" className='text-2xl'>
            <FontAwesomeIcon icon={faSquareXTwitter} />
          </a>
        </nav>
      </div>
        
      <nav className="flex flex-col items-start gap-3" aria-label="footer-nav">
        <h3 className='min-w-max'>Company Info</h3>
        <a href="/pages">About Us</a>
        <a href="/pages">Carrier</a>
        <a href="/pages">We are hiring</a>
        <a href="/pages">Blog</a>
      </nav>
       
      <nav className="flex flex-col items-start gap-3" aria-label="footer-nav">
        <h3 >Features</h3>
        <a>Business Marketing</a>
        <a>User Analytic</a>
        <a>Live Chat</a>
        <a href='tel:444 0 444' >Unlimited Support</a>
      </nav>

      <nav className="flex flex-col items-start gap-3" aria-label="footer-nav">
        <h3 >Resources</h3>
        <a>IOS & Android</a>
        <a>Watch a Demo</a>
        <a>Customers</a>
        <a>API</a>
      </nav>

    </section>

    <div className="min-w-full bg-[#FAFAFA] pb-6">
      <h6>Made With Love By Finland All Right Reserved</h6>
    </div>

 </footer>
    </>
  )
}

export default App
