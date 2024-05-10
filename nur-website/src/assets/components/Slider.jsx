import React from "react";
import Slider from "react-slick";
import "../styling/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import luxeBiteImage from "./luxeBite.png";
import onspotImage from "../media/images/onspot.png";
import Kalmar from "../media/images/kalmar.jpg";
import Portfolio from "../media/images/portfolio.jpg";

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
      <div style={{ textAlign: "center", marginBottom: "120px", }}>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section>
    <Slider {...settings}>
      {/* Slide 1 */}
      <div className="slideshow-container">
        <div className="mySlides fade">
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
      <div className="slideshow-container">
        <div className="mySlides fade">
        <div>
        <img src={onspotImage} alt="Project Image" style={{ width: "451px", height: "auto" }} />
        </div>

      <div className="text-card">
        <h2>ArtVenture</h2>
        <div className="tags-container">
          <div className="tags">
            <div className="tag"><label className="tag-text">UX RESEARCH</label></div>
          </div>
          <div className="tags">
            <div className="tag"><label className="tag-text">UI DESIGN</label></div>
          </div>
          <div className="tags">
            <div className="tag"><label className="tag-text">ACADEMIC RESEARCH</label></div>
          </div>
          <div className="tags">
            <div className="tag"><label className="tag-text">UX WRITING</label></div>
          </div>
        </div>

        <p className="works-text">Crafted an innovative application prototype for personalized museum visits, blending UX research, testing, and collaborative paper authorship.</p>
        <div>
          <a href="#seemore" className="secondary-button"><label className="button-text-secondary">Read more</label></a>
        </div>
      </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="slideshow-container">
        <div className="mySlides fade">
        <div>
        <img src={Portfolio} alt="Project Image" style={{ width: "451px", height: "auto" }} />
      </div>

          <div className="text-card">
            <h2>My Portfolio Project</h2>
            <div class="tags-container">
              <div class="tags"><label class="tag-text">UX RESEARCH</label></div>
              <div class="tags"><label class="tag-text">UI DESIGN</label></div>
              <div class="tags"><label class="tag-text">BRANDING</label></div>
            </div>

            <p className="works-text">Created my website through the stages of UX research, UI/UX design, user testing, and front-end web development.</p>
              <div>
                <a href="#seemore" className="secondary-button"><label className="button-text-secondary">Read more</label></a>
              </div>
          </div>
          </div>
        </div>
      

      {/* Slide 4 */}
      <div className="slideshow-container">
  <div className="mySlides fade">
    <div>
      <img src={Kalmar} alt="Project Image" style={{ maxWidth: "451px", height: "auto" }} />
    </div>

    <div className="text-card">
      <h2>Kalmar Library</h2>
      <div className="tags-container">
        <div className="tags"><label className="tag-text">UX RESEARCH</label></div>
        <div className="tags"><label className="tag-text">REQUIREMENT ANALYSIS</label></div>
        <div className="tags"><label className="tag-text">ACCESSIBILITY ANALYSIS</label></div>
      </div>
      <div>
        <p className="works-text">Collaboratively conducted extensive UX research, designed, and developed a website for a potential food delivery service.</p>
        <a href="#seemore" className="secondary-button"><label className="button-text-secondary">Read more</label></a>
      </div>
    </div> {/* text card closing tag */}
  </div> {/* mySlides fade closing tag */}
</div> {/* slideshow container closing tag */}
    </Slider>
    </section>
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
