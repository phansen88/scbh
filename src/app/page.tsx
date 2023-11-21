import Image from 'next/image'
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import NavbarBottom from '@/components/NavbarBottom';
import ProductCard, { Product } from '@/components/ProductCard';
import Footer from '@/components/Footer';

const products: Product[] = [
  {
    id: 1,
    name: 'Luksus Vippe Extensions',
    description: 'Få de mest luksuriøse vippe extensions i byen.',
    price: 59.99,
    imageUrl: '/images/luxury-lashes.jpg',
  },
  {
    id: 2,
    name: 'Naturlige Vippe Serum',
    description: 'Styrk og forlæng dine naturlige vipper med vores serum.',
    price: 29.99,
    imageUrl: '/images/lash-serum.jpg',
  },
  {
    id: 3,
    name: '3D Silk False Lashes',
    description: 'Gør dig klar til en aften i byen med vores 3D silk falske vipper.',
    price: 12.99,
    imageUrl: '/images/3d-lashes.jpg',
  },
  {
    id: 4,
    name: 'Vippe Curler',
    description: 'Få smukke buede vipper med vores lette vippe curler.',
    price: 9.99,
    imageUrl: '/images/lash-curler.jpg',
  },
  {
    id: 5,
    name: 'Vippe Adhesive Glue',
    description: 'Sikker og pålidelig vippeklæber for en holdbar effekt.',
    price: 7.99,
    imageUrl: '/images/lash-glue.jpg',
  },
  {
    id: 6,
    name: 'Vippe Adhesive Glue',
    description: 'Sikker og pålidelig vippeklæber for en holdbar effekt.',
    price: 7.99,
    imageUrl: '/images/lash-glue.jpg',
  },
  {
    id: 7,
    name: 'Vippe Adhesive Glue',
    description: 'Sikker og pålidelig vippeklæber for en holdbar effekt.',
    price: 7.99,
    imageUrl: '/images/lash-glue.jpg',
  },
  {
    id: 8,
    name: 'Vippe Adhesive Glue',
    description: 'Sikker og pålidelig vippeklæber for en holdbar effekt.',
    price: 7.99,
    imageUrl: '/images/lash-glue.jpg',
  },
];

const Home = () => {
  return (
    <div className='bg-white pb-16 md:pb-0'>
      {/* Inkluder Navbar komponenten */}
      <Navbar />

      {/* Inkluder Hero komponenten */}
      <Hero />

      {/* Inkluder ProductCard komponenten */}
      {/*<ProductCard products= />*/}

      <Footer />
      <NavbarBottom />
    </div>
  );
};

export default Home;