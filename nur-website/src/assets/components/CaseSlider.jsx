import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../styling/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import luxeBiteImage from "./luxeBite.png";
import onspotImage from "../media/images/onspot.png";
import Kalmar from "../media/images/kalmar.jpg";
import Portfolio from "../media/images/portfolio.jpg";
import FurhatMockup from "../media/furhat-img.png";
import FantasyChass from "../media/fantasyChass.png";
import KappnCatch from "../media/kappn-catch.png";
import '../../App.css';
import 'tailwindcss/tailwind.css';
import PropTypes from 'prop-types';

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
      <div style={{ textAlign: "center", marginBottom: "120px" }}>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section>
      <Slider {...settings}>

      <div className="slideshow-container">
          <div className="mySlides fade">
            <div style={{width: "50%",
                          height: "90vh",
                          backgroundImage: `url(${FurhatMockup})`,
                          backgroundSize: "contain", 
                          backgroundPositiononspotImage: "center",
                          backgroundRepeat: "no-repeat",}}>
            </div>

            <div className="text-card">
              <h1>Furhat Robotics</h1>
              <div className="tags-container">
                <div className="tags"><label className="tag-text">FRONTEND DEVELOPMENT</label></div>
                <div className="tags"><label className="tag-text">UX DESIGN</label></div>
                <div className="tags"><label className="tag-text">BRANDING</label></div>
              </div>

              <p className="works-text">As the sole frontend developer and UX designer, I designed and built a new website for Furhat Robotics, helped them tailor their brand expression to a new target audience. Additionally, I developed a graphical user interface for their robot software development kit using Freemarker, Java, and Kotlin.</p>
              <div>
                <a href="#seemore" className="secondary-button"><label className="label-small">Read more</label></a>
              </div>
            </div>
          </div>
        </div>

        <div className="slideshow-container">
          <div className="mySlides fade">
            <div style={{width: "50%",
                          height: "90vh",
                          backgroundImage: `url(${FantasyChass})`,
                          backgroundSize: "contain", 
                          backgroundPositiononspotImage: "center",
                          backgroundRepeat: "no-repeat",}}>
            </div>

            <div className="text-card">
              <h1>Fantasy Chass</h1>
              <div className="tags-container">
                <div className="tags"><label className="tag-text">FRONTEND DEVELOPMENT</label></div>
                <div className="tags"><label className="tag-text">UX DESIGN</label></div>
                <div className="tags"><label className="tag-text">USER RESEARCH</label></div>
              </div>

              <p className="works-text">I collaboratively created an interactive, text-based RPG inspired by Dungeons and Dragons. The game&rsquo;s AI acts as the Dungeon Master, guides players through customizable adventures, with options for AI-generated characters. A standout feature is the Stayin&rsquo; Alive scenario, designed for crisis preparedness, which allows players to practice decision-making in simulated emergency situations.</p>
              <div>
                <a href="#seemore" className="secondary-button"><label className="label-small">Read more</label></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div style={{width: "50%",
                          height: "90vh",
                          backgroundImage: `url(${luxeBiteImage})`,
                          backgroundSize: "contain", 
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",}}>
              {/* <img src={luxeBiteImage} alt="Project Image" style={{ width: "100%", maxHeight: "700px" }} /> */}
            </div>

            <div className="text-card">
              <h1>LuxeBite</h1>
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
                <Link to="/LuxebiteCaseStudy" className="secondary-button"><label className="label-small">Read more</label></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="slideshow-container">
          <div className="mySlides fade">
            <div style={{width: "50%",
                          height: "90vh",
                          backgroundImage: `url(${KappnCatch})`,
                          backgroundSize: "contain", 
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",}}>
              {/* <img src={luxeBiteImage} alt="Project Image" style={{ width: "100%", maxHeight: "700px" }} /> */}
            </div>

            <div className="text-card">
              <h1>Kapp&rsquo; n&rsquo;s Catch</h1>
              <div className="tags-container">
                <div className="tags">
                  <div className="tag"><label className="tag-text">FRONTEND DEVELOPMENT</label></div>
                </div>
                <div className="tags">
                  <div className="tag"><label className="tag-text">CODEBASE MANAGEMENT</label></div>
                </div>
              </div>

              <p className="works-text">In this project, I served as the Lead Frontend Developer and Codebase Manager, responsible for implementing dynamic product listings, ensuring responsive design, and managing version control on GitHub to maintain clean, cohesive code integration. I worked closely with the team to deliver a polished, functional web shop within a tight deadline, optimizing both development efficiency and collaborative workflow.</p>
              <div>
                <Link to="/KappnsCatch" className="secondary-button"><label className="label-small">Read more</label></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="slideshow-container">
          <div className="mySlides fade">
            <div style={{width: "50%",
                          height: "90vh",
                          backgroundImage: `url(${onspotImage})`,
                          backgroundSize: "contain", 
                          backgroundPositiononspotImage: "center",
                          backgroundRepeat: "no-repeat",}}>
            </div>

            <div className="text-card">
              <h1>Smart Museum App</h1>
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
                <a href="https://www.academia.edu/84093473/Smart_Museum_App_Prototype"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button">
                  <label className="label-small">Read more</label>
                  </a>
              </div>
            </div>
          </div>
        </div>

        <div className="slideshow-container">
          <div className="mySlides fade">
            <div style={{width: "50%",
                          height: "90vh",
                          backgroundImage: `url(${Portfolio})`,
                          backgroundSize: "contain", 
                          backgroundPositiononspotImage: "center",
                          backgroundRepeat: "no-repeat",}}>
            </div>

            <div className="text-card">
              <h1>My Portfolio Project</h1>
              <div className="tags-container">
                <div className="tags"><label className="tag-text">UX RESEARCH</label></div>
                <div className="tags"><label className="tag-text">UI DESIGN</label></div>
                <div className="tags"><label className="tag-text">BRANDING</label></div>
              </div>

              <p className="works-text">Created my website through the stages of UX research, UI/UX design, user testing, and front-end web development.</p>
              <div>
                <a href="#seemore" className="secondary-button"><label className="label-small">Read more</label></a>
              </div>
            </div>
          </div>
        </div>

        <div className="slideshow-container">
          <div className="mySlides fade">
            <div style={{width: "50%",
                          height: "90vh",
                          backgroundImage: `url(${Kalmar})`,
                          backgroundSize: "contain", 
                          backgroundPositiononspotImage: "center",
                          backgroundRepeat: "no-repeat",}}>
            </div>

            <div className="text-card">
              <h1>Kalmar Library</h1>
              <div className="tags-container">
                <div className="tags"><label className="tag-text">UX RESEARCH</label></div>
                <div className="tags"><label className="tag-text">REQUIREMENT ANALYSIS</label></div>
                <div className="tags"><label className="tag-text">ACCESSIBILITY ANALYSIS</label></div>
              </div>
              <p className="works-text">Collaboratively conducted extensive UX research, designed, and developed a website for a potential food delivery service.</p>
              <a href="https://www.academia.edu/125364534/Digital_Transformation_och_Delaktighet_En_granskande_fallstudie_av_Kalmar_Bibliotek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button">
                  <label className="label-small">Read more</label>
                  </a>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

// Custom arrows with props spread
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      &#10094;
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      &#10095;
    </div>
  );
};

// PropTypes validation for both custom arrow components
CustomPrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default CaseStudySlider;
