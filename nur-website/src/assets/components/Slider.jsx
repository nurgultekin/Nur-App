import React from "react";
import Slider from "react-slick";
import "../styling/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import luxeBiteImage from "./luxeBite.png";

const CaseStudySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => (
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {/* Slide 1 */}
      <div className="luxebite-container">
        <div className="firstSlide fade">
          <div>
            <img src={luxeBiteImage} alt="Project Image" style={{ width: "451px", height: "auto" }} />
          </div>

          <div className="text-card">
            <h2>LuxeBite</h2>
            <div className="tags-container">
              <div className="tags">
                <div className="tag"><label className="tag-text">UX RESEARCH</label></div>
              </div>
              <div className="tags">
                <div className="tag"><label className="tag-text">UI DESIGN</label></div>
              </div>
              <div className="tags">
                <div className="tag"><label className="tag-text">BRANDING</label></div>
              </div>
            </div>

            <p className="works-text">Collaboratively conducted extensive UX research, designed, and developed a website for a potential food delivery service.</p>
            <div>
              <a href="#seemore" className="secondary-button"><label className="button-text-secondary">Read more</label></a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="luxebite-container">
        <div className="mySlides fade">
          {/* Your slide content goes here */}
        </div>
      </div>

      {/* Slide 3 */}
      <div className="luxebite-container">
        <div className="mySlides fade">
          {/* Your slide content goes here */}
        </div>
      </div>

      {/* Slide 4 */}
      <div className="luxebite-container">
        <div className="mySlides fade">
          {/* Your slide content goes here */}
        </div>
      </div>
    </Slider>
  );
};

// Custom previous arrow component
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="prev" onClick={onClick}>
      &#10094;
    </div>
  );
};

// Custom next arrow component
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="next" onClick={onClick}>
      &#10095;
    </div>
  );
};

export default CaseStudySlider;
