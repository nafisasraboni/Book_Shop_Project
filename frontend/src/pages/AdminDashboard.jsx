import { Link } from 'react-router-dom';
import { orders, products } from '../data/staticData.js';

export default function AdminDashboard() {
  const revenue = orders.reduce((total, order) => total + order.total, 0);
  const pending = orders.filter((order) => order.status !== 'Delivered').length;

  return (
    <section className="admin-page">
      <div className="section__heading">
        <div>
          <p className="eyebrow">Admin</p>
          <h1>Dashboard</h1>
        </div>
        <Link className="button button--small" to="/admin/products/add">
          Add Product
        </Link>
      </div>
      <div className="stats-grid">
        <article>
          <span>Total Books</span>
          <strong>{products.length}</strong>
        </article>
        <article>
          <span>Total Orders</span>
          <strong>{orders.length}</strong>
        </article>
        <article>
          <span>Pending Orders</span>
          <strong>{pending}</strong>
        </article>
        <article>
          <span>Revenue</span>
          <strong>${revenue.toFixed(2)}</strong>
        </article>
      </div>
      <div className="admin-actions">
        <Link to="/admin/products">Manage Products</Link>
        <Link to="/admin/orders">Manage Orders</Link>
      </div>
    </section>
  );
}
