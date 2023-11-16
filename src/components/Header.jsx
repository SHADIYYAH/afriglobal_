// import React from "react";
// import BG from "../assets/bg-img.avif";
import logo from "../assets/afrilogo (1).svg"
import { Link } from "react-router-dom";
// import BG from "../assets/bg-img.avif"


const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
  },
  {
    id: 3,
    title: "Products",
    path: "/product",
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  return (


  
    <div className=" bg-white h-screen">
      
    <div className="flex items-center justify-between ">
      <div className="flex w-[65%] w-18  items-center">
        <div className="ml-10 ">
          <img src={logo} alt="logo" height="100" width="150" />
        </div>
        <div className="ml-56 flex" >
          <ul className="flex flex-row gap-5">
            {navLinks.map((links) => (
              <Link to={navLinks.path}>
                <li className="text-black font-bold" key={links.id}>
                  {links.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-5 w-[35%]  w-18 h-[5rem]">
        <Link to="/auth/login">
          <button class="bg-black hover:drop-shadow-lg text-white font-bold px-10 py-3 rounded">
            Log In
          </button>
        </Link>

        <Link to="/auth/sign-up">
          <button class=" bg-black hover:drop-shadow-lg text-white font-bold px-10 py-3 rounded">
            Register
          </button>
        </Link>
      </div>
    </div>
    {/* <Hero/> */}
  </div>
  
  );
};

export default Header;

