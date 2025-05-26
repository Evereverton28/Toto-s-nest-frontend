import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Your cart is empty</h2>
        <Link to="/">Go shopping</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cartItems.map(item => (
          <li
            key={item.id}
            style={{
              marginBottom: '15px',
              borderBottom: '1px solid #ddd',
              paddingBottom: '10px',
            }}
          >
            <h3>{item.name}</h3>
            <p>
              Price: ${item.price} × {item.quantity}
            </p>
            <button onClick={() => removeFromCart(item.id)} style={styles.button}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>

      <button onClick={clearCart} style={{ ...styles.button, backgroundColor: '#f44336' }}>
        Clear Cart
      </button>

      <Link to="/checkout" style={styles.checkoutButton}>
        Proceed to Checkout
      </Link>
    </div>
  );
}

const styles = {
  button: {
    padding: '8px 12px',
    backgroundColor: '#ff7f50',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
  },
  checkoutButton: {
    display: 'inline-block',
    marginTop: '15px',
    marginLeft: '10px',
    padding: '10px 15px',
    backgroundColor: '#4caf50',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Cart;
