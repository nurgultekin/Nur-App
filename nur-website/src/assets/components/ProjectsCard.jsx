
/*
import React, { useState } from 'react';

const ProjectSection = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const showSlides = (n) => {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        if (n >= slides.length) { setSlideIndex(0); } 
        if (n < 0) { setSlideIndex(slides.length - 1); } 
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex].style.display = "block";
        dots[slideIndex].className += " active";
    };

    const nextSlide = () => {
        setSlideIndex((prevIndex) => prevIndex + 1);
        showSlides(slideIndex + 1);
    };

    const prevSlide = () => {
        setSlideIndex((prevIndex) => prevIndex - 1);
        showSlides(slideIndex - 1);
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
        showSlides(n);
    };

    const plusSlides = (n) => {
        setSlideIndex((prevIndex) => prevIndex + n);
        showSlides(slideIndex + n);
    };

    return (
        <div className="slideshow-container">
            <div className="projects">
                
                <div className="prev" onClick={() => prevSlide()}>&#10094;</div>

                            
              <div className="luxebite-container">
                 
                  <div className="firstSlide fade">
                      <div className="luxebite">
                          <div>
                              <img src="/images-icons/luxeBite-img.png" alt="Project Image" style={{ width: '451px', height: 'auto' }} />
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

                  
                <div className="mySlides fade">
                  <div className="luxebite">
                    <div>
                      <img src="/images-icons/onspot_museum.png" alt="Project Image" style={{ width: "451px", height: "auto" }} />
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



                  

                
              </div>

                
                <div className="next" onClick={() => nextSlide()}>&#10095;</div>
            </div>

           
            <div style={{ textAlign: 'center' }}>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
                <span className="dot" onClick={() => currentSlide(4)}></span>
            </div>
        </div>
    );
};

export default ProjectSection;

*/