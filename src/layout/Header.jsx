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
    <header className="px-6 top-0 z-30 ">
      <section className="py-8 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-[58px]">HauteHex</h1>
        </Link>

        <div className="flex justify-between items-center gap-3 md:hidden">
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
          <button id="mobile-hamburger" className="text-2xl md:hidden">
            <FontAwesomeIcon icon={faBars} style={{ color: "#4A4E69" }} />
          </button>
        </div>

        <div className="xl:flex flex-row gap-1 py-4 px-8 sm:px-3 hidden w-full sm:max-w-[450px] xl:max-w-[650px] justify-center transation-all duration-500">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-6 py-3 border-2  lg:flex rounded border-[#e1e2ea]"
          ></input>
          <select
            name="searchcategory"
            id="category"
            className="w-full px-6 py-3 border-2 lg:flex rounded border-[#e1e2ea]"
          >
            <option value="All">All</option>
            <option value="Off">Off</option>
            <option value="On">On</option>
          </select>
          <button className="button-std ">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="md:flex hidden  p-4 items-center  transation-all duration-500">
          <a
            href="/login"
            className=" text-base font-bold text-mainSpace-blue pr-11"
          >
            Login
          </a>
          <button href="/register" className="button-std   min-w-56">
            Become a member
          </button>
        </div>
      </section>

      <div className="flex flex-col xl:hidden gap-1 mt-10 pb-14">
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

      <div className="md:gap-5 text-mainSpace-grey sm:flex-row xl:flex flex-col items-center gap-8 pt-14 sm:pt-8 font-bold text-3xl leading-10  tracking-widest hidden md:text-sm">
        <NavLink exact to="/">
          Home
        </NavLink>
        <a href="#shopcardaone">Shop</a>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </header>
  );
}
export default Header;
