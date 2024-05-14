import React from 'react';
import '../styling/home.css';
import nurImage from '../media/images/nurTree.png';

const ContactSection = () => {
  return (
    <section className="contact-container">
      <div>
      <img src={nurImage}></img>
      <p>Eager to connect and collaborate. Let's make things happen!</p>
      </div>
    </section>
  );
};

export default ContactSection;
