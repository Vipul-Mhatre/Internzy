'use client';

import React from 'react'

const Hero = () => {
    return (
        <section className="hero">
          <div className="content">
          <h1>Hi, Vipul! 👋</h1>
    <p>Let's help you land your dream career</p><br/>
            <h1>Explore Your Future with Our Internships</h1>
            <p>Discover the best opportunities in various industries and kickstart your career.</p>
            <a href="#internships" className="btn">Find Internships</a>
          </div>
          <style jsx>{`
            .hero {
              height: 60vh;
              background-size: cover;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
            }
            .content {
              text-align: center;
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

export default Hero;
