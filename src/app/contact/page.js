'use client';
import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <div className="hero-content">
        <h1>Contact Us</h1>
        <p>We're here to help! Get in touch with us for any inquiries or support.</p>
      </div>
      <div className="contact-details">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
        <div className="company-info">
          <p>Email: support@internzy.com</p>
          <p>Phone: +91 0123456789</p>
          <p>Address: 123 A Street, Mumbai, India</p>
          <div className="social-media">
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact {
          padding: 20px;
        }
        .hero-content {
          text-align: center;
          margin-bottom: 40px;
        }
        .contact-details {
          display: flex;
          justify-content: space-around;
        }
        .contact-form {
          flex: 1;
          display: flex;
          flex-direction: column;
          max-width: 500px;
        }
        .contact-form input,
        .contact-form textarea {
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .contact-form textarea {
          height: 100px;
        }
        .btn {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          cursor: pointer;
        }
        .btn:hover {
          background-color: #005bb5;
        }
        .company-info {
          flex: 1;
          text-align: left;
          margin-left: 20px;
        }
        .social-media {
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
}

export default Contact;
