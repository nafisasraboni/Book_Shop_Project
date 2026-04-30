import "./SubscribePopup.css";
import { useState } from "react";

export default function SubscribePopup({ onClose }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscribed: " + email);
    onClose(); // close popup
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>


        <h2>Get 20% Off on your 1st book purchase</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="subscribe-btn" type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}