'use client';
import React from 'react';

const Profile = () => {
    return (
        <section className="profile">
            <div className="content">
                <h1>Your Profile</h1>
                <div className="profile-info">
                    <img src="path_to_profile_picture.jpg" alt="Profile Picture" className="profile-pic"/>
                    <p>Name: Vipul Mhatre</p>
                    <p>Email: vipul@gmail.com</p>
                </div>
                <div className="saved-listings">
                    <h2>Saved Internships</h2>
                    <ul>
                        <li>Internship at Company A</li>
                        <li>Internship at Company B</li>
                    </ul>
                    <h2>Application History</h2>
                    <ul>
                        <li>Applied to Job at Company C</li>
                        <li>Applied to Internship at Company D</li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .profile {
                    padding: 20px;
                    background-color: #f0f0f0;
                }
                .content {
                    max-width: 600px;
                    margin: auto;
                    text-align: center;
                }
                .profile-info {
                    text-align: left;
                    margin-top: 20px;
                }
                .profile-pic {
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                }
                .saved-listings {
                    margin-top: 20px;
                    text-align: left;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
                li {
                    background: #fff;
                    padding: 10px;
                    margin: 5px 0;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </section>
    );
}

export default Profile;
