import React from 'react';
import "./About_Us.css";
import Navbar from '../components/Navbar.jsx';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            
            <div className="about-us-title">
                <h1>About Us</h1>
            </div>
            <div className="about-us-content">
                <p className="highlight-text">Our team helps parents succeed with game selection</p>
                <p>At our company, we believe in the power of social media to drive results and grow businesses. That's why we've brought together a team of experts who are passionate about helping our clients succeed online.</p>
                <div className="team-section">
                    <div className="team-member">
                        <img src={`${process.env.PUBLIC_URL}/TeamMember1.jpg`} alt="Sophie Schrödinger" />
                        <div className="member-info">
                            <h3>Sophie Schrödinger</h3>
                            <p>Psychologist</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={`${process.env.PUBLIC_URL}/TeamMember2.jpg`} alt="Ruben Martinsen" />
                        <div className="member-info">
                            <h3>Ruben Martinsen</h3>
                            <p>Sr. Game Developer</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={`${process.env.PUBLIC_URL}/TeamMember3.jpg`} alt="Olivia Wilson" />
                        <div className="member-info">
                            <h3>Olivia Smith</h3>
                            <p>Sr. Graphic Designer</p>
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
