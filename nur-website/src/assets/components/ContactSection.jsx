import React from 'react';
import '../styling/home.css';
import nurImage from '../media/images/nurTree.png';
import 'tailwindcss/tailwind.css';

const ContactSection = () => {
  return (
    <section id="contact-section">
      <div>
      <img src={nurImage}></img>
      <p>Eager to connect and collaborate. Let's make things happen!</p>
      </div>
    </section>
  );
};

export default ContactSection;
