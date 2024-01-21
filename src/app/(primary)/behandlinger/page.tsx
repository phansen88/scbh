export default function Behandlinger() {

  const services = [
    {
      title: 'Browlamination/lift inkl. retning af bryn, keratinkur og fugtbehandling',
      description: '',
      price: 420,
      duration: 45,
    },
    {
      title: 'Lashlift inkl. keratinkur og fugtbehandling',
      description: '',
      price: 420,
      duration: 35,
    },
    {
      title: 'Farve af vipper',
      description: '',
      price: 135,
      duration: 15,
    },
    {
      title: 'Farve af bryn',
      description: '',
      price: 135,
      duration: 15,
    },
    {
      title: 'Retning af bryn',
      description: '',
      price: 135,
      duration: 15,
    },
    {
      title: 'Retning af bryn, samt farve af bryn og vipper',
      description: '',
      price: 295,
      duration: 30,
    },
    {
      title: 'Browmapping inkl. retning, farve og styling',
      description: '',
      price: 295,
      duration: 30,
    },
  ];

  const additionalServices = [
    {
      title: 'Farve af bryn i forbindelse med anden behandling',
      description: '',
      price: 80,
      duration: 10,
    },
    {
      title: 'Farve af vipper i forbindelse med anden behandling',
      description: '',
      price: 80,
      duration: 10,
    },
  ];





  return (
    <div className="container max-w-xl pt-6 md:pt-24 pb-12 mx-auto space-y-24 px-8 lg:max-w-5xl lg:min-h-[992px]">
      <div className="grid lg:gap-24 lg:grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-5xl text-lash-pink-600 max-w-[490px]">Skønne behandlinger til dig</h1>
          <div className="flex w-16 h-1 sm:h-2 bg-lash-pink-700 mt-5 sm:mt-12"></div>
          <div className="flex">
            <div className="mt-5 sm:mt-8">
              <h3 className="text-lg sm:text-2xl font-bold leading-6 text-lash-pink-600">Bryn og vipper</h3>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            {services.map((service, index) => (
              <div className="flex" key={index}>

                <div className="flex items-center justify-between flex-1 mt-1 mb-1">
                  <h5 className="text-sm font-medium leading-6 text-gray-800">{service.title}</h5>
                  <p className="ml-6 text-gray-600">{service.price},-</p>
                </div>

              </div>
            ))}
            <div className="flex">
              <div className="mt-8">
                <h3 className="text-lg sm:text-2xl font-bold leading-6 text-lash-pink-600">Services, der kun er tillægsservices</h3>
              </div>
            </div>
            {additionalServices.map((service, index) => (
              <div className="flex" key={index}>

                <div className="flex items-center justify-between flex-1 mt-1 mb-1">
                  <h5 className="text-sm font-medium leading-6 text-gray-800">{service.title}</h5>
                  <p className="ml-6 text-gray-600">{service.price},-</p>
                </div>

              </div>
            ))}
          </div>
        </div>
        <div aria-hidden="true" className="mt-10 lg:mt-0 relative hidden lg:flex">
          <img src="https://source.unsplash.com/random/360x880" alt="random" className="mx-auto rounded-lg shadow-lg bg-gray-800" />
          <div className="absolute left-[-2rem] top-1/2">
            <div className="bg-lash-pink-600/80 px-24 py-12"><h2 className="text-white text-4xl font-bold">Skønhed</h2></div>
          </div>
        </div>
      </div>
    </div>
  );
}