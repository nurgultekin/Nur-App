import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './assets/components/NavBar';
import Footer from './assets/components/Footer';
import AboutSection from './assets/components/AboutSection';
import AboutPage from './assets/components/AboutPage';
import ContactSection from './assets/components/ContactSection';
import HeroSection from './assets/components/Hero'; 
import Animation from './assets/components/Animation';
import SkillsCredentials from './assets/components/Skills';
import SideProjects from './assets/components/Sideprojects';
import CaseStudySlider from './assets/components/CaseSlider';
import LuxeBite from './assets/components/CaseStudy1'; 
import 'tailwindcss/tailwind.css';
import './assets/styling/home.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactSection" element={<ContactSection />} />
        <Route path="/CaseStudy1" element={<LuxeBite />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
};

const Home = () => { 
  return (
    <div>
      <Animation />
      <div>
        <HeroSection />
      </div>
      <div>
        <CaseStudySlider />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <SkillsCredentials />
      </div>
      <div>
        <SideProjects />
      </div>
      <div id="contact-section">
        <ContactSection />
      </div>
    </div>
  );
};

export default App;
