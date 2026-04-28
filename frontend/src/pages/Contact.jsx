export default function Contact() {
  return (
    <section className="content-page">
      <p className="eyebrow">Contact</p>
      <h1>Send a message to the store</h1>
      <div className="two-column">
        <form className="form-card">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="6" placeholder="Write your message" />
          </label>
          <button className="button" type="button">
            Send Message
          </button>
        </form>
        <aside className="info-panel">
          <h2>Book Shop</h2>
          <p>Mirpur Road, Dhaka</p>
          <p>support@bookshop.test</p>
          <p>+880 1700 000000</p>
        </aside>
      </div>
    </section>
  );
}
