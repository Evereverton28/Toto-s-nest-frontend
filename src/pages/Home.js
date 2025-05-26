import React from 'react';
import ProductList from '../ProductList';

function Home() {
  const products = [
    {
      id: 1,
      name: 'Baby Onesie',
      price: 15,
      image: 'https://via.placeholder.com/150?text=Onesie'
    },
    {
      id: 2,
      name: 'Baby Hat',
      price: 8,
      image: 'https://via.placeholder.com/150?text=Hat'
    },
    {
      id: 3,
      name: 'Baby Socks',
      price: 5,
      image: 'https://via.placeholder.com/150?text=Socks'
    },
  ];

  return (
    <div>
      <h2>Featured Products</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
