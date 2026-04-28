import { orders } from '../data/staticData.js';

export default function ManageOrders() {
  return (
    <section className="admin-page">
      <p className="eyebrow">Admin</p>
      <h1>Manage Orders</h1>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.email}</td>
                <td>{order.date}</td>
                <td>
                  <select defaultValue={order.status} aria-label={`Status for ${order.id}`}>
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>
                <td>${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
