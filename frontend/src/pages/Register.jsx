import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <section className="auth-page">
      <form className="auth-card">
        <p className="eyebrow">Register</p>
        <h1>Create Account</h1>
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Password" />
        </label>
        <button className="button" type="button">
          Register
        </button>
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}
