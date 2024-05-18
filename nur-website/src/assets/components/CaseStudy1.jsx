import React from 'react';
import LuxeBiteDesktop from '../media/images/LuxeBiteDesktopVideo.mp4';
import LuxeBiteMobile from '../media/images/LuxeBiteMobileVideo.mp4';
import '../../App.css';
import '../styling/works.css';

const CaseStudy1 = () => {
  return (
    <section className="page-body">

      <div className="title-media-container">

        <div className="CS1-videos">
          <video src={LuxeBiteDesktop} className="desktop-video" autoPlay loop muted />
          <video src={LuxeBiteMobile} className="mobile-video" autoPlay loop muted />
        </div>

        <div className="case-study-info">
          <div className="case-study-title">Case Study 1: </div>
          <div className="case-study-name">LuxeBite</div>
        </div>
      </div>

      <div className="short-info-container">
        <div className="overview-row">
          <div className="overview-item">
            <div className="overview-icon" />
            <div className="overview-label">My role</div>
          </div>
          <div className="overview-description">
            UX research, UI design, developing design systems, agile project management and branding
          </div>
        </div>

        <div className="overview-row">
          <div className="overview-item">
            <div className="overview-icon" />
            <div className="overview-label">Scope</div>
          </div>
          <div className="overview-description">
            January 25 - April 5, 2024 -- School project
          </div>
        </div>

        <div className="overview-row">
          <div className="overview-item">
            <div className="overview-icon" />
            <div className="overview-label">Team</div>
          </div>
          <div className="overview-description">
            Nur Gültekin, Joakim Strandlund, Niloofar Shahsavar, Julia Kleresjö and Ronja Tiving.
          </div>
        </div>

        <div className="overview-row">
          <div className="overview-item">
            <div className="overview-icon" />
            <div className="overview-label">Frameworks</div>
          </div>
          <div className="overview-description">
            UX research, UX Design, UI design with Figma, agile project management
          </div>
        </div>
        </div>

        <div className="overview-paragraph-title">
                <div className="overview-label" style={{fontSize: "42px"}}>Project Overview</div>
                <div className="overview-paragraph">
                <p>As part of our vocational education, we were tasked with case study aiming to deliver a distinctive food delivery web shop. My team members and I created a fictional company specializing in delivering exclusive,  luxury food using climate-friendly drones, aiming to provide a "golden  edge in everyday lives". Our case study showcases extensive market and user experience research, ideation, user interface design, and  prototyping of our innovative web shop concept.</p>
            </div>

        </div>

        <div>

        

        <div className="paragraph-row">
          <div className="overview-label">Problem and Goal</div>
          <div className="overview-paragraph"><p>In the competitive online food delivery market, simplicity and speed are paramount user requirements. Established services already offer diverse options and widespread popularity. To compete in this saturated market, our fictional company must differentiate itself by providing a distinct user experience.

Through user research, we identified that established food delivery services are often perceived as convenient but lacking in quality and dining experience. Customers desire fine dining experiences even in home deliveries, craving a golden edge in simplicity and ease-of-enjoyment in their everyday lives. Our aim is to fulfill this demand by offering a service that is simple, smooth, unique, and exclusive, setting us apart from traditional delivery options.</p>
        </div>
        

        <div>
          <div className="overview-label">Solution</div>
          <div className="overview-paragraph"><p>By conducting comprehensive market research, analyzing user behaviors through big data, and engaging in qualitative user research, we  pinpointed a growing interest and demand for luxury, exclusive food  delivery services that stand out from established brands. In response,  we crafted a high-fidelity web shop offering exclusive food. The website design prioritizes simplicity while evoking a sense of exclusivity.</p></div>
        </div>
        </div> 
      </div>
      
    </section>
  );
};

export default CaseStudy1;
