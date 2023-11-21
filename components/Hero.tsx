// components/Hero.tsx
'use client'
import React, { useEffect, useState } from 'react';
import AppointmentWidget from './AppointmentWidget';

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

    <div className="relative min-h-[80vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: 'url("/images/skincare.jpg")', // Replace with the path to your background image
        }}
      ></div>

      <div className="px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
        <div className="w-100 mx-auto text-black sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0" style={{
                    zIndex: '10'
                  }}>
              <h1
                className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-lash-pink-500">
                Få din <span className="text-lash-pink-700">skønhed</span><br /> til at blomstre
              </h1>
              <p className="text-lash-pink-950">
                Jeg tilbyder ekslusive skøndhedsbehandlinger i Hedehusene inden for hudpleje, hårfjerning, manicure, makeup. Parkering lige ved døren. Ring og book tid på  12 34 56 78 eller book online.
              </p>
            </div>
            <div className="relative mb-12 lg:mb-0 lg:flex lg:flex-col lg:justify-self-end">
              <div
                className="relative block rounded-lg px-6 pt-6 pb-4 bg-gradient-to-b from-lash-pink-300/80 to-lash-pink-400/90 md:px-12 lg:col-start-2 lg:w-[310px]">
                <AppointmentWidget timeslots={timeslots} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;