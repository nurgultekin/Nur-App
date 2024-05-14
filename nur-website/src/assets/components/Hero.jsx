import React, { useEffect } from "react";
import '../styling/home.css';
import 'tailwindcss/tailwind.css';

const HeroSection = () => {
    useEffect(() => {
        const selectedCases = document.getElementById("selected-cases");
        const slideshowContainer = document.querySelector(".slideshow-container");

        const handleClick = () => {
            slideshowContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        selectedCases.addEventListener("click", handleClick);

        const arrowDown = selectedCases.querySelector(".arrow-down");
        const handleArrowClick = (event) => {
            event.preventDefault();
            slideshowContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };


        return () => {
            selectedCases.removeEventListener("click", handleClick);
            
        };
    }, []);

    return (
        <div className="hero-container">
            <div>
                <h1 className="hero-title">
                    Hello, <br />
                    <span className="text-9xl">World!</span></h1>
            </div>

            <div>
                <p className="hero-text text-white text-shadow font-semibold text-lg md:text-xl font-sans text-center max-w-3/4">
                    I am <span className="name">Nur Gültekin</span>, a data-driven UX/UI designer & web developer who draws great inspiration from music, games, and literature. My passion is creating interactive technologies for optimal user experience and accessibility. I am currently on the look-out for a stimulating and fun workplace that would unleash my creativity and help me grow.</p>
            </div>

            <div className="selected-cases" id="selected-cases">
                Selected Cases
                <span className="arrow-down"></span>
            </div>

        </div>
    );
};

export default HeroSection;
