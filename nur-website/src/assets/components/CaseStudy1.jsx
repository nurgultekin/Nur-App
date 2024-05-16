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

        <div style={{alignContent:"center", margin:"120px 300px", display:"flex"}}>
            <div className="overview-content">
                <div className="overview-label" style={{fontSize: "42px"}}>Project Overview</div>
            <div className="overview-paragraph">
                <p>As part of our vocational education, we were tasked with case study aiming to deliver a distinctive food delivery web shop. My team members and I created a fictional company specializing in delivering exclusive,  luxury food using climate-friendly drones, aiming to provide a "golden  edge in everyday lives". Our case study showcases extensive market and user experience research, ideation, user interface design, and  prototyping of our innovative web shop concept.</p>
            </div>
        </div>

        </div>
      
    </section>
  );
};

export default CaseStudy1;
