
import LuxeBiteDesktop from '../../media/luxebite/LuxeBiteDesktopVideo.mp4';
import LuxeBiteMobile from '../../media/luxebite/LuxeBiteMobileVideo.mp4';
import '../../../App.css';
import AnimationDark from "../AnimationDark";
import 'tailwindcss/tailwind.css';
import UserResearch1 from '../../media/luxebite/user-research/1.png';
import UserResearch2 from '../../media/luxebite/user-research/2.png';
import UserResearch3 from '../../media/luxebite/user-research/3.png';
import UserResearch4 from '../../media/luxebite/user-research/4.png';
import UserJourneyMap from '../../media/luxebite/market-research/upplevelsekarta-bg.png';


const LuxeBite = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AnimationDark/>
      

      <div className="flex flex-col lg:flex-row justify-center mx-auto  w-4/5 mt-5">

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



      <div className="text-white flex flex-col items-center w-11/12 mx-auto mt-48">
        <div className="text-white  font-normal font-['Tomorrow'] text-center text-3xl md:text-5xl p-8 mb-5 mt-5 ">Project Overview</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px]">
          <p>As part of our vocational education, we were tasked with case study aiming to deliver a distinctive food delivery web shop. Our company concept revolves around exclusivity, utilizing climate-friendly drones to provide a “golden edge” in customers&rsquo; everyday lives. This case study captures our journey through extensive market research, user experience analysis, ideation, UI design, and prototyping to create a distinctive, luxurious online food ordering experience.</p>
        </div>
      </div>

      <div className="text-white flex flex-col items-center justify-center w-11/12 mx-auto mt-48 mb-24 my-10">
        <div className="text-[30px] md:text-[36px] lg:text-[42px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5">Problem and Solution</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
          <p>In an already crowded online food delivery market, convenience is abundant, but the offerings often lack an elevated dining experience. User research showed a desire among customers for high-quality, fine dining even when ordering food to their homes, and a preference for platforms that are easy and enjoyable to navigate. Our solution was to develop a high-fidelity web shop that combines simplicity in the shopping process with an upscale aesthetic, presenting users with a seamless, exclusive ordering experience.</p>
        </div>
      </div>


      {/** DESIGN PROCESS SECTION */}

      <div className="flex flex-col justify-center items-center lg:flex-row lg:flex-wrap">
  <div className="text-white flex-col justify-center font-normal font-['Tomorrow'] text-5xl sm:text-2xl md:text-5xl p-8 mb-12 mx-auto my-10">
    DESIGN PROCESS
  </div>
  <div className="flex flex-col md:flex-row justify-between md:justify-center items-start gap-24 md:gap-4 md:max-w-[100vw] flex-wrap">
    {/* Empathy Section */}
    <div className="flex-col justify-start items-center gap-[9px] inline-flex">
      <div className="w-[12em] h-[5.625em] md:w-[12rem] md:h-[5.625rem] px-3 py-[19px] border-2 border-lime-300 justify-center items-center inline-flex">
        <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Empathy</div>
      </div>
      <div className="flex-col justify-start items-start gap-[22px] flex">
        <div className="justify-start items-center gap-[15px] inline-flex">
          <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
          <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">User research</div>
        </div>
        <div className="justify-start items-center gap-[15px] inline-flex">
          <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
          <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Creating personas</div>
        </div>
      </div>
    </div>
    {/* Centered Arrow */}
    <div className="flex items-center relative top-10 pr-24 rotate-90 md:rotate-0">
      <div className="w-[60px] h-[2px] bg-lime-300 relative top-1/2 transform -translate-y-1/2 "></div>
      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-lime-300 absolute left-[60px] top-1/2 transform -translate-y-1/2"></div>
    </div>
    {/* Define Box */}
    <div className="flex-col justify-start items-center gap-[9px] inline-flex">
      <div className="w-[170px] h-[90px] px-8 py-6 border-2 border-lime-300 justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Define</div>
      </div>
      <div className="flex-col justify-start items-start gap-[22px] flex">
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
          <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Market research</div>
        </div>
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
          <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Problem statement</div>
        </div>
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
          <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">User journey map</div>
        </div>
      </div>
    </div>
    {/* Centered Arrow */}
    <div className="flex items-center relative top-10 pr-24 rotate-90 md:rotate-0">
      <div className="w-[60px] h-[2px] bg-lime-300 absolute top-1/2 transform -translate-y-1/2"></div>
      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-lime-300 absolute left-[60px] top-1/2 transform -translate-y-1/2"></div>
    </div>
    {/* Ideate Box */}
    <div className="flex-col md:justify-start justify:center items-center gap-[13px] inline-flex">
      <div className="w-[170px] h-[90px] px-[33px] py-6 border-2 border-lime-300 justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Ideate</div>
      </div>
      <div className="flex-col justify-start items-start gap-4 flex">
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
          <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Road map: What, Why, How</div>
        </div>
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
          <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Problem and user group refined</div>
        </div>
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
          <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Minimum viable product</div>
        </div>
      </div>
    </div>
    {/* Centered Arrow */}
    <div className="flex items-center relative pr-24 rotate-90 md:rotate-0">
      <div className="w-[60px] h-[2px] bg-lime-300 absolute top-1/2 transform -translate-y-1/2"></div>
      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-lime-300 absolute left-[60px] top-1/2 transform -translate-y-1/2"></div>
    </div>
    {/* Prototype Box */}
    <div className="flex-col justify-start items-center gap-[15px] inline-flex">
      <div className="w-[190px] px-[25px] py-6 border-2 border-lime-300 justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Prototype</div>
      </div>
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
          <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Wireframing</div>
        </div>
        <div className="justify-start items-center gap-2.5 inline-flex">
          <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
          <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Creating prototypes</div>
        </div>
      </div>
    </div>

    {/* Centered Arrow */}
    <div className="flex items-center relative pr-24 rotate-90 md:rotate-0">
      <div className="w-[60px] h-[2px] bg-lime-300 absolute top-1/2 transform -translate-y-1/2"></div>
      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-lime-300 absolute left-[60px] top-1/2 transform -translate-y-1/2"></div>
    </div>

          {/* Test Box */}
          <div className="flex-col justify-start items-center gap-[15px] inline-flex">
            <div className="w-[190px] px-[25px] py-6 border-2 border-lime-300 justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Test</div>
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
                <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">Usability testing</div>
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
                <div className="text-white text-l font-normal font-['Roboto'] leading-[30px]">User experience research</div>
              </div>
            </div>
          </div>
  </div>
</div>



      <div className="text-white flex flex-col items-center justify-center w-11/12 mx-auto mt-48  my-10 ">
          <div className="text-[30px] md:text-[36px] lg:text-[42px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border border-lime-300">Emphathy</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
            <p>A good design requires good emphaty; and understanding the target group, their needs and drives in using a certain service. With that mindset we conducted a user research to initially identify our user group, the user habits in the online food delivery system and what our niche can aim at. </p>
          </div>
        </div>

        <div className="text-white flex flex-col items-center justify-center w-11/12 mx-auto mt-48 my-10 ">
          <div className="text-[24px] md:text-[28px] lg:text-[35px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border-b border-lime-300 ">User Research</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
            <p>Our methodology comprised qualitaive research through structured and semi-structured interviews with 18 participants living in Stockholm, between the ages 19-35.
            In this phase, we identified our user group, the recurring user types, their motivation and needs in online home delivery services that offer fine dining. We identified:</p>
            <ul>
              <li><span className="border-lime ">The conscious one:</span> wants bigger portions, better ingredients, freebies in the delivery.</li>
              <li><span className="border-lime ">The pleasure-seeker:</span> wants things to go fast, fast deliveries, easy to order, comfortable everyday life.</li>
              <li><span className="border-lime ">The flashy one:</span> wants it to be an elaborate, innovative, and personalized food experience.</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 mt-24 md:mt-24">
              {/* First image pair */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-24 w-full items-center justify-center">
                <img src={UserResearch1} alt="Image 1" className="w-full md:w-1/2 h-auto rounded-3xl" />
                <img src={UserResearch2} alt="Image 2" className="w-full md:w-1/2 h-auto rounded-3xl" />
              </div>
              
              {/* Second image pair */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-24 w-full items-center">
                <img src={UserResearch3} alt="Image 3" className="w-full md:w-1/2 h-auto rounded-3xl" />
                <img src={UserResearch4} alt="Image 4" className="w-full md:w-1/2 h-auto rounded-3xl" />
              </div>
            </div>


        </div>

{/*         <div className="text-white flex items-center justify-center w-11/12 mx-auto mt-48 mb-24 my-10 gap-2.5">
          <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
          <div className="text-[22px] md:text-[24px] lg:text-[35px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4">User research</div>
        </div> */}

        <div className="text-white flex flex-col items-center justify-center w-11/12 mx-auto mt-48 my-10">
          <div className="text-[30px] md:text-[36px] lg:text-[42px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border border-lime-300" >Define</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
            <p>We identified user behaviors, needs, and personas. Based on this analysis, we aimed to create a unique offering that wasn&rsquo;t already available in the market. Our goal was to meet the market demand for an exclusive experience in online food ordering. Our user research revealed that while users typically expect online ordering to be convenient, time-saving, and tasty, they do not anticipate it to be a luxury experience. This was a gap we wanted to address. </p>
            <p>We sought to deliver a sense of luxury to customers looking for an elevated experience in their everyday lives, offering an extraordinary dining experience directly to their homes. During this stage, we refined our understanding of our user types, categorizing them into three distinct personas and aligning them with specific desires and motivations identified in our research.</p>
            <p>With these insights, we redefined our user roadmap and developed a detailed user journey map.</p>
          </div>
        </div>

        <div className="text-white flex flex-col items-center justify-center w-11/12 mx-auto mt-48 my-10">
          <div className="text-[24px] md:text-[28px] lg:text-[35px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border-b border-lime-300" >User Journey</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
            <p>Throughout the previous phases of the design process, which included market research and user research, and the definition of “what,” our user journey evolved organically. Initially, we had a more general target group, but the empathy,  phase with user research and market research refined our user roadmap, helped us identify our target group as middle and upper-middle-class young adults and middle-aged adults living in Stockholm. </p>
            <p>We concluded that they want to access food delivery services in an exclusive, smooth, and unique way. They should prefer our services because we aim to make every day a little more special by offering a “golden edge to everyday life” and providing an exclusive experience even in a quick food ordering setting online.</p>
          </div>
          <div className="mt-10 md:mt-24 md:max-w-4xl ">
            <img src={UserJourneyMap}></img>
            <p>Figure: User journey map</p>
          </div>
        </div>

      

        
    </div>
  );
};

export default LuxeBite;
