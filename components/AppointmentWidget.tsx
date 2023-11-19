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
    alert(`Booking request: Timeslot - ${selectedTimeslot}, Service - ${selectedService}`);
  };

  return (
    <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Book tid
          </h2>
          <form>
            <div className="mb-6">
              <label htmlFor="timeslot" className="block text-gray-700 text-sm font-bold mb-2">
                Vælg et tidspunkt:
              </label>
              <select
                id="timeslot"
                name="timeslot"
                value={selectedTimeslot}
                onChange={handleTimeslotChange}
                className="block w-full rounded border-gray-300 py-2 px-3 leading-5 focus:ring focus:ring-opacity-50 focus:border-primary transition duration-150 ease-in-out"
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
              <label htmlFor="service" className="block text-gray-700 text-sm font-bold mb-2">
                Vælg en service:
              </label>
              <select
                id="service"
                name="service"
                value={selectedService}
                onChange={handleServiceChange}
                className="block w-full rounded border-gray-300 py-2 px-3 leading-5 focus:ring focus:ring-opacity-50 focus:border-primary transition duration-150 ease-in-out"
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
              className="mb-6 inline-block w-full rounded bg-lash-pink-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-lash-pink-300 transition duration-150 ease-in-out hover:bg-lash-pink-700 hover:shadow-lash-pink-500 focus:bg-lash-pink-800 focus:shadow-lash-pink-500 focus:outline-none focus:ring-0 active:bg-lash-pink-700 active:shadow-lash-pink-500"
            >
              Book now
            </button>
          </form>
        </div>

  );
};

export default AppointmentWidget;