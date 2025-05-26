import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const products = [
  {
    id: 1,
    name: 'Baby Onesie',
    price: 15,
    image: 'https://via.placeholder.com/300?text=Onesie',
    description: 'Soft cotton onesie, perfect for newborns.'
  },
  {
    id: 2,
    name: 'Baby Hat',
    price: 8,
    image: 'https://via.placeholder.com/300?text=Hat',
    description: 'Cozy hat to keep your baby warm.'
  },
  {
    id: 3,
    name: 'Baby Socks',
    price: 5,
    image: 'https://via.placeholder.com/300?text=Socks',
    description: 'Cute and soft socks for tiny feet.'
  },
];

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    padding: '20px',
    alignItems: 'flex-start',
  },
  image: {
    width: '300px',
    borderRadius: '10px',
  }
};

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div>
        <h2>{product.name}</h2>
        <p><strong>Price:</strong> ${product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <br /><br />
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}

export default ProductDetails;
