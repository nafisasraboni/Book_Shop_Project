import GoogleAuthCard from '../components/GoogleAuthCard.jsx';

export default function Register() {
  return (
    <section className="auth-page">
      <GoogleAuthCard
        eyebrow="Register"
        title="Create Account"
        description="Create your Book Shop account with Google sign-in."
        footerText="Already registered?"
        footerLink="/login"
        footerLinkLabel="Login"
      />
    </section>
  );
}
