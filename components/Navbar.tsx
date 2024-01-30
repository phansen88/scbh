// components/Navbar.tsx
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

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
      <nav className="relative justify-between md:justify-normal bg-lash-pink-600 md:bg-lash-pink-50 text-lash-pink-50 shadow-md">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0'>
          <div className='flex items-center justify-between md:justify-between h-16'>

            {/* Hamburger-ikon for mindre skærme */}
            <div className="block md:hidden">
              <button className="navbar-burger inline-flex items-center text-white p-3" onClick={toggleMenu} aria-expanded="false">
                <svg className="h-6 w-6 block fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <ul className="hidden md:flex md:items-baseline md:w-auto md:space-x-4 ml-10">
              <li><Link className={clsx(
                'text-sm',
                {
                  'text-lash-pink-700 font-bold': pathname === '/',
                  'text-lash-pink-600 hover:text-shade-700': pathname !== '/',
                },
              )} href="/">Forside</Link></li>
              <li><Link className={clsx(
                'text-sm',
                {
                  'text-lash-pink-700 font-bold': pathname === '/behandlinger',
                  'text-lash-pink-600 hover:text-shade-700': pathname !== '/behandlinger',
                },
              )} href="/behandlinger">Behandlinger</Link></li>
              <li><Link className={clsx(
                'text-sm',
                {
                  'text-lash-pink-700 font-bold': pathname === '/om',
                  'text-lash-pink-600 hover:text-shade-700': pathname !== '/om',
                },
              )} href="/om">Om mig</Link></li>
            </ul>
            <div className='hidden md:flex align-middle'>
              <button type="button"
                className="text-white bg-curry-700 hover:bg-curry-800 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-curry-600 dark:hover:bg-curry-700"
                onClick={() => router.push('/api/auth/signup')}>Book tid</button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`h-full fixed z-50 top-0 left-0 overflow-x-hidden navbar-menu transition-all ease-in-out delay-150  ${isMenuOpen ? 'w-5/6' : 'w-0'}`}>
        <div className={`navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 ${isMenuOpen ? 'block' : 'hidden'}`}></div>
        <nav className={`flex flex-col h-full relative w-full py-6 px-6 bg-white border-r overflow-y-auto`}>
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none text-lash-pink-950" href="/">
              Logo
            </Link>
            <button className="navbar-close" onClick={toggleMenu}>
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link className="block p-4 font-semibold text-curry-900 bg-curry-200 rounded" href="/">Forside</Link>
              </li>
              <li className="mb-1">
                <Link className="block p-4 font-semibold text-gray-400 hover:bg-curry-400 hover:text-curry-950 rounded" href="/behandlinger">Behandlinger</Link>
              </li>
              <li className="mb-1">
              <Link className="block p-4 font-semibold text-gray-400 hover:bg-curry-400 hover:text-curry-950 rounded" href="/om">Om mig</Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-curry-600 hover:bg-curry-800 rounded-xl" href="#">Book tid</a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;