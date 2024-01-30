// components/Hero.tsx
'use client'
import React, { useEffect, useState } from 'react';
import AppointmentWidget from './AppointmentWidget';
import NavbarBottom from './NavbarBottom';
import Image from 'next/image';

const timeslots = [
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '13:00- 14:00',
  '14:00 - 15:00',
];

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 769px)');

    const handleResize = (e: MediaQueryListEvent) => {
      setIsLargeScreen(e.matches);
    };

    // Initial check
    setIsLargeScreen(mediaQuery.matches);

    // Listen for changes in the media query
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <>
      <div className="pt-6 md:pt-24 pb-4 text-gray-950  bg-lash-pink-400/5 text-center grid">
        <div className="col-start-1 row-start-1 w-full h-full"></div>
        <div className="col-start-1 row-start-1 mx-auto my-auto">
          <h1 className="font-bold text-4xl text-lash-pink-500">Få din <span className="text-lash-pink-700">skønhed</span> til at blomstre</h1>
        </div>
      </div>

      <div className="relative flex items-center justify-center bg-lash-pink-400/5">

        <div className="px-5 py-4 text-center md:px-12 lg:py-16 lg:text-left">
          <div className="mx-auto text-black sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-[120rem]">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="flex items-center justify-center w-full h-96">
                <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1589647053904-d488119f37a8?q=80&w=650&h=520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="glasses photo" />
              </div>


              <div className="relative mb-12 lg:mb-0 lg:flex lg:flex-col lg:justify-self-end">
                <div
                  className="relative block rounded-lg px-0 pt-6 pb-4 md:px-12 lg:col-start-2">
                  <AppointmentWidget timeslots={timeslots} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-16 px-5 sm:p-10 md:p-16 bg-slate-500/10 md:bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-24 md:gap-10">
          <div className="rounded-lg overflow-hidden shadow-lg bg-lash-pink-50">
            <div className="relative">
              <a href="#">
                <Image className="w-full"
                  src="/images/lash-lift-model.jpg"
                  quality={80}
                  width={500}
                  height={333}
                  alt="Brow mapping" />
                <div
                  className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
              </a>
            </div>
            <div className="px-5 py-4 text-center sm:text-left">

              <a href="#"
                className="font-semibold text-lg inline-block text-shade-950 hover:text-indigo-600 transition duration-500 ease-in-out">Brow mapping</a>
              <p className="text-shade-950/70 text-sm">
                Mapping af dine bryn så du får den helt perfekte form til din ansigtsform
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg bg-lash-pink-50">

            <div className="relative">
              <a href="#">
              <Image className="w-full"
                  src="/images/lash-lift-model.jpg"
                  quality={90}
                  width={500}
                  height={333}
                  alt="Lash lift på model" />
                <div
                  className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
              </a>
            </div>
            <div className="px-6 py-4 text-center sm:text-left">

              <a href="#"
                className="font-semibold text-lg inline-block text-shade-950 hover:text-indigo-600 transition duration-500 ease-in-out">Lash lift</a>
              <p className="text-shade-950/70 text-sm">
                Permanent buk af egne vipper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;