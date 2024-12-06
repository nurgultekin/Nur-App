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
        <div className="flex flex-col justify-center items-center mb-0 pt-8 md:pt-24 px-4 lg:px-24 h-full
">
            <div>
                <h1 className="text-4xl md:text-6xl lg:text-[3.5rem] xl:text-[6rem] text-[#CDE82B] font-titan tracking-wide text-center mb-5 z-[1000] text-stroke">
                    Hello, <br />
                    <span className="text-6xl md:text-9xl lg:text-[9rem] xl:text-[10rem] lg:leading-[100%] xl:leading-[100%]">World!</span>
                </h1>
            </div>

            <div className="w-full max-w-lg sm:max-w-lg lg:max-w-3xl">
                <p className="text-white mx-auto md:ml-12 text-shadow font-roboto font-semibold text-[1rem] md:text-lg lg:text-xl leading-[130%]  text-left">
                    I am <span className=" text-[1.2rem] lg:text-[1.6rem] text-[#b4b459] font-titan leading-normal">Nur</span>, (a.k.a. Nora), a front-end software developer from Istanbul, now based in Stockholm. I draw great inspiration from arts, games, and nature. I enjoy applying my creativity and logical thinking to design and develop interactive technologies that are both enjoyable and usable.  
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
