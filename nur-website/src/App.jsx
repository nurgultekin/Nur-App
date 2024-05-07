import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './assets/components/NavBar';
import About from './assets/components/About';
import Contact from './assets/components/Contact';
import HeroSection from './assets/components/Hero'; 
import CaseStudySlider from './assets/components/Slider';
import Animation from './assets/components/Animation';

import 'tailwindcss/tailwind.css';
import './assets/styling/home.css';


const App = () => {
  return (
    <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
};

const Home = () => { 
  return(
  <div>
    <Animation />
    <HeroSection />
    <CaseStudySlider />
  </div>
  )
};

export default App;
