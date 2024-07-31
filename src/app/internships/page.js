'use client';
import React from 'react';

const Internships = () => {
  return (
    <section className="internships">
      <div className="hero-content">
        <h1>Explore Our Internships</h1>
        <p>Find the perfect internship opportunity to kickstart your career journey.</p>
      </div>
      <div className="internship-listings">
        <div className="card">
          <h2>Internship Title</h2>
          <p>Location: Mumbai</p>
          <p>Description: Brief description of the internship.</p>
          <a href="#apply" className="btn">Apply Now</a>
        </div>
{/* cards */}
      </div>
      <style jsx>{`
        .internships {
          padding: 20px;
        }
        .hero-content {
          text-align: center;
          margin-bottom: 40px;
        }
        .internship-listings {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .card {
          background: #f0f8ff;
          border-radius: 10px;
          padding: 20px;
          width: 300px;
          margin: 10px;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
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
      `}</style>
    </section>
  );
}

export default Internships;
