import React from 'react';
import './Footer.css';
import foot1 from "../../assets/R.png";
import foot3 from '../../assets/OIP.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>We are a leading ecommerce platform, providing quality products and excellent customer service.</p>
            <ul className="social-links">
              <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <p>Sign up for our newsletter to get the latest updates and offers.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          <div className="payment-methods">
            <img src={foot1} alt="Visa" />
            <img src={foot3} alt="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;