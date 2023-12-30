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
    <>
      <div className="pt-24 pb-4 text-gray-950 bg-lash-pink-100 text-center grid">
        <div className="col-start-1 row-start-1 w-full h-full"></div>
        <div className="col-start-1 row-start-1 mx-auto my-auto">
          <h1 className="font-bold text-4xl text-lash-pink-500">Få din <span className="text-lash-pink-700">skønhed</span> til at blomstre</h1>
        </div>
      </div>

      <div className="relative flex items-center justify-center bg-lash-pink-100">

          <div className="px-6 py-4 text-center md:px-12 lg:py-8 lg:text-left">
            <div className="mx-auto text-black sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-[120rem]">
              <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="flex items-center justify-center w-full h-96">
                <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1589647053904-d488119f37a8?q=80&w=650&h=520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="glasses photo" />

    <div className="relative min-h-[65vh] flex items-center justify-center">
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