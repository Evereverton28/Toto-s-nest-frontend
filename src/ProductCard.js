import React, { useContext, useState } from 'react';
import './App.css';
import { CartContext } from './CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`card-container ${flipped ? 'flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="card">
        <div className="card-front">
          <img src={product.image} alt={product.name} className="card-image" />
          <h3>{product.name}</h3>
        </div>
        <div className="card-back">
          <p>{product.description}</p>
          <p><strong>${product.price}</strong></p>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
