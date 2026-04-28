import { orders } from '../data/staticData.js';

export default function MyOrders() {
  return (
    <section className="content-page">
      <p className="eyebrow">Orders</p>
      <h1>My Orders</h1>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Items</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.slice(0, 2).map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.items.join(', ')}</td>
                <td>
                  <span className="status-pill">{order.status}</span>
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
