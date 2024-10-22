import NurWebsiteDesktop from '../media/luxebite/LuxeBiteDesktopVideo.mp4';
import NurWebsiteMobile from '../media/luxebite/LuxeBiteMobileVideo.mp4';
import '../../App.css';
import Animation from "./Animation";

const NurGultekin = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <Animation></Animation>

      <div className="flex flex-col lg:flex-row justify-between mx-[40px] md:mx-[200px]  w-4/5 mt-5">

        <div className="flex gap-[15px] items-baseline mt-40 mr-10 max-w-fit">
          <video src={NurWebsiteDesktop} className=" rounded-lg md:block max-w-sm md:max-w-lg sm:max-w-sm" autoPlay loop muted />
          <video src={NurWebsiteMobile} className="rounded-lg md:block max-w-xs md:max-w-md sm:max-w-xsm" autoPlay loop muted />
        </div>

        <div className="text-white flex flex-col justify-center items-start md:mr-[200px] mt-10 md:mt-10 mr-10 max-w-fit">
          <div className=" font-tomorrow text-[18px] sm:text-[18px] sm:leading-[22px] md:text-[24px] md:leading-[28px] lg:text-[32px] lg:leading-[36px]">Case Study 2 </div>
          <div className=" font-tomorrow text-[42px] sm:text-[42px] sm:leading-[48px] md:text-[60px] md:leading-[64px] lg:text-[78px] lg:leading-[80px] ">My Portfolio Website</div>
        </div>
      </div>

      <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-[30px] justify-center items-center w-11/12 md:w-4/5 mt-10 px-3 md:px-4">
        <div className="flex flex-col items-start gap-[10px]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime rounded-full" />
            <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">My role</div>
          </div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            UX research, UI design, developing design systems, agile project management and branding
          </div>
        </div>

        <div className="flex flex-col items-start gap-[10px]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime rounded-full" />
            <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke ">Scope</div>
          </div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            January 25 - April 5, 2024 -- School project
          </div>
        </div>

        <div className="flex flex-col items-start gap-[10px]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime rounded-full" />
            <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">Team</div>
          </div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            Nur Gültekin
          </div>
        </div>

        <div className="flex flex-col items-start gap-[10px]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime rounded-full" />
            <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">Frameworks</div>
          </div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            React.js, UX Design, UI design with Figma
          </div>
        </div>
      </div>



      <div className="text-white flex flex-col items-center w-11/12 md:w-4/5 mx-[100px] md:mx-[200px] mb-5 mt-10">
        <div className="text-white  font-normal font-['Tomorrow'] text-5xl sm:text-2xl md:text-5xl p-8 mb-5 mt-5 ">PROJECT OVERVIEW</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px]">
          <p>Yes, that is right! This website itself is a case study. From designing and testing the usability to actually building it, I treated my own website as a case study and built it with attention.</p>
        </div>
      </div>

      <div className="text-white flex flex-col items-center w-11/12 md:w-4/5 mx-[100px] md:mx-[200px] my-10">
        <div className="text-[30px] md:text-[36px] lg:text-[42px] font-tomorrow text-whitesmoke mb-5 mt-5">Problem and Goal</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
          <p>In the competitive online food delivery market, simplicity and speed are paramount user requirements. Established services already offer diverse options and widespread popularity. To compete in this saturated market, our fictional company must differentiate itself by providing a distinct user experience.</p>
          <p>Through user research, we identified that established food delivery services are often perceived as convenient but lacking in quality and dining experience. Customers desire fine dining experiences even in home deliveries, craving a golden edge in simplicity and ease-of-enjoyment in their everyday lives. Our aim is to fulfill this demand by offering a service that is simple, smooth, unique, and exclusive, setting us apart from traditional delivery options.</p>
        </div>
      </div>

        <div className="text-white flex flex-col items-center w-11/12 md:w-4/5 mx-[100px] md:mx-[200px] my-10">
          <div className="text-[30px] md:text-[36px] lg:text-[42px] font-tomorrow text-whitesmoke mb-5 mt-5">Solution</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
            <p>By conducting comprehensive market research, analyzing user behaviors through big data, and engaging in qualitative user research, we pinpointed a growing interest and demand for luxury, exclusive food delivery services that stand out from established brands. </p>
            <p>In response, we crafted a high-fidelity web shop offering exclusive food. The website design prioritizes simplicity while evoking a sense of exclusivity.</p>
          </div>
        </div>

      
      {/** DESIGN PROCESS SECTION */}
      <div>
        <div className="text-white  font-normal font-['Tomorrow'] text-5xl sm:text-2xl md:text-5xl p-8 mb-9 my-10">DESIGN PROCESS
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

export default NurGultekin;
