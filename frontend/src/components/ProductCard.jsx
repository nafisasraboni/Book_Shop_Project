import { Link } from 'react-router-dom';
import { formatPrice } from '../data/staticData.js';

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-card__media">
        <img src={product.image} alt={`${product.title} cover`} loading="lazy" />
      </Link>
      <div className="product-card__body">
        <p className="eyebrow">{product.category}</p>
        <h2>{product.title}</h2>
        <p className="muted">by {product.author}</p>
        <div className="product-card__footer">
          <strong>{formatPrice(product.price)}</strong>
          <Link className="button button--small" to={`/products/${product.id}`}>
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
