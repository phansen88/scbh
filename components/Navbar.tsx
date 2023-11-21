// components/Navbar.tsx
'use client'
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-lash-pink-600 shadow-md fixed top-0 left-0 right-0 z-50 text-lash-pink-50 hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Logo eller brand */}
              <a href="/">
                {/*
                <img
                  className="h-8 w-8"
                  src="/images/logo.png"
                  alt="Salon Logo"
  />*/}Logo
              </a>
            </div>
            <div className="hidden md:block">
              {/* Navigationsmenu for større skærme */}
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="hover:text-curry-400">
                  Forside
                </a>
                <a href="/booking" className="hover:text-curry-400">
                  Booking
                </a>
                {/* Tilføj flere menuelementer her */}
              </div>
            </div>
          </div>
          {/* Hamburger-ikon for mindre skærme */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
              aria-expanded="false"
            >
              <span className="sr-only">Åbn menu</span>
              <span>Menu</span>
              {/* Hamburger-ikon */}
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Luk-ikon */}
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Responsivt dropdown-menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="block hover:bg-gray-50">
            Forside
          </a>
          <a href="/booking" className="block hover:bg-gray-50">
            Booking
          </a>
          {/* Tilføj flere menuelementer her */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;