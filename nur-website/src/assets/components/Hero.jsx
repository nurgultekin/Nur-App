import { useEffect } from "react";
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

        return () => {
            selectedCases.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className="hero-container">
            <div>
                <h1 className="hero-title">
                    Hello, <br />
                    <span className="text-9xl xl:text-[12rem] lg:leading-normal xl:leading-tight">World!</span>
                </h1>
            </div>

            <div>
                <p className="hero-text text-white text-shadow font-semibold text-xl md:text-2xl leading-loose font-sans text-left max-w-3xl">
                    I am <span className="name">Nur Gültekin</span>, front-end software developer and UX designer who draws great inspiration from arts, games, and nature. My passion is creating interactive technologies for optimal user experience and accessibility. 
                </p>
            </div>

            <div className="selected-cases" id="selected-cases">
                Selected Cases
                <span className="arrow-down"></span>
            </div>
        </div>
    );
};

export default HeroSection;
