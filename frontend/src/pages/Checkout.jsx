import { Link } from 'react-router-dom';
import { formatPrice, getCartProducts } from '../data/staticData.js';

export default function Checkout() {
  const items = getCartProducts();
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 5;
  const total = subtotal + shipping;

  return (
    <section className="content-page">
      <p className="eyebrow">Checkout</p>
      <h1>Billing Details</h1>
      <div className="checkout-layout">
        <form className="form-card">
          <label>
            Full Name
            <input type="text" defaultValue="Admin Reader" />
          </label>
          <label>
            Email
            <input type="email" defaultValue="admin@bookshop.test" />
          </label>
          <label>
            Phone
            <input type="tel" placeholder="+880" />
          </label>
          <label>
            Address
            <textarea rows="5" placeholder="Delivery address" />
          </label>
          <Link className="button" to="/order-success">
            Place Order
          </Link>
        </form>
        <aside className="summary-box">
          <h2>Order Summary</h2>
          {items.map((item) => (
            <p key={item.id}>
              <span>
                {item.title} x {item.quantity}
              </span>
              <strong>{formatPrice(item.price * item.quantity)}</strong>
            </p>
          ))}
          <p>
            <span>Shipping</span>
            <strong>{formatPrice(shipping)}</strong>
          </p>
          <p className="summary-box__total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </p>
        </aside>
      </div>
    </section>
  );
}
