import { useState } from 'react';

interface AppointmentWidgetProps {
  timeslots: string[]; // Array of available timeslots
}

const AppointmentWidget = ({ timeslots }: AppointmentWidgetProps) => {
  const [selectedTimeslot, setSelectedTimeslot] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleTimeslotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTimeslot(e.target.value);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
  };

  const handleBookNowClick = () => {
    // Handle the booking logic here, using selectedTimeslot and selectedService
    alert(
      `Booking request: Timeslot - ${selectedTimeslot}, Service - ${selectedService}`
    );
  };

  return (
    <div className="text-left">
      <h2 className="text-2xl text-center font-playfair font-bold text-lash-pink-950 mb-4">
        Hvad tilbyder jeg?
      </h2>
      {/*
          <form>
            <div className="mb-6">
              
              <label htmlFor="timeslot" className="block text-lash-pink-950 text-sm font-bold mb-2">
                Vælg et tidspunkt:
              </label>
              <select
                id="timeslot"
                name="timeslot"
                value={selectedTimeslot}
                onChange={handleTimeslotChange}
                className="block w-full rounded bg-white border-lash-pink-300 border-solid border-2 py-2 px-3 leading-5 focus:ring focus:ring-opacity-50 focus:border-primary transition duration-150 ease-in-out"
              >
                <option value="" disabled>Vælg tid</option>
                {timeslots.map((timeslot, index) => (
                  <option key={index} value={timeslot}>
                    {timeslot}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="service" className="block text-lash-pink-950 text-sm font-bold mb-2">
                Vælg en service:
              </label>
              <select
                id="service"
                name="service"
                value={selectedService}
                onChange={handleServiceChange}
                className="block w-full rounded bg-white border-lash-pink-300 border-solid border-2 py-2 px-3 leading-5 focus:ring focus:ring-opacity-50 focus:border-primary transition duration-150 ease-in-out"
              >
                <option value="" disabled>Vælg service</option>
                <option value="lashLift">Eye Lash Lift</option>
                <option value="lashExtension">Lash Extension</option>
                <option value="lashExtension">Vax af bryn</option>
              </select>
            </div>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={handleBookNowClick}
              className="mb-6 inline-block w-full rounded bg-curry-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-curry-300 transition duration-150 ease-in-out hover:bg-curry-600 hover:shadow-curry-500 focus:bg-curry-800 focus:shadow-curry-500 focus:outline-none focus:ring-0 active:bg-curry-700 active:shadow-curry-500"
            >
              Book nu
            </button>
          </form>
                */}
      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        Skincare by Hammer er en lokal lille skønhedsklinik, hvor du vil opleve
        en dejlig stemning og ro.
      </p>
      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased mt-4">
        Når du træder ind ad døren bliver du mødt af dæmpet musik, dejlige milde
        æteriske dufte og en rolig stemning. Hos Skincare by Hammer er du i
        fokus, og jeg ønsker at du skal have en sanselig og afslappende
        behandling, hvor du kan trækket stikket for en stund, og få lov til at
        være dig - ikke mor, kæreste, kone/mand, ven, kollega mm. men bare DIG.
      </p>
      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased mt-4">
        Du er altid velkommen til at bestille en stille behandling, eller sige
        at du ønsker en stille behandling til mig når du kommer i klinikken – Du
        skal ikke være usikker eller utryg ved at bede om en stille behandling,
        da det skal være rart for dig, ud fra dine ønsker og behov.
      </p>
      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased mt-4">
        Hos Skincare by Hammer tilbyder jeg Lashlift, Browlamination,
        Browmapping, retning af bryn, samt farve af bryn og vipper.
      </p>
      <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased mt-4">
        Jeg vil på et senere tidspunkt også kunne tilbyde diverse
        voksbehandlinger og ansigtsbehandlinger.
      </p>
    </div>
  );
};

export default AppointmentWidget;
