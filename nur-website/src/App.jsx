import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import NavigationBar from './assets/components/NavBar';
import About from './assets/components/About';
import Contact from './assets/components/Contact';
import HeroSection from './assets/components/Hero'; 
import Slider from './assets/components/Slider';

import 'tailwindcss/tailwind.css';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/todos" element={<TodoPage />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const Home = () => (
  <div>
    <HeroSection />
    <Slider />
    <SectionScrolls />
  </div>
);

const SectionScrolls = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-transparent backdrop-filter backdrop-blur-sm">
      <nav className="flex items-center justify-between py-4 px-6">
        <div className="flex items-center justify-start space-x-10">
          <div className="flex-shrink-0">
            <Link to="/" className="text-yellow-500 text-lg font-medium tracking-wide">Your Logo</Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/about" className="text-white hover:text-gray-200">About</Link>
            <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-white bg-yellow-500 py-2 px-4 rounded-lg hover:bg-yellow-400">CTA Button</button>
        </div>
        <div className="md:hidden">
          <input type="checkbox" id="toggle-menu" className="hidden" />
          <label htmlFor="toggle-menu" className="block cursor-pointer md:hidden">
            <div className="hamburger"></div>
          </label>
          <div className="menu">
            <Link to="/about" className="block py-2 px-4 text-white hover:text-gray-200">About</Link>
            <Link to="/contact" className="block py-2 px-4 text-white hover:text-gray-200">Contact</Link>
            <button className="block py-2 px-4 bg-yellow-500 text-white hover:bg-yellow-400 rounded-lg">CTA Button</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
