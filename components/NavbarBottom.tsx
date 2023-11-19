// components/NavbarBottom.tsx
'use client'

const NavbarBottom = () => {

    return (
        <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-lash-pink-600 shadow">
            <div id="tabs" className="flex justify-between">
                <a href="/" className="w-full text-lash-pink-50/95 focus:text-lash-pink-200 hover:text-lash-pink-300/90 justify-center inline-block text-center pt-2 pb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" width={32} height={32} viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                    <span className="tab tab-home block text-xs">Forside</span>
                </a>
                <a href="#" className="w-full text-lash-pink-50/95 focus:text-lash-pink-200 hover:text-lash-pink-300/90 justify-center inline-block text-center pt-2 pb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" width={32} height={32} viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                        <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M15 3v4" />
                        <path d="M7 3v4" />
                        <path d="M3 11h16" />
                        <path d="M18 16.496v1.504l1 1" />
                    </svg>
                    <span className="tab tab-kategori block text-xs">Book</span>
                </a>
                <a href="#" className="w-full text-lash-pink-50/95 focus:text-lash-pink-200 hover:text-lash-pink-300/90 justify-center inline-block text-center pt-2 pb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" width={32} height={32} viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                        <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                    </svg>
                    <span className="tab tab-whishlist block text-xs">Shop</span>
                </a>
                <a href="#" className="w-full text-lash-pink-50/95 focus:text-lash-pink-200 hover:text-lash-pink-300/90 justify-center inline-block text-center pt-2 pb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" width={32} height={32} viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                    <span className="tab tab-account block text-xs">Din konto</span>
                </a>
            </div>
        </section>
    );
};

export default NavbarBottom;