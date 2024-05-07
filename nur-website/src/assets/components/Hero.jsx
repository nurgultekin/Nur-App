import React, { useEffect } from "react";

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

        arrowDown.addEventListener("click", handleArrowClick);

        return () => {
            selectedCases.removeEventListener("click", handleClick);
            arrowDown.removeEventListener("click", handleArrowClick);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center p-0 w-90 mx-auto mb-0">
            <div>
                <h1 className="text-yellow-400 font-bold text-5xl md:text-7xl font-titan-one text-center mb-20">
                    Hello, <br />
                    <span className="text-9xl">World!</span></h1>
            </div>

            <div>
                <p className="text-white text-shadow font-semibold text-lg md:text-xl font-sans text-center max-w-3/4">
                    I am <span className="text-2xl bg-pink-300">Nur Gültekin</span>, a data-driven UX/UI designer & web developer who draws great inspiration from music, games, and literature. My passion is creating interactive technologies for optimal user experience and accessibility. I am currently on the look-out for a stimulating and fun workplace that would unleash my creativity and help me grow.</p>
            </div>

            <div className="selected-cases" id="selected-cases">
                Selected Cases
                <span className="arrow-down"></span>
            </div>

        </div>
    );
};

export default HeroSection;
