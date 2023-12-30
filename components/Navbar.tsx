// components/Navbar.tsx
'use client'
import { useState } from 'react';
import { HiOutlineUserCircle, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import '@/app/menu.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-shade-950 shadow fixed top-0 left-0 right-0 z-50 text-lash-pink-400 hidden lg:block">
      <div className="px-4 py-2 sm:px-6 lg:px-8">
        <div className="">
          <div className="">
              {/* Navigationsmenu for større skærme */}
              <div className='menu'>
                <a href="/">
                <HiOutlineMagnifyingGlass className="h-5 w-5 hover:scale-[1.2]" />
                </a>
                <a href="/" className="hover:text-lash-pink-950">
                  Forside
                </a>
                <a href="/booking" className="hover:text-lash-pink-950">
                  Booking
                </a>
                <a href="/booking" className="hover:text-lash-pink-950">
                  Om
                </a>
                <a href="/booking" className="hover:text-lash-pink-950">
                  Kontakt
                </a>
                <a href="/booking">
                  <HiOutlineUserCircle className="h-6 w-6 hover:scale-[1.2]" />
                </a>
                {/* Tilføj flere menuelementer her */}
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