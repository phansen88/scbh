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

      <div className="relative flex items-center justify-center bg-white">

        <div className="px-5 py-4 text-center md:px-12 lg:py-16 lg:text-left">
          <div className="mx-auto text-black sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-76rem]">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div className='col-span-1'>
                <div className='flex flex-row flex-wrap justify-center'>
                  <Image className='object-cover w-full h-full mx-auto rounded-md lg:max-w-sm lg:mx-0 mt-6 md:mt-0' width={100} height={100} quality={90} src='/images/logo.svg' alt='Skincare by Hammer logo' />
                  <h1 className="font-playfair text-2xl md:text-5xl text-lash-pink-400 mt-2 md:mt-8">Få din <span className="text-lash-pink-800">skønhed</span> til at blomstre</h1>
                </div>
              </div>

              <div className="col-span-1 -mt-6 sm:-mt-0 mb-6 md:mb-24 relative flex sm-hidden">
                <div className="absolute inset-8 sm:inset-0 flex justify-center items-center">
                  <div className="w-[80rem] border-b border-lash-pink-500"></div>
                </div>
              </div>

              <div className='col-span-1'>


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
      </div>

      <div className="max-w-screen-xl mx-auto py-16 px-5 sm:p-10 md:p-16 bg-slate-500/10 md:bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-16 md:gap-10">
          <div className="rounded-lg overflow-hidden shadow-lg bg-lash-pink-50">
            <div className="relative">
              <a href="#">
                <Image className="w-full"
                  src="/images/lash-lift-model.jpg"
                  quality={80}
                  width={500}
                  height={333}
                  alt="Brow mapping" />
              </a>
            </div>
            <div className="px-5 py-4 text-center sm:text-left">

              <a href="#"
                className="font-semibold text-lg inline-block font-playfair text-shade-950 hover:text-indigo-600 transition duration-500 ease-in-out">Brow mapping</a>
              <p className="text-shade-950/70 text-md">
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
              </a>
            </div>
            <div className="px-6 py-4 text-center sm:text-left">

              <a href="#"
                className="font-semibold text-lg inline-block font-playfair text-shade-950 hover:text-indigo-600 transition duration-500 ease-in-out">Lash lift</a>
              <p className="text-shade-950/70 text-md">
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