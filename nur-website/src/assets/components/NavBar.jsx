import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import '../styling/home.css'; // Adjust the import path as necessary

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav className={`navbar ${isScrolled ? 'navbar_bg' : ''} flex justify-between items-center p-4`}>
                <div className="logo">
                    <Link to="/" className="text-yellow-400 font-bold text-lg font-titan-one">
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
                <div className={`nav-links hidden md:flex md:items-center md:space-x-4`}>
                    <Link to="/AboutPage" className="text-white">About</Link>
                    <div className="relative inline-block text-left">
                        <button
                            onClick={toggleDropdown}
                            className="text-white focus:outline-none bg-transparent"
                        >
                            Works
                        </button>
                        {/* Dropdown for "Works" */}
                        {isDropdownOpen && (
                            <div className="absolute left-0 z-10 mt-2 w-48 bg-gray-800 rounded-md shadow-lg transition-opacity duration-200 ease-in-out">
                                <div className="py-1">
                                    {[
                                        { name: 'Captn Catch', link: '/captn-catch' },
                                        { name: 'LuxeBite', link: '/luxebite' },
                                        { name: 'Portfolio Website', link: '/portfolio-website' },
                                        { name: 'Furhat Robotics', link: '/furhat-robotics' },
                                        { name: 'Fantasy Chas', link: '/fantasy-chas' },
                                        { name: 'Museum App', link: '/museum-app' },
                                        { name: 'Kalmar City Library', link: '/kalmar-city-library' },
                                    ].map(item => (
                                        <Link 
                                            key={item.name} 
                                            to={item.link} 
                                            className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-200 ease-in-out"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="cta-button text-black" onClick={scrollToContact}>Say Hi!</button>
                </div>
                {/* Mobile Navigation Links (within Hamburger Menu) */}
                <div className={`nav-links ${isMenuOpen ? 'flex' : 'hidden'} flex-col absolute top-full p-4 right-0 w-3/4 bg-gray-800 md:hidden`} style={{ maxWidth: '70vw' }}>
                    <Link to="/AboutPage" className="text-white py-2" onClick={toggleMenu}>About</Link>
                    <button
                        onClick={toggleDropdown}
                        className="text-white py-2 focus:outline-none bg-transparent"
                    >
                        Works
                    </button>
                    {/* Dropdown for "Works" in Mobile Menu */}
                    {isDropdownOpen && (
                        <div className="relative z-10 ml-40 mt-2 mb-2 w-2/4 bg-gray-600 rounded-md shadow-lg transition-opacity duration-200 ease-in-out">
                            <div className="py-1 flex flex-col ">
                                {[
                                    { name: 'Captn Catch', link: '/captn-catch' },
                                    { name: 'LuxeBite', link: '/luxebite' },
                                    { name: 'Portfolio Website', link: '/portfolio-website' },
                                    { name: 'Furhat Robotics', link: '/furhat-robotics' },
                                    { name: 'Fantasy Chas', link: '/fantasy-chas' },
                                    { name: 'Museum App', link: '/museum-app' },
                                    { name: 'Kalmar City Library', link: '/kalmar-city-library' },
                                ].map(item => (
                                    <Link 
                                        key={item.name} 
                                        to={item.link} 
                                        className="block pl-6 px-4 py-2 text-white hover:bg-gray-700 transition duration-200 ease-in-out"
                                        onClick={toggleMenu} // Close the menu on link click
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                    <button className="cta-button text-black py-2 mt-2 mr-4" onClick={scrollToContact}>Say Hi!</button>
                </div>
            </nav>
        </header>
    );
};

export default NavigationBar;
