import React from 'react';
import LuxeBiteDesktop from '../media/images/LuxeBiteDesktopVideo.mp4';
import LuxeBiteMobile from '../media/images/LuxeBiteMobileVideo.mp4';
import '../../App.css';
import '../styling/works.css';
import Animation from "./Animation";

const CaseStudy1 = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-[200px]">
      <Animation className="bg-black"></Animation>

      <div className="flex flex-col md:flex-row justify-between mx-[100px] md:mx-[200px] w-4/5 mt-80">

        <div className="flex gap-[15px] items-baseline mt-10">
          <video src={LuxeBiteDesktop} className="rounded-lg hidden md:block mt-20" autoPlay loop muted />
          <video src={LuxeBiteMobile} className="rounded-lg block md:block mt-20" autoPlay loop muted />
        </div>

        <div className="text-white flex flex-col justify-center items-start md:mr-[200px] mt-10 md:mt-0">
          <div className=" text-[32.36px] font-tomorrow leading-[42.07px]">Case Study 1: </div>
          <div className=" text-[78px] font-tomorrow leading-[78px]">LuxeBite</div>
        </div>
      </div>

      <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-[30px] justify-center items-center w-11/12 md:w-4/5 mt-10 px-3 md:px-4">
        <div className="flex flex-col items-start gap-[10px]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime rounded-full" />
            <div className="text-[24px] font-tomorrow text-whitesmoke leading-[31.2px]">My role</div>
          </div>
          <div className="text-[18px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            UX research, UI design, developing design systems, agile project management and branding
          </div>
        </div>

        <div className="flex flex-col items-start gap-[10px]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime rounded-full" />
            <div className="text-[24px] font-tomorrow text-whitesmoke leading-[31.2px]">Scope</div>
          </div>
          <div className="text-[18px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            January 25 - April 5, 2024 -- School project
          </div>
        </div>

        <div className="flex flex-col items-start gap-[10px]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime rounded-full" />
            <div className="text-[24px] font-tomorrow text-whitesmoke leading-[31.2px]">Team</div>
          </div>
          <div className="text-[18px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            Nur Gültekin, Joakim Strandlund, Niloofar Shahsavar, Julia Kleresjö and Ronja Tiving.
          </div>
        </div>

        <div className="flex flex-col items-start gap-[10px]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime rounded-full" />
            <div className="text-[24px] font-tomorrow text-whitesmoke leading-[31.2px]">Frameworks</div>
          </div>
          <div className="text-[18px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            UX research, UX Design, UI design with Figma, agile project management
          </div>
        </div>
      </div>

      <div className="text-white flex flex-col items-center w-11/12 md:w-4/5 mx-[100px] md:mx-[200px] my-10">
        <div className="text-[42px] font-tomorrow text-whitesmoke leading-[42px] mb-5">Project Overview</div>
        <div className="text-[18px] font-roboto text-whitesmoke leading-[30px] mt-[4px] text-left mx-[30px] md:mx-[200px]">
          <p>As part of our vocational education, we were tasked with case study aiming to deliver a distinctive food delivery web shop. My team members and I created a fictional company specializing in delivering exclusive, luxury food using climate-friendly drones, aiming to provide a "golden edge in everyday lives". Our case study showcases extensive market and user experience research, ideation, user interface design, and prototyping of our innovative web shop concept.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[15px] w-11/12 md:w-4/5 mx-[100px] md:mx-[200px] my-10">
        <div className="text-[24px] font-tomorrow text-whitesmoke leading-[31.2px]">Problem and Goal</div>
        <div className="text-[18px] font-roboto text-whitesmoke leading-[30px] text-left">
          <p>In the competitive online food delivery market, simplicity and speed are paramount user requirements. Established services already offer diverse options and widespread popularity. To compete in this saturated market, our fictional company must differentiate itself by providing a distinct user experience.</p>
          <p>Through user research, we identified that established food delivery services are often perceived as convenient but lacking in quality and dining experience. Customers desire fine dining experiences even in home deliveries, craving a golden edge in simplicity and ease-of-enjoyment in their everyday lives. Our aim is to fulfill this demand by offering a service that is simple, smooth, unique, and exclusive, setting us apart from traditional delivery options.</p>
        </div>

        <div>
          <div className="text-[24px] font-tomorrow text-whitesmoke leading-[31.2px]">Solution</div>
          <div className="text-[18px] font-roboto text-whitesmoke leading-[30px] mt-[4px] text-left">
            <p>By conducting comprehensive market research, analyzing user behaviors through big data, and engaging in qualitative user research, we pinpointed a growing interest and demand for luxury, exclusive food delivery services that stand out from established brands. In response, we crafted a high-fidelity web shop offering exclusive food. The website design prioritizes simplicity while evoking a sense of exclusivity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy1;
