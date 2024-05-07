import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            {/* Navigation Bar */}
            <nav className="navbar relative z-50">
                <div className="logo flex-1">
                    <Link to="/" className="text-yellow-400 font-bold text-lg md:text-2xl font-titan-one">
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
                <div className={`nav-links ${isMenuOpen ? 'block' : 'hidden'} md:flex md:justify-between md:w-auto w-full`} id="myLinks">
                    <div className="menu md:flex md:mr-4">
                        <Link to="/about" className="text-white text-lg md:text-xl font-semibold mr-4 md:mr-8">About</Link>
                        <Link to="/works" className="text-white text-lg md:text-xl font-semibold">Works</Link>
                    </div>
                    <Link to="/contact" className="cta-button text-black bg-yellow-400 px-4 py-2 md:text-lg font-semibold rounded-full mt-4 md:mt-0">
                        Say Hi!
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default NavigationBar;
