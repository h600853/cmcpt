import React from 'react';
import "./About_Us.css"
import Navbar from '../components/Navbar.jsx';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <h1>About Us</h1>
                <p>Our team helps parents succeed with game selection</p>
                <p>At our company, we believe in the power of social media to drive results and grow businesses. That's why we've brought together a team of experts who are passionate about helping our clients succeed online.</p>
                <div className="team-section">
                    <div className="team-member">
                        <img src="path-to-image1" alt="Team Member 1"/>
                    </div>
                    <div className="team-member">
                        <img src="path-to-image2" alt="Team Member 2"/>
                    </div>
                    <div className="team-member">
                        <img src="path-to-image3" alt="Team Member 3"/>
                        <div className="member-info">
                            <h3>Olivia Wilson</h3>
                            <p>POSITION</p>
                        </div>
                    </div>
                </div>
                <div className="scroll-buttons">
                    <button>&lt;</button>
                    <button>&gt;</button>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
