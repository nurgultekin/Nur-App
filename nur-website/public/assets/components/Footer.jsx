import { useEffect } from 'react';
import '../styling/home.css'; 
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
    <footer className="body-small relative bottom-0 mt-auto mb-0 ">
      <p className="my-0 mx-0">Copyright © 2024 Nur Gültekin. All rights reserved.</p>
      <span className="arrow">
        <a id="scrollToTopBtn" href="#hero">
          <img src={arrowImage} alt="Scroll to top" />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
