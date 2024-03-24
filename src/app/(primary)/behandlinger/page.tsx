export default function Behandlinger() {
  const services = [
    {
      title:
        'Browlamination/lift inkl. retning af bryn og fugtbehandling/efterpleje',
      description: '',
      price: 450,
      duration: 50,
    },
    {
      title: 'Lashlift inkl. keratinkur og fugtbehandling/efterpleje',
      description: '',
      price: 420,
      duration: 40,
    },
    {
      title:
        'Kombi af Lashlift/Browlamination, inkl. ret, farve af bryn og vipper, og fugtkur og efterpleje',
      description: '',
      price: 875,
      duration: 90,
    },
    {
      title: 'Browmapping inkl. retning, farve og styling',
      description: '',
      price: 295,
      duration: 30,
    },
    {
      title: 'Retning af bryn, samt farve af bryn og vipper, inkl. let styling',
      description: '',
      price: 295,
      duration: 30,
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
    {
      title:
        'Browmapping eksl. ret og farve, i forbindelse med med anden behandling',
      description: '',
      price: 100,
      duration: 10,
    },
    {
      title: 'Retning af bryn i forbindelse med anden behandling',
      description: '',
      price: 80,
      duration: 10,
    },
  ];

  return (
    <div className="container max-w-xl pt-6 md:pt-24 pb-16 sm:pb-12 mx-auto space-y-24 px-5 lg:max-w-5xl lg:min-h-[992px]">
      <div className="grid lg:gap-24 lg:grid-cols-2">
        <div className="col-span-1">
          <h1 className="text-2xl font-bold tracking-tight sm:text-5xl text-lash-pink-600 max-w-[490px]">
            Skønne behandlinger til dig
          </h1>
          <div className="flex w-16 h-1 sm:h-2 bg-lash-pink-700 mt-5 sm:mt-12"></div>
          <div className="flex">
            <div className="mt-5 sm:mt-8">
              <h3 className="text-lg sm:text-2xl font-bold leading-6 text-lash-pink-600">
                Bryn og vipper
              </h3>
            </div>
          </div>
          <div
            className="space-y-2 mt-4"
            aria-label="Oversigt over behandlinger inden for Bryn og vipper inkl. priser"
          >
            {services.map((service, index) => (
              <div
                className="flex"
                key={index}
                aria-label={
                  service.title + ` til pris: ` + service.price + `kroner.`
                }
              >
                <div className="flex items-baseline justify-between flex-1 mt-1 mb-1.5">
                  <p className="font-medium leading-6 text-gray-800">
                    {service.title}
                  </p>
                  <p className="ml-10 text-gray-600">{service.price}</p>
                </div>
              </div>
            ))}
            <div className="flex">
              <div className="mt-8">
                <h3 className="text-lg sm:text-2xl font-bold leading-6 text-lash-pink-600">
                  Services, der kun er tillægsservices
                </h3>
              </div>
            </div>
            {additionalServices.map((service, index) => (
              <div
                className="flex"
                key={index}
                aria-description={
                  service.title + ` til pris: ` + service.price + `kroner.`
                }
              >
                <div className="flex items-baseline justify-between flex-1 mt-1 mb-1.5">
                  <p className="font-medium leading-6 text-gray-800">
                    {service.title}
                  </p>
                  <p className="ml-10 text-gray-600">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-14">
            <p className="text-gray-600 text-sm">
              Priser på denne side er vejledende. Det betyder, at vi tager
              forbehold for eventuelle fejl eller uoverensstemmelser i priserne
              på denne side.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
