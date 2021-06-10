import React, { useState } from "react";
import { MdClose, MdMenu, MdPersonOutline, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center content-padding h-20 bg-black relative">
      {/* logo */}
      <div>
        <h1 className="text-light-theme text-xl font-bold">Bebshai</h1>
      </div>

      {/* requirement button */}
      <div>
        <button className={`bg-light-theme text-white px-2 py-1 rounded-md`}>
          Post A Requirement
        </button>
      </div>

      {/* main nav */}
      <ul
        className={`flex flex-col md:flex-row md:items-center bg-black divide-y-2 
        md:divide-y-0 divide-gray-400 min-h-screen md:min-h-0 absolute
        md:static top-0 left-0 w-full md:w-auto transform transition-transform md:translate-x-0 ${
          isMobileNavOpen ? "" : "-translate-x-full"
        } `}
      >
        <li className="md:hidden pl-3 md:pl-0 py-3 md:py-0 md:mx-4">
          <span className="text-gray-200 text-4xl flex ">
            <MdClose
              className="ml-auto cursor-pointer"
              onClick={() => setIsMobileNavOpen(false)}
            />
          </span>
        </li>
        <li className="w-full md:w-auto pl-3 md:pl-0 py-3 md:py-0 hover:bg-gray-800  md:mx-4">
          <Link to="/" className="text-gray-200">
            Home
          </Link>
        </li>
        <li className="w-full md:w-auto pl-3 md:pl-0 py-3 md:py-0 hover:bg-gray-800  md:mx-4">
          <Link to="/" className="text-gray-200">
            About
          </Link>
        </li>
        <li className="w-full md:w-auto pl-3 md:pl-0 py-3 md:py-0 hover:bg-gray-800  md:mx-4">
          <Link to="/" className="text-gray-200">
            Contact Us
          </Link>
        </li>
        <li className="w-full md:w-auto pl-3 md:pl-0 py-3 md:py-0 hover:bg-gray-800  md:mx-2">
          <Link to="/" className="text-gray-200 text-4xl">
            <MdSearch />
          </Link>
        </li>
        <li className="w-full md:w-auto pl-3 md:pl-0 py-3 md:py-0 hover:bg-gray-800  md:mx-2">
          <Link to="/" className="text-gray-200 text-4xl">
            <MdPersonOutline />
          </Link>
        </li>
      </ul>
      {/* hamburger visible on mobile only */}
      <div className="block md:hidden">
        <span className="text-gray-200 text-4xl ">
          <MdMenu onClick={() => setIsMobileNavOpen(true)} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
