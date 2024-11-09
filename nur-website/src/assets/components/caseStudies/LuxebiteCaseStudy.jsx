
import LuxeBiteDesktop from '../../media/luxebite/LuxeBiteDesktopVideo.mp4';
import LuxeBiteMobile from '../../media/luxebite/LuxeBiteMobileVideo.mp4';
import '../../../App.css';
import Animation from "../Animation";
import 'tailwindcss/tailwind.css';

const LuxeBite = () => {
  return (
    <div>
      <Animation/>
      

      <div className="flex flex-col lg:flex-row justify-between mx-[40px] md:mx-[200px]  w-4/5 mt-5">

        <div className="flex gap-[15px] items-baseline mt-40 mr-10 max-w-fit">
          <video src={LuxeBiteDesktop} className=" rounded-lg md:block max-w-sm md:max-w-lg sm:max-w-sm" autoPlay loop muted />
          <video src={LuxeBiteMobile} className="rounded-lg md:block max-w-xs md:max-w-md sm:max-w-xsm" autoPlay loop muted />
        </div>

        <div className="text-white flex flex-col justify-center items-center md:mr-[200px] mt-10 md:mt-10 mr-10 max-w-fit">
          <div className=" font-tomorrow text-[18px] sm:text-[18px] sm:leading-[22px] md:text-[24px] md:leading-[28px] lg:text-[32px] lg:leading-[36px]">Case Study 1: </div>
          <div className=" font-tomorrow text-[42px] sm:text-[42px] sm:leading-[48px] md:text-[60px] md:leading-[64px] lg:text-[78px] lg:leading-[80px] ">LuxeBite</div>
        </div>
      </div>

      <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-[30px] justify-items-center items-center w-11/12 mx-auto md:w-4/5 mt-24 px-3 md:px-4">
        <div className="flex flex-col items-left gap-[10px]">
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
            Nur Gültekin, Joakim Strandlund, Niloofar Shahsavar, Julia Kleresjö and Ronja Tiving.
          </div>
        </div>

        <div className="flex flex-col items-start gap-[10px]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime rounded-full" />
            <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">Frameworks</div>
          </div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            UX research, UX Design, UI design with Figma, agile project management
          </div>
        </div>
      </div>



      <div className="text-white flex flex-col items-center w-11/12 md:w-4/5 mx-[100px] md:mx-[200px] mb-5 mt-48">
        <div className="text-white  font-normal font-['Tomorrow'] text-5xl sm:text-2xl md:text-5xl p-8 mb-5 mt-5 ">PROJECT OVERVIEW</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px]">
          <p>As part of our vocational education, we were tasked with case study aiming to deliver a distinctive food delivery web shop. Our company concept revolves around exclusivity, utilizing climate-friendly drones to provide a “golden edge” in customers&rsquo; everyday lives. This case study captures our journey through extensive market research, user experience analysis, ideation, UI design, and prototyping to create a distinctive, luxurious online food ordering experience.</p>
        </div>
      </div>

      <div className="text-white flex flex-col items-center w-11/12 md:w-4/5 mx-[100px] md:mx-[200px] my-48">
        <div className="text-[30px] md:text-[36px] lg:text-[42px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5">Problem and Solution</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
          <p>In an already crowded online food delivery market, convenience is abundant, but the offerings often lack an elevated dining experience. User research showed a desire among customers for high-quality, fine dining even when ordering food to their homes, and a preference for platforms that are easy and enjoyable to navigate. Our solution was to develop a high-fidelity web shop that combines simplicity in the shopping process with an upscale aesthetic, presenting users with a seamless, exclusive ordering experience.</p>
        </div>
      </div>


      {/** DESIGN PROCESS SECTION */}
      <div className="text-white flex flex-col justify-center items-center mx-auto mt-10 md:mt-10 max-w-fit">
        <div className="text-white flex-col justify-center font-normal font-['Tomorrow'] text-5xl sm:text-2xl md:text-5xl p-8 mb-9 my-10">DESIGN PROCESS
          </div> 
        <div className="w-[1181px] h-[330px] justify-center items-start inline-flex gap-4">
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

      <div className="text-white flex flex-col items-center w-11/12 md:w-4/5 mx-[100px] mt-48 mb-24 md:mx-[200px] my-10">
          <div className="text-[30px] md:text-[36px] lg:text-[42px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5">Emphathy</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
            <p>A good design requires good emphaty; and understanding the target group, their needs and drives in using a certain service. With that mindset we conducted a user research to initially identify our user group, the user habits in the online food delivery system and what our niche can aim at. </p>
          </div>
        </div>

        <div className="text-white flex flex-col items-center w-11/12 md:w-4/5 mx-[100px] mt-48 mb-24 md:mx-[200px] my-10">
          <div className="text-[30px] md:text-[36px] lg:text-[42px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5">User Research</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
            <p>Our methodology comprised qualitaive research through structured and semi-structured interviews with 18 participants living in Stockholm, between the ages 19-35.
            In this phase, we identified our user group, the recurring user types, their motivation and needs in online home delivery services that offer fine dining. We identified:</p>
            <ul>
              <li><span className="border-lime ">The conscious one:</span> wants bigger portions, better ingredients, freebies in the delivery.</li>
              <li><span className="border-lime ">The pleasure-seeker:</span> wants things to go fast, fast deliveries, easy to order, comfortable everyday life.</li>
              <li><span className="border-lime ">The flashy one:</span> wants it to be an elaborate, innovative, and personalized food experience.</li>
            </ul>
          </div>
        </div>

    </div>
  );
};

export default LuxeBite;
