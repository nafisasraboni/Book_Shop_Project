import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <section className="success-page">
      <div className="success-box">
        <p className="eyebrow">Order Placed</p>
        <h1>Thank you for your purchase.</h1>
        <p>Your order has been received and is now waiting for confirmation.</p>
        <div className="hero__actions">
          <Link className="button" to="/my-orders">
            View Orders
          </Link>
          <Link className="button button--ghost" to="/products">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
