import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-xl z-50">
        <div className="container  mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center font-bold text-xl space-x-2"
            >
              <span className="text-2xl text-blue-500">JobPortal</span>
            </Link>
            <div className="flex-1 justify-center mx-8 items-center">
              <div className="relative w-full flex max-w-md hidden md:flex">
                <FaSearch className="absolute left-3 top-1/3 text-gray-400" />
                <input
                  type="text"
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 outline-none "
                  placeholder="Search Jobs..."
                />
              </div>
            </div>
            <div className="hidden md:flex">
              <Link to="/login">
                <button className=" bg-blue-400 text-sm py-2 px-4 text-gray-700 rounded-md ">
                  Sign In
                </button>
              </Link>
            </div>
          
             <div>
                <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                 {isMenuOpen?<FaTimes className="text-xl" />: <FaBars className="text-xl" />}
                </button>
              </div>
              
          </div>
            {isMenuOpen && (
             <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
              <div className="relative w-full flex max-w-md md:flex">
                <FaSearch className="absolute left-3 top-1/3 text-gray-400" />
                <input
                  type="text"
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 outline-none "
                  placeholder="Search Jobs..."
                />
              </div>
              <div className=" md:flex">
              <Link to="/login">
                <button className=" bg-blue-400 text-sm py-2 px-4 text-gray-700 rounded-md ">
                  Sign In
                </button>
              </Link>
            </div>
             </div>
            )}
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
