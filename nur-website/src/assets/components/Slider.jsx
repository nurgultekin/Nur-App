import React, { useState } from 'react';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  return (
    <div className="slideshow-container">
      <div className="projects">
        {/* Previous button */}
        <div className="prev" onClick={prevSlide}>
          &#10094;
        </div>

        {/* Case studies (Luxebite) */}
        <div className="luxebite-container">
          {/* Case study 1 */}
          <div className={`mySlides fade ${slideIndex === 0 ? 'firstSlide' : ''}`}>
            {/* Case study content */}
          </div>

          {/* Case study 2 */}
          <div className={`mySlides fade ${slideIndex === 1 ? 'firstSlide' : ''}`}>
            {/* Case study content */}
          </div>

          {/* Case study 3 */}
          <div className={`mySlides fade ${slideIndex === 2 ? 'firstSlide' : ''}`}>
            {/* Case study content */}
          </div>

          {/* Case study 4 */}
          <div className={`mySlides fade ${slideIndex === 3 ? 'firstSlide' : ''}`}>
            {/* Case study content */}
          </div>
        </div>

        {/* Next button */}
        <div className="next" onClick={nextSlide}>
          &#10095;
        </div>
      </div>

      {/* The dots/circles */}
      <div style={{ textAlign: 'center' }}>
        {[0, 1, 2, 3].map((index) => (
          <span key={index} className={`dot ${slideIndex === index ? 'active' : ''}`} onClick={() => setSlideIndex(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
