import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "../styling/home.css";
import "../../App.css";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const scrollToContact = () => {
        if (location.pathname === "/") {
            // If on the home page, scroll to the contact section
            const contactSection = document.getElementById("contact-section");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // If not on the home page, navigate there and scroll after navigation
            navigate("/", { state: { scrollToContact: true } });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll to the contact section after navigating to the home page
    useEffect(() => {
        if (location.state?.scrollToContact) {
            const contactSection = document.getElementById("contact-section");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <header>
            <nav
                className={`navbar ${isScrolled ? "navbar_bg" : ""} flex justify-between items-center py-4 pl-4 lr-8 lg:py-8 lg:px-12`}
            >
                <div className="logo">
                    <Link to="/" className="text-yellow-400 font-bold text-lg">
                        NoraG
                    </Link>
                </div>
                <button
                    className="md:hidden flex flex-col justify-center items-center cursor-pointer z-50 bg-transparent"
                    onClick={toggleMenu}
                >
                    <span className="block w-5 h-0.5 bg-white mb-1"></span>
                    <span className="block w-5 h-0.5 bg-white mb-1"></span>
                    <span className="block w-5 h-0.5 bg-white"></span>
                </button>

                {/* Desktop Navigation Links */}
                <div className={` hidden md:flex md:items-center md:space-x-4 lg:pr-[2vw] `}>
                    <Link to="/AboutPage" className="text-white">
                        About
                    </Link>
                    <div className="relative inline-block text-left">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center text-white focus:outline-none bg-transparent"
                        >
                            Works
                            <span
                                className={`ml-4 transform transition-transform duration-300 ${
                                    isDropdownOpen ? "rotate-180" : ""
                                }`}
                            >
                                ▼
                            </span>
                        </button>

                        {/* Dropdown for "Works" */}
                        <div
                            className={`absolute left-0 z-10 mt-2 w-96 bg-gray-800 rounded-md shadow-lg transform transition-transform duration-300 ease-in-out ${
                                isDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                            }`}
                        >
                            <div className="py-1">
                                {[
                                    { name: "Furhat Robotics", link: "/Furhat", type: "internal" },
                                    { name: "Kapp'n's Catch", link: "/KappnsCatch", type: "internal" },
                                    { name: "LuxeBite", link: "/LuxebiteCaseStudy", type: "internal" },
                                    { name: "FantasyChass", link: "/FantasyChass", type: "internal" },
                                    { name: "Museum App", link: "https://www.academia.edu/84093473/Smart_Museum_App_Prototype", type: "external" },
                                    { name: "Kalmar City Library", link: "https://www.academia.edu/125364534/Digital_Transformation_och_Delaktighet_En_granskande_fallstudie_av_Kalmar_Bibliotek", type: "external" },
                                ].map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.link}
                                        target={item.type === "external" ? "_blank" : "_self"}
                                        className="pl-6 px-4 py-2 text-white hover:bg-gray-700 transition duration-200 ease-in-out flex items-center gap-4"
                                    >
                                        {item.name}
                                        {item.type === "external" && (
                                            <svg
                                                className="ml-2 w-4 h-4"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                stroke="#ffffff"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 1 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className="cta-button text-black" onClick={scrollToContact}>
                        Say Hi!
                    </button>
                </div>

                {/* Mobile Navigation Links (within Hamburger Menu) */}
                <div
                    className={` absolute top-full p-4 right-0 w-svw bg-gray-800 md:hidden space-y-4 transition-transform duration-300 ease-in-out transform flex flex-col justify-left ${
                        isMenuOpen
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                    }`}
                    style={{ maxWidth: "70vw" }}
                >
                    <Link to="/AboutPage" className="text-white p-4 w-full" onClick={toggleMenu}>
                        About
                    </Link>
                    <button
                        onClick={toggleDropdown}
                        className="text-white p-4 w-full flex items-center focus:outline-none bg-transparent justify-between"
                    >
                        Works
                        <span
                            className={`transform transition-transform duration-300 ${
                                isDropdownOpen ? "rotate-180" : ""
                            }`}
                        >
                            ▼
                        </span>
                    </button>

                    {/* Dropdown for "Works" in Mobile Menu */}
                    <div
                        className={`relative left-0 right-0 mx-auto mt-2 w-3/4 h-auto bg-gray-600 rounded-md shadow-lg transition-all duration-300 ease-in-out transform ${
                            isDropdownOpen
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                        }`}
                        style={{
                            display: isDropdownOpen ? "block" : "none",
                        }}
                    >
                        <div className="py-1 flex flex-col">
                            {[
                                { name: "Furhat Robotics", link: "/Furhat", type: "internal" },
                                { name: "Kapp'n's Catch", link: "/KappnsCatch", type: "internal" },
                                { name: "LuxeBite", link: "/LuxebiteCaseStudy", type: "internal" },
                                { name: "Museum App", link: "https://www.academia.edu/84093473/Smart_Museum_App_Prototype", type: "external" },
                                { name: "Kalmar City Library", link: "https://www.academia.edu/125364534/Digital_Transformation_och_Delaktighet_En_granskande_fallstudie_av_Kalmar_Bibliotek", type: "external" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.link}
                                    target={item.type === "external" ? "_blank" : "_self"}
                                    className="pl-6 px-4 py-2 text-white hover:bg-gray-700 transition duration-200 ease-in-out flex items-center"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <button className="cta-button text-black mt-2" onClick={scrollToContact}>
                        Say Hi!
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default NavigationBar;
