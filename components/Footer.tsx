'use client'
import Image from 'next/image'
import { PT_Sans_Narrow } from 'next/font/google';
const ptSansNarrow = PT_Sans_Narrow({ subsets: ['latin'], weight: "400" })
const headerClasses = `${ptSansNarrow.className} text-4xl text-lash-pink-500`;
const Footer = () => {
  // Opening hours for each day
  const openingHours = [
    { day: 'Mandag', hours: '9:00 - 17:00' },
    { day: 'Tirsdag - Fredag', hours: '9:00 - 19:00' },
    { day: 'Lørdag', hours: '9:00 - 15:00' },
    { day: 'Søndag og Helligdage', hours: 'Lukket' },
  ];

  // Services offered as an array of bullet points
  const servicesOffered = [
    'Lashlift',
    'Brow lamination',
    'Brow mapping'
  ];

  return (
    <footer className="bg-gradient-to-b from-lash-pink-400/60 to-lash-pink-300/70 text-lash-pink-900 pt-12 px-6 md:px-0">
      <div className="mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Logo with address underneath */}
          <div>
            {/*<img
            src="/images/logo.png"
            alt="Salon Logo"
            className="w-32 h-32 md:w-48 md:h-48 object-cover object-center mb-4"
  />*/}Logo
            <p className="text-sm">Adresse: Adressevej 123, Hedehusene, 2640</p>
            <p className="text-sm">Telefon: 12 34 56 78</p>
          </div>

          {/* Column 2: Opening hours */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Åbningstider</h3>
            <ul className="text-sm">
              {openingHours.map(({ day, hours }) => (
                <li key={day}>
                  <strong>{day}: </strong>
                  {hours}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services offered */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Services Vi Tilbyder</h3>
            <ul className="list-disc list-inside text-left text-sm">
              {servicesOffered.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Google location with Trustpilot rating underneath */}
          <div>
            {/* Google Maps component */}
            <div className="mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4500.943828470146!2d12.181603152303287!3d55.663393443852364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525ed28f696921%3A0xa00afcc1d5072c0!2s2640%20Fl%C3%B8ng!5e0!3m2!1sda!2sdk!4v1700231359214!5m2!1sda!2sdk"
                width="600"
                height="450" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-48"></iframe>
            </div>

            <h3 className="text-xl font-semibold mb-0 mt-4">Trustpilot Anmeldelser</h3>
            {/* Trustpilot rating component */}
            <div className="flex items-center">
              <Image
                src={'/images/trustpilot.svg'}
                alt={'trustpilot'}
                quality={80}
                width={144}
                height={144}
                className="w-36 h-12 mr-2"
                style={{
                  objectFit: 'cover', // cover, contain, none
                }}
              />
              <span className="text-lg font-semibold">4.5</span>
              <span className="ml-1">/ 5</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  text-center text-white">
          <div className="container pt-12">
            <div className="mb-2 flex justify-center">
              <a href="https://instagram.com/_u/skincare_by_hammer/" className="text-lash-pink-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10 w-8 md:w-10" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M16.5 7.5l0 .01" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright section */}
          <div
            className="w-full text-sm px-4 pb-4 text-center text-lash-pink-500">
            © 2023 Copyright:
            <a
              className="text-lash-pink-500 dark:text-lash-pink-500"
              href="/"
            >Skincare by Hammer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;