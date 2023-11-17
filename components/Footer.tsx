'use client'
import Image from 'next/image'
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
    'Herre- og Dameklip',
    'Hårstyling og Farvning',
    'Forkælelse af Ansigtshud',
    'Neglepleje og Manicure',
    'Massagebehandlinger',
    'Spa Pakker',
  ];

  return (
    <footer className="bg-gradient-to-b from-lash-pink-500/30 to-lash-pink-100 text-lash-pink-900 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
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

          <h3 className="text-xl font-semibold mb-2">Trustpilot Anmeldelser</h3>
          {/* Trustpilot rating component */}
          <div className="flex items-center">
          <Image
                  src={'/images/trustpilot.svg'}
                  alt={'trustpilot'}
                  quality={80}
                  width={144}
                  height={144}
                  className="w-36 h-36 mr-2"
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
      <div className="container pt-9">
    <div className="mb-9 flex justify-center">
      <a href="#!" className="mr-9 text-neutral-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </a>
      <a href="#!" className="mr-9 text-neutral-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>
    </div>
  </div>

  {/* Copyright section */}
  <div
    className="w-full p-4 text-center text-neutral-700">
    © 2023 Copyright:
    <a
      className="text-neutral-800 dark:text-neutral-400"
      href="/"
      >Skincare by Hammer</a>
  </div></div>

    </footer>
  );
};

export default Footer;