import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">BookMyTable</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink className="mr-5 hover:text-white" to="/">
            Home
          </NavLink>
          <NavLink className="mr-5 hover:text-white" to="/booking">
            Bookings
          </NavLink>
          <NavLink className="mr-5 hover:text-white" to="/pricing">
            Pricing
          </NavLink>
          <NavLink className="mr-5 hover:text-white" to="/about">
            About Us
          </NavLink>
          <NavLink className="mr-5 hover:text-white" to="/contact">
            Contact Us
          </NavLink>

          {/* <a className="mr-5 hover:text-white">Pricing</a>
          <a className="mr-5 hover:text-white">About Us</a>
          <a className="mr-5 hover:text-white">Contact Us</a> */}
        </nav>
        <NavLink
          to="/login"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Log in
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
