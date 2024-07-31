'use client';
import React from 'react';

const Jobs = () => {
  return (
    <section className="jobs">
      <div className="hero-content">
        <h1>Explore Job Opportunities</h1>
        <p>Find your next career move with our curated list of job openings.</p>
      </div>
      <div className="job-listings">
        <div className="card">
          <h2>Job Title</h2>
          <p>Location: Pune</p>
          <p>Description: Brief description of the job.</p>
          <a href="#apply" className="btn">Apply Now</a>
        </div>
{/*cards*/}
      </div>
      <style jsx>{`
        .jobs {
          padding: 20px;
        }
        .hero-content {
          text-align: center;
          margin-bottom: 40px;
        }
        .job-listings {
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

export default Jobs;
