import React, { useEffect } from 'react';
import '../styling/home.css'; // Adjust the import path as necessary
import arrowImage from '../media/images/arrow.png';

const Footer = () => {
  // Smooth scroll function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener('click', scrollToTop);
    }
    return () => {
      if (scrollToTopBtn) {
        scrollToTopBtn.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return (
    <footer className="body-small" style={{ backgroundColor: '#D3E75B' }}>
      <p>Copyright © 2024 Nur Gültekin. All rights reserved.</p>
      <span className="arrow">
        <a id="scrollToTopBtn" href="#hero">
          <img src={arrowImage} alt="Scroll to top" />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
