import { Link } from 'react-router-dom';
import { formatPrice, getCartProducts } from '../data/staticData.js';

export default function Cart() {
  const items = getCartProducts();
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = items.length > 0 ? 5 : 0;
  const total = subtotal + shipping;

  return (
    <section className="content-page">
      <p className="eyebrow">Shopping Cart</p>
      <h1>Your Cart</h1>
      <div className="cart-layout">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Book</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td data-label="Book">
                    <div className="table-product">
                      <img src={item.image} alt={`${item.title} cover`} />
                      <span>{item.title}</span>
                    </div>
                  </td>
                  <td data-label="Price">{formatPrice(item.price)}</td>
                  <td data-label="Qty">{item.quantity}</td>
                  <td data-label="Total">{formatPrice(item.price * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="summary-box">
          <h2>Cart Summary</h2>
          <p>
            <span>Subtotal</span>
            <strong>{formatPrice(subtotal)}</strong>
          </p>
          <p>
            <span>Shipping</span>
            <strong>{formatPrice(shipping)}</strong>
          </p>
          <p className="summary-box__total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </p>
          <Link className="button" to="/checkout">
            Proceed to Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}
