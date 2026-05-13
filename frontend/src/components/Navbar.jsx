import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { getCartProducts } from '../data/staticData.js';

const customerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
  { to: '/my-orders', label: 'My Orders' },
];

const adminLinks = [
  { to: '/admin', label: 'Dashboard' },
  { to: '/admin/products', label: 'Products' },
  { to: '/admin/orders', label: 'Orders' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAdmin, isAuthenticated, isLoading, logout, user } = useAuth();
  const cartCount = getCartProducts().reduce((total, item) => total + item.quantity, 0);
  const closeMenu = () => setIsMenuOpen(false);
  const accountLabel = isLoading ? 'Checking account...' : user?.email || 'Guest';

  const handleLogout = async () => {
    await logout();
    closeMenu();
  };

  return (
    <header className={`site-header${isMenuOpen ? ' site-header--open' : ''}`}>
      <div className="top-strip">
        <span>Welcome to Online Book Store</span>
        <span>{accountLabel}</span>
      </div>
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand__mark">B</span>
          <span>Book Shop</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="site-menu"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav-links" id="site-menu">
          {customerLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <NavLink className="cart-link" to="/cart" onClick={closeMenu}>
            Cart <span>{cartCount}</span>
          </NavLink>
          {isAuthenticated ? (
            <button className="nav-action-button" type="button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" onClick={closeMenu}>
                Login
              </NavLink>
              <NavLink to="/register" onClick={closeMenu}>
                Register
              </NavLink>
            </>
          )}
        </div>
      </nav>
      {isAdmin && (
        <div className="admin-strip" aria-label="Admin navigation">
          {adminLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/admin'} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
