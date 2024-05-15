import React from 'react';
import GalataTower from "../media/images/galata.png";
import 'tailwindcss/tailwind.css';
import '../styling/home.css';
import '../../App.css';


const AboutSection = () => {
  return (
    <section className="about-container">
      <section className="about-home" id="about">
        <div className="about-container">
          <div className="about-text-container">
            <h2>I am</h2>
            <div className="about-list">
              <ul className="body-large-white" style={{ listStyleType: 'circle', color: 'whitesmoke'}}>
                <li>a Stockholm-based UX/UI designer and front-end web developer.</li>
                <li>has a huge interest in data analytics.</li>
                <li>from Turkey’s Istanbul, the kingdom of cats, dogs, and seagulls!</li>
                <li>a music enthusiast, amateur photographer, wine lover, and a friend of animals.</li>
                <li>someone who enjoys creating digital products that are of help and joy to others.</li>
              </ul>
            </div>
            <div>
              <a href="#about" className="primary-button-desktop"><label className="label-small">More about me</label></a>
            </div>
          </div>

          <img src={GalataTower} style={{ maxHeight: '70vh', width: 'auto'}} alt="About Image" />
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
