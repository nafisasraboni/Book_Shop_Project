export default function About() {
  return (
    <section className="content-page">
      <p className="eyebrow">About Us</p>
      <h1>Book Shop serves readers with a simple catalog and dependable ordering.</h1>
      <div className="two-column">
        <div>
          <p>
            The store focuses on practical reading: programming guides, fiction, productivity
            books, finance titles, and everyday favorites collected in one straightforward catalog.
          </p>
          <p>
            Each listing keeps the essentials visible, including the cover, author, price, stock,
            and category, so customers can move from browsing to checkout quickly.
          </p>
        </div>
        <div className="info-panel">
          <h2>Store Values</h2>
          <ul className="check-list">
            <li>Affordable books across useful categories</li>
            <li>Clear stock and price information</li>
            <li>Fast checkout flow for returning customers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
