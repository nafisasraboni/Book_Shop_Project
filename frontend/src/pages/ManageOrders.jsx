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
                <td data-label="Order ID">{order.id}</td>
                <td data-label="Customer">{order.customer}</td>
                <td data-label="Email">{order.email}</td>
                <td data-label="Date">{order.date}</td>
                <td data-label="Status">
                  <select defaultValue={order.status} aria-label={`Status for ${order.id}`}>
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>
                <td data-label="Total">${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
