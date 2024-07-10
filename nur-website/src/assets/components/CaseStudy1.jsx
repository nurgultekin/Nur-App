import React from 'react';
import LuxeBiteDesktop from '../media/images/LuxeBiteDesktopVideo.mp4';
import LuxeBiteMobile from '../media/images/LuxeBiteMobileVideo.mp4';
import '../../App.css';
import '../styling/works.css';
import AnimationDark from "./AnimationDark";

const CaseStudy1 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <AnimationDark></AnimationDark>

      <div className="flex flex-col md:flex-row justify-between mx-[70px] md:mx-[200px]  w-4/5 mt-5">

        <div className="flex gap-[15px] items-baseline mt-40 ">
          <video src={LuxeBiteDesktop} className=" rounded-lg md:block max-w-sm md:max-w-lg sm:max-w-sm" autoPlay loop muted />
          <video src={LuxeBiteMobile} className="rounded-lg md:block max-w-xs md:max-w-md sm:max-w-xsm" autoPlay loop muted />
        </div>

        <div className="text-white flex flex-col justify-center items-start md:mr-[200px] mt-10 md:mt-0">
          <div className=" font-tomorrow sm:text-[18px] sm:leading-[22px] md:text-[24px] md:leading-[28px] lg:text-[32px] lg:leading-[36px]">Case Study 1: </div>
          <div className=" font-tomorrow sm:text-[42px] sm:leading-[48px] md:text-[60px] md:leading-[64px] lg:text-[78px] lg:leading-[80px] ">LuxeBite</div>
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

      <div className="text-white grid grid-cols-1 gap-[15px] w-11/12 md:w-4/5 mx-[100px] md:mx-[200px] my-10">
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
      {/** DESIGN PROCESS SECTION */}
      <div>
        <div className="text-white text-5xl font-normal font-['Tomorrow'] leading-[62.40px] p-8 mb-9">DESIGN PROCESS
          </div> 
        <div className="w-[1181px] h-[330px] justify-start items-start inline-flex gap-4">
          <div className="flex-col justify-start items-center gap-[9px] inline-flex">
              <div className="w-[190px] h-[90px] px-3 py-[19px] border-2 border-lime-300 justify-center items-center  inline-flex">
                  <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Empathy</div>
              </div>
              <div className="flex-col justify-start items-start gap-[22px] flex">
                  <div className="justify-start items-center gap-[15px] inline-flex">
                      <div className="w-[15px] h-3.5 bg-zinc-300/opacity-0 rounded-full border-4 border-lime-400" />
                      <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">User research</div>
                  </div>
                  <div className="justify-start items-center gap-[15px] inline-flex">
                      <div className="w-[15px] h-3.5 bg-zinc-300/opacity-0 rounded-full border-4 border-lime-400" />
                      <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Creating personas</div>
                  </div>
              </div>
          </div>
          <div className="w-[62px] h-[265px] px-[9px] py-8 flex-col justify-start items-start gap-2.5 inline-flex" />
          <div className="flex-col justify-start items-center gap-[9px] inline-flex">
              <div className="w-[170px] h-[90px] px-8 py-6 border-2 border-lime-300 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Define</div>
              </div>
              <div className="flex-col justify-start items-start gap-[22px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                      <div className="justify-start items-center gap-2.5 inline-flex">
                          <div className="w-[15px] h-3.5 bg-zinc-300/opacity-0 rounded-full border-4 border-lime-400" />
                          <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Market research</div>
                      </div>
                      <div className="justify-start items-center gap-2.5 inline-flex">
                          <div className="w-[15px] h-3.5 bg-zinc-300/opacity-0 rounded-full border-4 border-lime-400" />
                          <div className="text-white text-l font-normal font-['Roboto'] leading-[30px] ml-0">Problem statement</div>
                      </div>
                      <div className="justify-start items-center gap-2.5 inline-flex">
                          <div className="w-[15px] h-3.5 bg-zinc-300/opacity-0 rounded-full border-4 border-lime-400" />
                          <div className="w-max-[159px] text-white text-l font-normal font-['Roboto'] leading-[30px] ">User journey map</div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="w-[62px] h-[315px] px-[9px] py-8 flex-col justify-start items-start gap-2.5 inline-flex" />
          <div className="w-[186px] flex-col justify-start items-center gap-[13px] inline-flex">
              <div className="w-[170px] h-[90px] px-[33px] py-6 border-2 border-lime-300 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Ideate</div>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[15px] h-3.5 bg-zinc-300/opacity-0 rounded-full border-4 border-lime-400" />
                      <div className="text-white text-l font-normal font-['Roboto'] leading-[30px] ">Road map: What, Why, How </div>
                  </div>
                  <div className="justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[15px] h-3.5 bg-zinc-300/opacity-0 rounded-full border-4 border-lime-400" />
                      <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Problem and user group refined</div>
                  </div>
                  <div className="justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[15px] h-3.5 bg-zinc-300/opacity-0 rounded-full border-4 border-lime-400" />
                      <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Minimum viable product</div>
                  </div>
              </div>
          </div>
          <div className="w-[62px] h-[313px] px-[9px] py-8 flex-col justify-start items-start gap-2.5 inline-flex" />
          <div className="flex-col justify-start items-center gap-[15px] inline-flex">
              <div className="w-[190px] px-[25px] py-6 border-2 border-lime-300 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Prototype</div>
              </div>
              <div className="flex-col justify-start items-start gap-2.5 flex">
                  <div className="justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[15px] h-3.5 bg-zinc-300/opacity-0 rounded-full border-4 border-lime-400" />
                      <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Wireframing</div>
                  </div>
                  <div className="justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[15px] h-3.5 bg-zinc-300/opacity-0 rounded-full border-4 border-lime-400" />
                      <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">High-Fi Mock-Up</div>
                  </div>
              </div>
          </div>
          <div className="w-[62px] h-[327px] px-[9px] py-8 flex-col justify-start items-start gap-2.5 inline-flex" />
          <div className="flex-col justify-start items-center gap-[11px] inline-flex">
              <div className="w-[140px] px-[33px] py-6 border-2 border-lime-300 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Test</div>
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                  <div className="w-[15px] h-3.5 bg-zinc-300/opacity-0 rounded-full border-4 border-lime-400" />
                  <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Usability testing</div>
              </div>
              <div className="justify-start items-left gap-2.5 inline-flex">
                  <div className="w-[15px] h-3.5 bg-zinc-300/opacity-0 rounded-full border-4 border-lime-400" />
                  <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">User experience research</div>
              </div>
          </div>
        </div>
        

      </div>

    </div>
  );
};

export default CaseStudy1;
