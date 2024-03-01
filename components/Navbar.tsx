// components/Navbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { sendGTMEvent } from '@next/third-parties/google';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop menu */}
      <nav className="relative justify-between md:justify-normal bg-lash-pink-400 md:bg-[#201920] text-lash-pink-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex items-center justify-end md:justify-between h-16">
            {/* Hamburger-ikon for mindre skærme */}
            <div className="flex md:hidden">
              <button
                className="flex items-center text-white p-3"
                onClick={toggleMenu}
                aria-expanded="false"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6 block fill-current"
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
                  ></path>
                </svg>
              </button>
            </div>

            <ul className="hidden md:flex md:items-baseline md:w-auto md:space-x-8 ml-10">
              <li>
                <Link
                  className={clsx('text-sm', {
                    'text-lash-pink-200 font-bold': pathname === '/',
                    'text-lash-pink-300 hover:text-shade-600': pathname !== '/',
                  })}
                  href="/"
                >
                  Forside
                </Link>
              </li>
              <li>
                <Link
                  className={clsx('text-sm', {
                    'text-lash-pink-200 font-bold':
                      pathname === '/behandlinger',
                    'text-lash-pink-300 hover:text-shade-600':
                      pathname !== '/behandlinger',
                  })}
                  href="/behandlinger"
                >
                  Behandlinger
                </Link>
              </li>
              <li>
                <Link
                  className={clsx('text-sm', {
                    'text-lash-pink-200 font-bold': pathname === '/om',
                    'text-lash-pink-300 hover:text-shade-600':
                      pathname !== '/om',
                  })}
                  href="/om"
                >
                  Om mig
                </Link>
              </li>
              <li>
                <Link
                  className={clsx('text-sm', {
                    'text-lash-pink-200 font-bold': pathname === '/praktisk',
                    'text-lash-pink-300 hover:text-shade-600':
                      pathname !== '/praktisk',
                  })}
                  href="/praktisk"
                >
                  Praktisk
                </Link>
              </li>
            </ul>
            <div className="hidden md:flex align-middle">
              <button
                type="button"
                className="text-white bg-curry-600 hover:bg-curry-600/80 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-curry-600 dark:hover:bg-curry-700"
                onClick={() => [
                  sendGTMEvent({
                    event: 'buttonClicked',
                    value: 'book',
                  }),
                  router.push('https://skincarebyhammer.onlinebooq.dk'),
                ]}
              >
                Book tid
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <div
        className={`h-full fixed z-50 top-0 left-0 overflow-x-hidden transition-all ease-in-out delay-150  ${
          isMenuOpen ? 'w-5/6' : 'w-0'
        }`}
      >
        <div
          className={`fixed inset-0 bg-gray-800 opacity-25 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        ></div>
        <nav
          className={`flex flex-col h-full relative w-full py-6 px-6 bg-white border-r overflow-y-auto`}
        >
          <div className="flex items-center mb-8">
            <button className="navbar-close" onClick={toggleMenu}>
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
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
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className={clsx('block p-4 font-semibold rounded-lg', {
                    'text-white bg-[#74384f]/60': pathname === '/',
                    'text-gray-400': pathname !== '/',
                  })}
                  href="/"
                  onClick={toggleMenu}
                >
                  Forside
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className={clsx('block p-4 font-semibold rounded-lg', {
                    'text-white bg-[#74384f]/60': pathname === '/behandlinger',
                    'text-gray-400': pathname !== '/behandlinger',
                  })}
                  href="/behandlinger"
                  onClick={toggleMenu}
                >
                  Behandlinger
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className={clsx('block p-4 font-semibold rounded-lg', {
                    'text-white bg-[#74384f]/60': pathname === '/om',
                    'text-gray-400': pathname !== '/om',
                  })}
                  href="/om"
                  onClick={toggleMenu}
                >
                  Om mig
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className={clsx('block p-4 font-semibold rounded-lg', {
                    'text-white bg-[#74384f]/60': pathname === '/praktisk',
                    'text-gray-400': pathname !== '/praktisk',
                  })}
                  href="/praktisk"
                  onClick={toggleMenu}
                >
                  Praktisk
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="block px-4 py-3 mb-2 leading-loose text-md text-center text-white font-semibold bg-[#E4B153] hover:bg-curry-800 rounded-xl"
                href="https://skincarebyhammer.onlinebooq.dk"
                target="_blank"
                onClick={() => [
                  sendGTMEvent({
                    event: 'buttonClicked',
                    value: 'book',
                  }),
                ]}
              >
                Book tid
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
