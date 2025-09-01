import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact us: example@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
