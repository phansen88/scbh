import { title } from 'process';

export default function Behandlinger() {
  const lashServices = [
    {
      title: 'Lashlift Deluxe',
      description: '',
      price: 500,
      duration: 60,
      active: true,
    },
    {
      title: 'Lashlift',
      description: '',
      price: 420,
      duration: 50,
      active: true,
    },
    {
      title: 'Browlift Deluxe',
      description: '',
      price: 530,
      duration: 60,
      active: true,
    },
    {
      title: 'Browlift',
      description: '',
      price: 450,
      duration: 50,
      active: true,
    },
    {
      title: 'Kombi af Lashlift/Browlift Deluxe',
      description: '',
      price: 875,
      duration: 90,
      active: true,
    },
  ];

  const services = [
    {
      title: 'Browmapping inkl. retning, farve og styling',
      description: '',
      price: 295,
      duration: 30,
      active: true,
    },
    {
      title:
        'Voks af bryn, samt farve af bryn og vipper (mere end 6 uger imellem)',
      description: '',
      price: 335,
      duration: 45,
      active: true,
    },
    {
      title:
        'Voks/retning af bryn, samt farve af bryn og vipper (mindre end 6 uger imellem)',
      description: '',
      price: 295,
      duration: 35,
      active: true,
    },
    {
      title: 'Voks af bryn (mere end 6 uger imellem)',
      description: '',
      price: 185,
      duration: 30,
      active: true,
    },
    {
      title: 'Voks/Retning af bryn -  (mindre end 6 uger imellem)',
      description: '',
      price: 145,
      duration: 20,
      active: true,
    },
    {
      title: 'Farve af vipper',
      description: '',
      price: 135,
      duration: 15,
      active: true,
    },
    {
      title: 'Farve af bryn',
      description: '',
      price: 135,
      duration: 15,
      active: true,
    },
  ];

  const faceServives = [
    {
      title: 'Japansk Lifting med et ekstra touch - 90 min',
      description: '',
      price: 775,
      duration: 90,
      active: true,
    },
    {
      title: 'Japansk Lifting - 60 min',
      description: '',
      price: 575,
      duration: 60,
      active: true,
    },
    {
      title: 'Gua Sha - 30 min',
      description: '',
      price: 350,
      duration: 30,
      active: false,
    },
    {
      title: 'Gua Sha - 60 min',
      description: '',
      price: 595,
      duration: 60,
      active: false,
    },
  ];

  const waxServices = [
    {
      title: 'Voks af halve ben inkl. knæ',
      description: '',
      price: 295,
      duration: 30,
      active: true,
    },
    {
      title: 'Voks af ryg',
      description: '',
      price: 295,
      duration: 30,
      active: true,
    },
    {
      title: 'Voks af arme',
      description: '',
      price: 295,
      duration: 30,
      active: true,
    },
    {
      title: 'Voks af armhuler',
      description: '',
      price: 160,
      duration: 20,
      active: true,
    },
    {
      title: 'Voks af overlæbe og hage',
      description: '',
      price: 160,
      duration: 20,
      active: true,
    },
    {
      title: 'Voks af kinder/kæbe',
      description: '',
      price: 160,
      duration: 20,
      active: true,
    },
    {
      title: 'Voks af næsebor',
      description: '',
      price: 95,
      duration: 15,
      active: true,
    },
    {
      title: 'Voks af overlæbe',
      description: '',
      price: 95,
      duration: 15,
      active: true,
    },
    {
      title: 'Voks af hage',
      description: '',
      price: 95,
      duration: 15,
      active: true,
    },
  ];

  const additionalServices = [
    {
      title: 'Farve af bryn i forbindelse med anden behandling',
      description: '',
      price: 80,
      duration: 10,
      active: true,
    },
    {
      title: 'Farve af vipper i forbindelse med anden behandling',
      description: '',
      price: 80,
      duration: 10,
      active: true,
    },
    {
      title: 'Stillebehandling',
      description: '',
      price: 0,
      duration: 10,
      active: true,
    },
    {
      title:
        'Browmapping eksl. ret og farve, i forbindelse med med anden behandling',
      description: '',
      price: 75,
      duration: 10,
      active: true,
    },
    {
      title: 'Retning af bryn i forbindelse med anden behandling',
      description: '',
      price: 100,
      duration: 10,
      active: true,
    },
    {
      title: 'Bright Eyed Hydrogel Mask',
      description: '',
      price: 30,
      duration: 0,
      active: true,
    },
    {
      title: 'Gua Sha',
      description: '',
      price: 250,
      duration: 30,
      active: false,
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
                Lashlift og Browlift
              </h3>
            </div>
          </div>
          <div
            className="space-y-2 mt-4"
            aria-label="Oversigt over behandlinger inden for Bryn og vipper inkl. priser"
          >
            {lashServices.map((service, index) =>
              service.active ? (
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
                    <p className="ml-10 text-gray-600">{service.price},-</p>
                  </div>
                </div>
              ) : (
                ''
              )
            )}

            <div className="flex">
              <div className="mt-8">
                <h3 className="text-lg sm:text-2xl font-bold leading-6 text-lash-pink-600">
                  Bryn og vipper
                </h3>
              </div>
            </div>
            {services.map((service, index) =>
              service.active ? (
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
                    <p className="ml-10 text-gray-600">{service.price},-</p>
                  </div>
                </div>
              ) : (
                ''
              )
            )}

            <div className="flex">
              <div className="mt-8">
                <h3 className="text-lg sm:text-2xl font-bold leading-6 text-lash-pink-600">
                  Ansigtsbehandlinger
                </h3>
              </div>
            </div>
            {faceServives.map((service, index) =>
              service.active ? (
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
                    <p className="ml-10 text-gray-600">{service.price},-</p>
                  </div>
                </div>
              ) : (
                ''
              )
            )}

            <div className="flex">
              <div className="mt-8">
                <h3 className="text-lg sm:text-2xl font-bold leading-6 text-lash-pink-600">
                  Voksbehandlinger
                </h3>
              </div>
            </div>
            {waxServices.map((service, index) =>
              service.active ? (
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
                    <p className="ml-10 text-gray-600">{service.price},-</p>
                  </div>
                </div>
              ) : (
                ''
              )
            )}

            <div className="flex">
              <div className="mt-8">
                <h3 className="text-lg sm:text-2xl font-bold leading-6 text-lash-pink-600">
                  Services, der kun er tillægsservices
                </h3>
              </div>
            </div>
            {additionalServices.map((service, index) =>
              service.active ? (
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
                    <p className="ml-10 text-gray-600">{service.price},-</p>
                  </div>
                </div>
              ) : (
                ''
              )
            )}
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
