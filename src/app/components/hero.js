'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1>Hi, Vipul! 👋</h1>
        <p>Let's help you land your dream career</p>
        <br />
        <h1>Explore Your Future with Our Internships</h1>
        <p>Discover the best opportunities in various industries and kickstart your career.</p>
        <a href="#internships" className="btn">Find Internships</a>
      </div>
      <div className="cards">
        <div className="card">
          <h2>Internships in Mumbai</h2>
          <p>Explore top internships in Mumbai, the city of dreams. Opportunities in various industries await you!</p>
          <a href="#mumbai-internships" className="card-btn">Learn More</a>
        </div>
        <div className="card">
          <h2>Internships in Thane</h2>
          <p>Discover exciting internships in Thane. Gain valuable experience in a rapidly growing area.</p>
          <a href="#thane-internships" className="card-btn">Learn More</a>
        </div>
        <div className="card">
          <h2>Internships in Pune</h2>
          <p>Find internships in Pune, a city known for its educational institutions and tech hubs.</p>
          <a href="#pune-internships" className="card-btn">Learn More</a>
        </div>
      </div>
      <style jsx>{`
        .hero {
          height: 60vh;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
          flex-direction: column;
          padding: 20px;
        }
        .content {
          text-align: center;
          margin-bottom: 20px;
        }
        .btn {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          text-decoration: none;
        }
        .btn:hover {
          background-color: #005bb5;
        }
        .cards {
          display: flex;
          justify-content: space-around;
          width: 100%;
          max-width: 1200px;
        }
        .card {
          background: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 30%;
          padding: 20px;
          text-align: left;
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .card h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .card p {
          font-size: 1rem;
          margin-bottom: 15px;
          color: #555;
        }
        .card-btn {
          padding: 10px 15px;
          background-color: #0070f3;
          color: white;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
        }
        .card-btn:hover {
          background-color: #005bb5;
        }
      `}</style>
    </section>
  );
}

export default Hero;
