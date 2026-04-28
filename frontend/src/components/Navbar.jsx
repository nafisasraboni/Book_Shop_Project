import { NavLink, Link } from 'react-router-dom';
import { currentUser, getCartProducts } from '../data/staticData.js';

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
  const cartCount = getCartProducts().reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="site-header">
      <div className="top-strip">
        <span>Welcome to Online Book Store</span>
        <span>{currentUser.isAuthenticated ? currentUser.email : 'Guest'}</span>
      </div>
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand" to="/">
          <span className="brand__mark">B</span>
          <span>Book Shop</span>
        </Link>

        <div className="nav-links">
          {customerLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <NavLink className="cart-link" to="/cart">
            Cart <span>{cartCount}</span>
          </NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </nav>
      <div className="admin-strip" aria-label="Admin navigation">
        {adminLinks.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === '/admin'}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
