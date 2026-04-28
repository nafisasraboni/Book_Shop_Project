import ProductCard from '../components/ProductCard.jsx';
import { categories, products } from '../data/staticData.js';

export default function Products() {
  return (
    <section className="section">
      <div className="section__heading">
        <div>
          <p className="eyebrow">Catalog</p>
          <h1>All Books</h1>
        </div>
        <div className="category-pills" aria-label="Product categories">
          {categories.map((category) => (
            <button key={category} type="button" className={category === 'All' ? 'is-active' : ''}>
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
