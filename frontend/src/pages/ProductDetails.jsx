import { Link, useParams } from 'react-router-dom';
import { formatPrice, getProductById, products } from '../data/staticData.js';

export default function ProductDetails() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const related = products.filter((item) => item.id !== productId).slice(0, 3);

  if (!product) {
    return (
      <section className="content-page">
        <h1>Book not found</h1>
        <Link className="button" to="/products">
          Back to Products
        </Link>
      </section>
    );
  }

  return (
    <section className="content-page">
      <div className="product-detail">
        <div className="product-detail__image">
          <img src={product.image} alt={`${product.title} cover`} />
        </div>
        <div className="product-detail__content">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="muted">by {product.author}</p>
          <p>{product.description}</p>
          <div className="detail-meta">
            <span>Price: {formatPrice(product.price)}</span>
            <span>Stock: {product.stock}</span>
          </div>
          <div className="hero__actions">
            <Link className="button" to="/cart">
              Add to Cart
            </Link>
            <Link className="button button--ghost" to="/products">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <div className="related-row">
        {related.map((item) => (
          <Link key={item.id} to={`/products/${item.id}`}>
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
