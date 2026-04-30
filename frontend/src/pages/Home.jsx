import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import SubscribePopup from '../components/SubscribePopup.jsx';
import { products } from '../data/staticData.js';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && <SubscribePopup onClose={handleClosePopup} />}

      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Online Book Store</p>
          <h1>Find your next favorite book</h1>
          <p>
            Browse programming guides, fiction, productivity titles, and practical reads from a
            simple book shop catalog.
          </p>

          <div className="hero__actions">
            <Link className="button" to="/products">
              Shop Books
            </Link>
            <Link className="button button--ghost" to="/about">
              About Store
            </Link>
          </div>
        </div>

        <div className="hero__shelf" aria-label="Featured book covers">
          {products.slice(0, 3).map((product) => (
            <img key={product.id} src={product.image} alt={`${product.title} cover`} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <div>
            <p className="eyebrow">Featured</p>
            <h2>Latest Books</h2>
          </div>
          <Link to="/products">View all</Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}