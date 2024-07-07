import { Link, NavLink } from "react-router-dom";
import {
  faCartShopping,
  faUser,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="p-6 top-0 z-30 lg:bg-mainSpace-beige">
      <section className="py-8 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-[58px]">HauteHex</h1>
        </Link>

        <div className="flex justify-between items-center gap-3 sm:hidden">
          <Link to="/user">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#4A4E69" }}
              className="text-2xl"
            />
          </Link>
          <Link to="/basket">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#4A4E69" }}
              className="text-2xl"
            />
          </Link>
          <button id="mobile-hamburger" className="text-2xl sm:hidden">
            <FontAwesomeIcon icon={faBars} style={{ color: "#4A4E69" }} />
          </button>
        </div>

        <div className="sm:flex flex-row gap-1 py-4 px-8 hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-6 py-3 border-2 sm:hidden lg:flex rounded border-[#e1e2ea]"
          ></input>
          <select
            name="searchcategory"
            id="category"
            className="px-6 py-3 border-2 sm:hidden lg:flex rounded border-[#e1e2ea]"
          >
            <option value="All">All</option>
            <option value="Off">Off</option>
            <option value="On">On</option>
          </select>
          <button className="button-std sm:flex">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="sm:flex hidden gap-11 p-4 items-center">
          <a href="/login" className=" text-base font-bold text-mainSpace-blue">
            Login
          </a>
          <button href="/register" className="button-std min-w-56 ">
            Become a member
          </button>
        </div>
      </section>

      <div className="flex flex-col sm:hidden gap-1 mt-10 ">
        <input
          type="text"
          placeholder="Search"
          className="px-6 py-3 border-2  rounded border-[#e1e2ea]"
        ></input>
        <select
          name="searchcategory"
          id="category"
          className="px-6 py-3 border-2  rounded border-[#e1e2ea]"
        >
          <option value="All">All</option>
          <option value="Off">Off</option>
          <option value="On">On</option>
        </select>
        <button className="button-std ">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <nav className="sm:gap-5 text-mainSpace-grey md:pl-8 sm:flex-row flex flex-col items-center gap-8 py-14 font-bold text-3xl leading-10  tracking-widest">
        <NavLink exact to="/">
          Home
        </NavLink>
        <a href="#shopcardaone">Shop</a>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
export default Header;
