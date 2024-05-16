import React from 'react';
import NurImage from "../media/images/nurPortre.jpg";
import 'tailwindcss/tailwind.css';
import '../styling/about.css';
import '../../App.css';

const AboutPage = () => {
  return (
    <section className="about-container">
      
        <div class="AboutMeDiv w-[1274px] h-[808px] pr-[71px] pb-[37px] justify-start items-end gap-14 inline-flex">
        <img src={NurImage} style={{ maxHeight: '70vh', width: 'auto', marginLeft: "150px"}} alt="About Image" />
          <div className="about-text-container">
            <div class="Frame95 w-[566px] h-[580px] flex-col justify-start items-center gap-20 inline-flex">
              <div class="About w-[124px] h-[58.38px] text-black text-[37px] font-normal font-['Titan One'] leading-[48.10px]">About</div>
              <div class="TextAboutMe w-[566px] h-[482px] text-black text-xl font-normal font-['Roboto'] leading-[30px]">I'm a Stockholm-based front-end developer and UX/UI designer originally from Istanbul. <br/><br/>Before transitioning to the tech sector, I worked as a project manager at a media outlet in Istanbul, a research assistant at BI Norwegian Business School, and a business analyst at a logistics company in Istanbul.<br/><br/>Since september 2023, I’ve been attending the vocational education program for UX design and front-end development at Chas Academy.<br/><br/><br/><br/></div>
              </div>
            <div>
              <a href="#about" className="primary-button"><label className="button-text-primary">More about me</label></a>
            </div>
          </div>

          
        </div>
    </section>
    
  );
};

export default AboutPage;
