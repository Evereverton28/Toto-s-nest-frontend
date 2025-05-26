import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/250',
    name: 'Cool Sneakers',
    price: 99,
    description: 'Comfortable and stylish sneakers perfect for all seasons.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/250',
    name: 'Stylish Jacket',
    price: 149,
    description: 'Warm and trendy jacket for cold days.',
  },
];

function ProductList() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', padding: '40px' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
