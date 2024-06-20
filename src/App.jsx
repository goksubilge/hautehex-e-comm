import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

function App() {
  

  return (

<header className="p-6 top-0 z-10 sticky">
  
    <section className="max-w-7xl mx-auto p-8   flex justify-between items-center">
      
      <h1 ><a href='/' className='text-[58px]'>HauteHex</a></h1>

      <div className="flex justify-between items-center gap-3 sm:hidden">

      <a href="/user" className="text-2xl"><FontAwesomeIcon icon={faUser} /></a>

        <a href="/basket" className="text-2xl"><FontAwesomeIcon icon={faCartShopping} /></a>
        
        <button id="mobile-hamburger" className="text-2xl sm:hidden">
        <FontAwesomeIcon icon={faBars}  /></button>
        
      </div>

      <div className='lg:flex flex-row gap-1 py-4 px-8 hidden '>
        <input type="text" placeholder='Search' className='px-6 py-3 border-2  rounded border-[#e1e2ea]'></input>
        <select name="searchcategory" id="category" className='px-6 py-3 border-2  rounded border-[#e1e2ea]'><option value="All">All</option><option value="Off">Off</option><option value="On">On</option></select>
        <button className="button-std "><FontAwesomeIcon icon={faSearch} /></button>
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

    
  )
}

export default App
