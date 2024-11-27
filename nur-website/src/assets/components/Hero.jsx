import { useEffect } from "react";
import '../styling/home.css';
import 'tailwindcss/tailwind.css';

const HeroSection = () => {
    useEffect(() => {
        const selectedCases = document.getElementById("selected-cases");
        const caseStudies = document.querySelector("#case-studies");

        const handleClick = () => {
            caseStudies.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        selectedCases.addEventListener("click", handleClick);

        return () => {
            selectedCases.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center mb-0 mx-auto pt-48 px-24 h-full
">
            <div>
                <h1 className="text-4xl md:text-6xl lg:text-[4.2rem] xl:text-[6rem] text-[#CDE82B] font-titan tracking-wide text-center mb-5 z-[1000] text-stroke">
                    Hello, <br />
                    <span className="text-7xl md:text-9xl lg:text-[8.625rem] xl:text-[12rem] lg:leading-[100%] xl:leading-[100%]">World!</span>
                </h1>
            </div>

            <div className="max-w-[80vw] lg:max-w-3xl">
                <p className="text-white mx:auto md:ml-12 text-shadow font-semibold text-lg md:text-xl leading-narrow font-sans text-left">
                    I am <span className=" text-[1.2rem] lg:text-[1.6rem] text-[#b4b459] font-titan leading-normal">Nur</span>, (a.k.a. Nora), a front-end software developer who draws great inspiration from arts, games, and nature. My passion is creating interactive technologies for optimal user experience and accessibility. 
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
