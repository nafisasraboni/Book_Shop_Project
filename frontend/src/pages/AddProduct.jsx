export default function AddProduct() {
  return (
    <section className="admin-page">
      <p className="eyebrow">Admin</p>
      <h1>Add Product</h1>
      <form className="form-card form-card--wide">
        <label>
          Book Title
          <input type="text" placeholder="Book title" />
        </label>
        <label>
          Author
          <input type="text" placeholder="Author name" />
        </label>
        <label>
          Category
          <input type="text" placeholder="Category" />
        </label>
        <label>
          Price
          <input type="number" placeholder="0.00" />
        </label>
        <label>
          Stock
          <input type="number" placeholder="0" />
        </label>
        <label>
          Image URL
          <input type="url" placeholder="https://example.com/book.jpg" />
        </label>
        <label>
          Description
          <textarea rows="5" placeholder="Book description" />
        </label>
        <button className="button" type="button">
          Save Product
        </button>
      </form>
    </section>
  );
}
