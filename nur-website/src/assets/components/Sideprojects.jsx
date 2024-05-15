import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pipelineImage from '../media/images/pipeline.jpg';
import masterWorkflowImage from '../media/images/masterWorkflow.png';
import redditImage from '../media/images/reddit.jpg';
import '../styling/home.css';
import 'tailwindcss/tailwind.css';

const SideProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="other" id="custom-height">
      <h2>Projects outside of UX/UI</h2>
      <Slider {...settings} className="carousel">
        <div className="project-card">
          <div className="project-card-content">
            <div className="project-image-container">
              <img src={pipelineImage} alt="Pipeline" className="project-image" />
            </div>
            <div className="project-info">
              <h4>Sentiment Analysis and Topic Modelling on Twitter Activity of Elon Musk</h4>
              <p>May 2022</p>
              <div className="tags-container">
                <div className="tags"><label className="tag-text">Python</label></div>
                <div className="tags"><label className="tag-text">NLTK</label></div>
                <div className="tags"><label className="tag-text">Topic modelling</label></div>
                <div className="tags"><label className="tag-text">API calls</label></div>
                <div className="tags"><label className="tag-text">Data analysis</label></div>
                <div className="tags"><label className="tag-text">Orange</label></div>
              </div>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <div className="project-image-container">
              <img src={masterWorkflowImage} alt="Master Workflow" className="project-image" />
            </div>
            <div className="project-info">
              <h4>Bridging the Digital Disparities in Sweden: A Discursive Analysis of Swedish Policy Reports on Digital Inclusion</h4>
              <p>Master's Thesis | Published: August 2023</p>
              <div className="tags-container">
                <div className="tags"><label className="tag-text">Qualitative research</label></div>
                <div className="tags"><label className="tag-text">Discourse analysis</label></div>
                <div className="tags"><label className="tag-text">Text mining</label></div>
                <div className="tags"><label className="tag-text">Quantitative research</label></div>
                <div className="tags"><label className="tag-text">Academic writing</label></div>
                <div className="tags"><label className="tag-text">Text vectorization</label></div>
              </div>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-content">
            <div className="project-image-container">
              <img src={redditImage} alt="Reddit" className="project-image" />
            </div>
            <div className="project-info">
              <h4>Data-analysis on Reddit discussion patterns around the Russo-Ukrainian War</h4>
              <p>November 2022</p>
              <div className="tags-container">
                <div className="tags"><label className="tag-text">Python</label></div>
                <div className="tags"><label className="tag-text">API calls</label></div>
                <div className="tags"><label className="tag-text">Data mining</label></div>
                <div className="tags"><label className="tag-text">Quantitative research</label></div>
                <div className="tags"><label className="tag-text">Social network analysis</label></div>
                <div className="tags"><label className="tag-text">Data modelling</label></div>
              </div>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="prev2" onClick={onClick}>&#10094;</div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="next2" onClick={onClick}>&#10095;</div>
  );
};

export default SideProjects;
