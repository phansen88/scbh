import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-book-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Siden kunne ikke findes
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Undskyld, siden kodes stadig.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-lash-pink-500 px-5 py-5 text-md font-semibold text-white shadow-sm hover:bg-lash-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-book-600"
            >
              Gå tilbage til forsiden
            </Link>
            {/*
            <a href="/" className="text-md font-semibold text-gray-900">
              Kontakt support <span aria-hidden="true">&rarr;</span>
  </a> */}
          </div>
        </div>
      </main>
    </>
  );
}
