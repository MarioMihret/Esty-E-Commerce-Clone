import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h1>What is Etsy?</h1>
      <div className="testimonial-grid">
        <div className="testimonial-item">
          <h2>A community doing good</h2>
          <p>
            Etsy is a global online marketplace, where people come together to
            make, sell, buy, and collect unique items. We're also a community
            pushing for positive change for small businesses, people, and the
            planet. Here are some of the ways we're making a positive impact,
            together.
          </p>
        </div>
        <div className="testimonial-item">
          <h2>Support independent Creators</h2>
          <p>
            There's no Etsy warehouse – just millions of people selling the
            things they love. We make the whole process easy, helping you connect
            directly with makers to find something extraordinary.
          </p>
        </div>
        <div className="testimonial-item">
          <h2>Peace of mind</h2>
          <p>
            Your privacy is the highest priority of our dedicated team. And if
            you ever need assistance, we are always ready to step in for
            support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;