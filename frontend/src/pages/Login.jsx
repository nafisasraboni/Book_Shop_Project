import GoogleAuthCard from '../components/GoogleAuthCard.jsx';

export default function Login() {
  return (
    <section className="auth-page">
      <GoogleAuthCard
        eyebrow="Login"
        title="Customer Login"
        description="Use your Google account to continue to Book Shop."
        footerText="New customer?"
        footerLink="/register"
        footerLinkLabel="Create an account"
      />
    </section>
  );
}
