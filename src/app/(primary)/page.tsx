import Image from 'next/image';
import Hero from '@/components/Hero';
import NavbarBottom from '@/components/NavbarBottom';
import ProductCard, { Product } from '@/components/ProductCard';

const products: Product[] = [
  {
    id: 1,
    name: 'Luksus Vippe Extensions',
    description: 'Få de mest luksuriøse vippe extensions i byen.',
    price: 59.99,
    imageUrl: '/luxury-lashes.jpg',
  },
  {
    id: 2,
    name: 'Naturlige Vippe Serum',
    description: 'Styrk og forlæng dine naturlige vipper med vores serum.',
    price: 29.99,
    imageUrl: '/lash-serum.jpg',
  },
  {
    id: 3,
    name: '3D Silk False Lashes',
    description:
      'Gør dig klar til en aften i byen med vores 3D silk falske vipper.',
    price: 12.99,
    imageUrl: '/3d-lashes.jpg',
  },
  {
    id: 4,
    name: 'Vippe Curler',
    description: 'Få smukke buede vipper med vores lette vippe curler.',
    price: 9.99,
    imageUrl: '/lash-curler.jpg',
  },
  {
    id: 5,
    name: 'Vippe Adhesive Glue',
    description: 'Sikker og pålidelig vippeklæber for en holdbar effekt.',
    price: 7.99,
    imageUrl: '/lash-glue.jpg',
  },
  {
    id: 6,
    name: 'Vippe Adhesive Glue',
    description: 'Sikker og pålidelig vippeklæber for en holdbar effekt.',
    price: 7.99,
    imageUrl: '/lash-glue.jpg',
  },
  {
    id: 7,
    name: 'Vippe Adhesive Glue',
    description: 'Sikker og pålidelig vippeklæber for en holdbar effekt.',
    price: 7.99,
    imageUrl: '/lash-glue.jpg',
  },
  {
    id: 8,
    name: 'Vippe Adhesive Glue',
    description: 'Sikker og pålidelig vippeklæber for en holdbar effekt.',
    price: 7.99,
    imageUrl: '/lash-glue.jpg',
  },
];

const Home = () => {
  return (
    <>
      {/* Inkluder Navbar komponenten */}

      {/* Inkluder Hero komponenten */}
      <Hero />

      {/* Inkluder ProductCard komponenten */}
      {/*<ProductCard products= />*/}

      {/* <NavbarBottom /> */}
    </>
  );
};

export default Home;
