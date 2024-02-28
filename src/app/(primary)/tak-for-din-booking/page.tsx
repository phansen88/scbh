import Link from 'next/link';

export default function ThankYou() {
  return (
    <>
      <div className="flex justify-center items-center my-8 sm:my-28">
        <div className="grid w-full px-6 py-8 gap-12 sm:gap-16 rounded-xl bg-white/90 text-center">
          <h3 className="text-4xl sm:text-[6rem] leading-tight font-playfair">
            Tak for din booking!
          </h3>
          <p className="text-lg">
            Jeg glæder mig til at give dig en rolig og afslappende behandling.
          </p>
          <Link
            className="text-white bg-curry-500 hover:bg-curry-600/85 font-medium rounded-lg w-56 text-base px-6 py-4 block mx-auto"
            href="/"
          >
            Tilbage til forsiden.
          </Link>
        </div>
      </div>
    </>
  );
}
