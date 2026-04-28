import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <section className="auth-page">
      <form className="auth-card">
        <p className="eyebrow">Login</p>
        <h1>Customer Login</h1>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Password" />
        </label>
        <button className="button" type="button">
          Login
        </button>
        <p>
          New customer? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </section>
  );
}
