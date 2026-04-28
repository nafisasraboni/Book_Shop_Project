import { Link } from 'react-router-dom';
import { formatPrice, products } from '../data/staticData.js';

export default function ManageProducts() {
  return (
    <section className="admin-page">
      <div className="section__heading">
        <div>
          <p className="eyebrow">Admin</p>
          <h1>Manage Products</h1>
        </div>
        <Link className="button button--small" to="/admin/products/add">
          Add Product
        </Link>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Book</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td data-label="Book">
                  <div className="table-product">
                    <img src={product.image} alt={`${product.title} cover`} />
                    <span>{product.title}</span>
                  </div>
                </td>
                <td data-label="Category">{product.category}</td>
                <td data-label="Price">{formatPrice(product.price)}</td>
                <td data-label="Stock">{product.stock}</td>
                <td data-label="Action">
                  <Link className="table-link" to={`/admin/products/${product.id}/edit`}>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
