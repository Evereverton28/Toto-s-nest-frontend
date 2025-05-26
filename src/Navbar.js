import React, { useContext, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Login from './login';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const showBackButton = location.pathname !== '/';

  const [showLoginModal, setShowLoginModal] = useState(false);

  const goBackHome = () => {
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.leftSection}>
        <h1 style={styles.title}>Baby Clothes Shop</h1>
        {showBackButton && (
          <button onClick={goBackHome} style={styles.backButton}>
            ← Back to Home
          </button>
        )}
      </div>

      <div style={styles.rightSection}>
        <Link to="/cart" style={styles.cart}>
          🛒 Cart ({totalItems})
        </Link>

        <button
          style={styles.authButton}
          onClick={() => setShowLoginModal(true)}
        >
          Login
        </button>
      </div>

      {showLoginModal && (
        <Login onClose={() => setShowLoginModal(false)} />
      )}
    </nav>
  );
}

const styles = {
  nav: {
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#ffefd5',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#333',
    userSelect: 'none',
  },
  backButton: {
    backgroundColor: '#f5f5dc',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#333',
    transition: 'background-color 0.3s',
  },
  cart: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1.2rem',
  },
  authButton: {
    backgroundColor: '#f5f5dc',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#333',
    transition: 'background-color 0.3s',
  },
};

export default Navbar;
