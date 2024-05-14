import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="logo">
                    <Link to="/" className="text-yellow-400 font-bold text-lg font-titan-one">
                        NurG
                    </Link>
                </div>
                <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-menu hidden"
                    checked={isMenuOpen}
                    onChange={toggleMenu}
                />
                <label htmlFor="toggle" className="hamburger cursor-pointer">
                    <span className="block w-5 h-0.5 bg-white mb-1"></span>
                    <span className="block w-5 h-0.5 bg-white mb-1"></span>
                    <span className="block w-5 h-0.5 bg-white"></span>
                </label>
                <div className={`nav-links ${isMenuOpen ? 'block' : 'display'}`}>
                    <div className="menu">
                        <Link to="/AboutPage" className="text-white">About</Link>
                        <Link to="/works" className="text-white">Works</Link>
                    </div>
                    <button className="cta-button" onClick={scrollToContact}>Say Hi!</button>
                </div>
            </nav>
        </header>
    );
};

export default NavigationBar;
