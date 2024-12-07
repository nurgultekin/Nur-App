/* import React from 'react'; */
import '../styling/home.css';
import nurImage from '../media/images/nurTree.png';
import 'tailwindcss/tailwind.css';
import './Contact.css';
import Github from '../media/images/github.png';
import Linkedin from '../media/images/linkedin.png';


const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
      <div className="w-full"><img src={nurImage} className="max-w-screen object-fill" loading="lazy" alt="Image where Nur appears to bend the tree with her one foot" /></div>
        <p>Eager to connect and collaborate. Let&rsquo;s make things happen!</p>
        <div className=" gap-12 flex justify-center items-baseline">
        {/* Email SVG */}
        <a href="mailto:nur.gultekin1@gmail.com">
            <svg height="2.2rem" viewBox="0 0 600 600" fill="#ffffff" className="pb-1 hover:scale-110 transition-transform duration-200">
              <path d="m 132.50586,39.773437 c -80.786884,0 -147.111329,66.380993 -147.111329,147.175783 v 231.32422 c 0,80.79479 66.324445,147.17578 147.111329,147.17578 h 336.20508 c 80.78688,0 147.11328,-66.38099 147.11328,-147.17578 V 186.94922 c 0,-80.79479 -66.3264,-147.175783 -147.11328,-147.175783 z m 0,84.082033 h 336.20508 c 35.63231,0 63.02929,27.39904 63.02929,63.09375 v 231.32422 c 0,35.69471 -27.39698,63.09375 -63.02929,63.09375 H 132.50586 c -35.63231,0 -63.029298,-27.39904 -63.029298,-63.09375 V 186.94922 c 0,-35.69471 27.396988,-63.09375 63.029298,-63.09375 z" />
              <path d="M 67.464844,81.886719 A 42.041302,42.041302 0 0 0 38.351562,95.591797 42.041302,42.041302 0 0 0 41.162109,154.98047 L 272.31836,365.25195 a 42.045506,42.045506 0 0 0 56.58008,0 L 560.05469,154.98047 a 42.041302,42.041302 0 0 0 2.81054,-59.388673 42.041302,42.041302 0 0 0 -59.38867,-2.808594 L 300.60937,277.31836 97.740234,92.783203 A 42.041302,42.041302 0 0 0 67.464844,81.886719 Z" />
            </svg>
          </a>
          
          {/* LinkedIn SVG */}
          <a href="https://www.linkedin.com/in/nur-g%C3%BCltekin-ab5273bb/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="Nur Gültekin LinkedIn link" className="text-white h-[2.3rem] hover:scale-110 transition-transform duration-200" />
          </a>
          
          {/* GitHub SVG */}
          <a href="https://github.com/nurgultekin" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Nur Gültekin Github link" className="text-white h-[3rem] hover:scale-110 transition-transform duration-200" />            
          </a>
      </div>
      </div>
      
    </section>
  );
};

export default ContactSection;

