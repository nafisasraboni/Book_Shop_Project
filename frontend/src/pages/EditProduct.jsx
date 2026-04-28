import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../data/staticData.js';

export default function EditProduct() {
  const { productId } = useParams();
  const product = getProductById(productId);

  if (!product) {
    return (
      <section className="admin-page">
        <h1>Product not found</h1>
        <Link className="button" to="/admin/products">
          Back to Products
        </Link>
      </section>
    );
  }

  return (
    <section className="admin-page">
      <p className="eyebrow">Admin</p>
      <h1>Edit Product</h1>
      <form className="form-card form-card--wide">
        <label>
          Book Title
          <input type="text" defaultValue={product.title} />
        </label>
        <label>
          Author
          <input type="text" defaultValue={product.author} />
        </label>
        <label>
          Category
          <input type="text" defaultValue={product.category} />
        </label>
        <label>
          Price
          <input type="number" defaultValue={product.price} />
        </label>
        <label>
          Stock
          <input type="number" defaultValue={product.stock} />
        </label>
        <label>
          Image URL
          <input type="url" defaultValue={product.image} />
        </label>
        <label>
          Description
          <textarea rows="5" defaultValue={product.description} />
        </label>
        <button className="button" type="button">
          Update Product
        </button>
      </form>
    </section>
  );
}
