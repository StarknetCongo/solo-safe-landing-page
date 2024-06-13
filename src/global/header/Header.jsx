import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const getLinkClass = (path) => {
  //   return router === path
  //     ? "block py-2 px-3 text-white bg-solo-safe-1-700 rounded md:bg-transparent md:text-solbg-solo-safe-1-700 md:p-0 md:dark:text-solbg-solo-safe-1-500"
  //     : "block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-solbg-solo-safe-1-700 md:p-0 md:dark:hover:text-solbg-solo-safe-1-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  // };

  return (
    <div>
      <nav className=" fixed w-full z-50 top-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src="/favicon.png"
              className="h-8"
              alt="logo-place
            "
            /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              soloWallet
            </span>
          </Link>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/contact">
              <button
                type="button"
                className="text-white bg-solo-safe-1 hover:bg-solo-safe-1 focus:ring-4 focus:outline-none focus:ring-solbg-solo-safe-1 font-medium rounded-lg text-sm sm:px-12 px-4 py-2 text-center dark:bg-solo-safe-1 dark:hover:bg-solo-safe-1 dark:focus:ring-solbg-solo-safe"
              >
                Download app
              </button>
            </Link>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-align-justify"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isMenuOpen ? "block bg-white  text-black" : "hidden"
            } w-full md:flex md:w-auto  md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex w-full  flex-col gap-2 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row  md:mt-0 md:border-0   dark:border-gray-700">
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Acceuil
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                  Apropos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
