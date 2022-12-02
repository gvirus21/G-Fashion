import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white w-full px-32 h-20">
      {/* categories */}
      <div className="">
        <ul className="flex">
          <li className="px-3 hover:underline hover:text-gray-700">
            <Link to="/products/1">Men</Link>
          </li>
          <li className="px-3 hover:underline hover:text-gray-700">
            <Link to="/products/2">Women</Link>
          </li>
          <li className="px-3 hover:underline hover:text-gray-700">
            <Link to="/products/3">Kids</Link>
          </li>
        </ul>
      </div>

      {/* logo */}
      <div className="font-semibold text-xl uppercase ml-32">
        <Link to="/">G Fashion</Link>
      </div>

      {/* other links - fake */}
      <div className="flex justify-center items-center">
        <ul className="flex">
          <li className="px-4 hover:underline hover:text-gray-700">
            <Link to="/">Homepage</Link>
          </li>
          <li className="px-4 hover:underline hover:text-gray-700">
            <Link to="/">Stores</Link>
          </li>
          <li className="px-4 hover:underline hover:text-gray-700">
            <Link to="/">Customer support</Link>
          </li>
        </ul>

        {/*  icons */}
        <div className="ml-20 relative">
          <IconContext.Provider value={{ color: "#555", size: "30px" }}>
            <AiOutlineShoppingCart />
          </IconContext.Provider>
          <div className="bg-blue-500 flex justify-center items-center h-5 w-5 rounded-full absolute -top-2 -right-2">
            <span className="text-white">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;