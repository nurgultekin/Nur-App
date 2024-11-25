
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
import IdeationImg from '../../media/luxebite/ideateImg.png'
import Mvp from '../../media/luxebite/MVP.png';
import Wireframe from '../../media/luxebite/wireframe.png';
import MockUp from '../../media/luxebite/mockup.png';
import Prototyping from '../../media/luxebite/prototyping.png';
import ColorScheme from '../../media/luxebite/color-scheme.png';
import Typescale from '../../media/luxebite/typescale.png';

const LuxeBite = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AnimationDark/>
      

      <div className="flex flex-col lg:flex-row justify-center mx-auto mt-5">
.
        <div className="flex gap-[1rem] mdflex-col md:items-baseline items-center mt-40 lg:mr-10 max-w-fit">
          <video src={LuxeBiteDesktop} className=" rounded-lg md:block max-w-[70%] md:max-w-lg data-twe-lazy-load-init" autoPlay loop muted />
          <video src={LuxeBiteMobile} className="rounded-lg md:block max-w-[20%] md:max-w-md data-twe-lazy-load-init" autoPlay loop muted />
        </div>

        <div className="text-white flex flex-col justify-center items-center mt-10 md:mt-10 md:ml-8">
          <div className=" font-tomorrow text-[18px] sm:text-[18px] sm:leading-[22px] md:text-[24px] md:leading-[28px] lg:text-[32px] lg:leading-[36px]">Case Study 1: </div>
          <div className=" font-tomorrow text-[42px] sm:text-[42px] sm:leading-[48px] md:text-[60px] md:leading-[64px] lg:text-[78px] lg:leading-[80px] ">LuxeBite</div>
        </div>
      </div>

        
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-[30px] items-start justify-center mx-auto mt-24 px-12 md:px-4 ">
          <div className="flex flex-col justify-center items-start gap-[10px]">
            <div className="flex items-center gap-[15px]">
              <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
              <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">My role</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px]  lg:max-w-[25rem] mt-[4px] text-left">
              UX research, UI design, developing design systems, agile project management and branding
            </div>
          </div>



          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-[15px]">
              <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
              <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">Scope</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] lg:max-w-[25rem] mt-[4px] text-left">
            January 25 - April 5, 2024 - School project
            </div>
          </div>


          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-start gap-[15px]">
              <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
              <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">Team</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px]  lg:max-w-[25rem] mt-[4px] text-left">
              Nur Gültekin, Joakim Strandlund, Niloofar Shahsavar, Julia Kleresjö and Ronja Tiving.
            </div>
          </div>

          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-start gap-[15px]">
              <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
              <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">Frameworks</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px]  lg:max-w-[25rem] mt-[4px] text-left">
              UX research, UX Design, UI design with Figma, agile project management
            </div>
          </div>
        </div>



      <div className="text-white flex flex-col justify-center items-center px-12 mb-24 lg:mb-48">
        <div className="text-white font-normal font-['Tomorrow'] text-left text-3xl md:text-5xl p-4 mb-8 mt-5">Project Overview</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left max-w-[80%] lg:max-w-[40%]">
          <p>As part of our vocational education, we were tasked with case study aiming to deliver a distinctive food delivery web shop. Our company concept revolves around exclusivity, utilizing climate-friendly drones to provide a “golden edge” in customers&rsquo; everyday lives. This case study captures our journey through extensive market research, user experience analysis, ideation, UI design, and prototyping to create a distinctive, luxurious online food ordering experience.</p>
        </div>
      </div>

      <div className="text-white flex flex-col justify-center items-center px-12 mb-24 lg:mb-48">
        <div className="text-white font-normal font-['Tomorrow'] text-left text-3xl md:text-5xl p-4 mb-8 mt-5">Problem and Solution</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left max-w-[80%] lg:max-w-[40%]">
          <p>In an already crowded online food delivery market, convenience is abundant, but the offerings often lack an elevated dining experience. User research showed a desire among customers for high-quality, fine dining even when ordering food to their homes, and a preference for platforms that are easy and enjoyable to navigate. Our solution was to develop a high-fidelity web shop that combines simplicity in the shopping process with an upscale aesthetic, presenting users with a seamless, exclusive ordering experience.</p>
        </div>
      </div>


      {/** DESIGN PROCESS SECTION */}

      <div className="flex flex-col justify-center items-center lg:flex-wrap mb-24 lg:mb-48">
        <div className="text-white flex-col justify-center font-normal font-['Tomorrow'] text-5xl sm:text-2xl md:text-5xl my-24 text-center">
          DESIGN PROCESS
        </div>
        <div className="flex flex-col md:flex-row justify-between md:justify-center items-start gap-24 md:gap-4 md:max-w-[90vw] flex-wrap">
          {/* Empathy Section */}
          <div className="flex-col justify-left items-center gap-[9px] inline-flex">
            <div className="w-[10rem] h-[5.625em] md:w-[10rem] md:h-[5.625rem] px-3 py-8 border-2 border-lime-300 justify-center items-center inline-flex">
              <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Empathy</div>
            </div>
            <div className="flex-col justify-start items-start gap-[22px] flex max-w-[10rem]">
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
          <div className="flex items-center relative top-10 pr-8 rotate-90 md:rotate-0">
            <div className="w-[61px] h-[2px] bg-lime-300 relative top-1/2 transform -translate-y-1/2 "></div>
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-lime-300 absolute left-[60px] top-1/2 transform -translate-y-1/2"></div>
          </div>
          {/* Define Box */}
          <div className="flex-col justify-left items-center gap-[9px] inline-flex">
            <div className="w-[10rem] h-[5.625em] md:w-[10rem] md:h-[5.625rem] px-3 py-8 border-2 border-lime-300 justify-center items-center inline-flex">
              <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Define</div>
            </div>
            <div className="flex-col justify-start items-start gap-[22px] flex max-w-[10rem]">
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
          <div className="flex items-center relative top-10 pr-8 rotate-90 md:rotate-0">
            <div className="w-[60px] h-[2px] bg-lime-300 relative top-1/2 transform -translate-y-1/2"></div>
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-lime-300 absolute left-[60px] top-1/2 transform -translate-y-1/2"></div>
          </div>
          {/* Ideate Box */}
          <div className="flex-col md:justify-left justify:center items-center gap-[13px] inline-flex">
            <div className="w-[10rem] h-[5.625em] md:w-[10rem] md:h-[5.625rem] px-3 py-8 border-2 border-lime-300 justify-center items-center inline-flex">
              <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Ideate</div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex max-w-[10rem]">
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
          <div className="flex items-center relative top-10 lg:pr-8 rotate-90 md:rotate-0">
            <div className="w-[60px] h-[2px] bg-lime-300 relative top-1/2 transform -translate-y-1/2"></div>
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-lime-300 absolute left-[60px] top-1/2 transform -translate-y-1/2"></div>
          </div>
          {/* Prototype Box */}
          <div className="flex-col justify-start items-center gap-[15px] inline-flex">
            <div className="w-[10rem] h-[5.625em] md:w-[10rem] md:h-[5.625rem] px-3 py-8 border-2 border-lime-300 justify-center items-center inline-flex">
              <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Prototype</div>
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex max-w-[10rem]">
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
          <div className="flex items-center relative top-10 pr-8 rotate-90 md:rotate-0">
            <div className="w-[60px] h-[2px] bg-lime-300 relative top-1/2 transform -translate-y-1/2"></div>
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-lime-300 absolute left-[60px] top-1/2 transform -translate-y-1/2"></div>
          </div>

                {/* Test Box */}
                <div className="flex-col justify-start items-center gap-[15px] inline-flex">
                  <div className="w-[10rem] h-[5.625em] md:w-[10rem] md:h-[5.625rem] px-3 py-8 border-2 border-lime-300 justify-center items-center inline-flex">
                    <div className="text-white text-[20px] font-normal font-['Tomorrow'] leading-[42.07px]">Test</div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2.5 flex max-w-[10rem]">
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



      <div className="text-white flex flex-col justify-center items-center px-12 mb-24 lg:mb-24">
          <div className="text-[30px] md:text-[36px] lg:text-[42px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border border-lime-300">Emphathy</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left max-w-[80%] lg:max-w-[40%]">
            <p>A good design requires good emphaty; and understanding the target group, their needs and drives in using a certain service. With that mindset we conducted a user research to initially identify our user group, the user habits in the online food delivery system and what our niche can aim at. </p>
          </div>
        </div>

        <div className="text-white flex flex-col justify-center items-center px-12 mb-24 lg:mb-48">
          <div className="text-[24px] md:text-[28px] lg:text-[35px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border-b border-lime-300 ">User Research</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left max-w-[80%] lg:max-w-[40%] ">
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

          {/* <div className="text-white flex items-center justify-center w-11/12 mx-auto mt-48 mb-24 my-10 gap-2.5">
          <div className="w-[15px] h-3.5 rounded-full border-4 border-lime-400" />
          <div className="text-[22px] md:text-[24px] lg:text-[35px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4">User research</div>
        </div> */}

        <div className="text-white flex flex-col justify-center items-center px-12 mb-24 lg:mb-48">
          <div className="text-[30px] md:text-[36px] lg:text-[42px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border border-lime-300" >Define</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left max-w-[80%] lg:max-w-[40%]">
            <p>We identified user behaviors, needs, and personas. Based on this analysis, we aimed to create a unique offering that wasn&rsquo;t already available in the market. Our goal was to meet the market demand for an exclusive experience in online food ordering. Our user research revealed that while users typically expect online ordering to be convenient, time-saving, and tasty, they do not anticipate it to be a luxury experience. This was a gap we wanted to address. </p>
            <p>We sought to deliver a sense of luxury to customers looking for an elevated experience in their everyday lives, offering an extraordinary dining experience directly to their homes. During this stage, we refined our understanding of our user types, categorizing them into three distinct personas and aligning them with specific desires and motivations identified in our research.</p>
            <p>With these insights, we redefined our user roadmap and developed a detailed user journey map.</p>
          </div>
        </div>

        <div className="text-white flex flex-col justify-center items-center px-12 mb-24 lg:mb-48">
          <div className="text-[24px] md:text-[28px] lg:text-[35px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border-b border-lime-300" >User Journey</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left max-w-[80%] lg:max-w-[40%] ">
            <p>Throughout the previous phases of the design process, which included market research and user research, and the definition of “what,” our user journey evolved organically. Initially, we had a more general target group, but the empathy,  phase with user research and market research refined our user roadmap, helped us identify our target group as middle and upper-middle-class young adults and middle-aged adults living in Stockholm. </p>
            <p>We concluded that they want to access food delivery services in an exclusive, smooth, and unique way. They should prefer our services because we aim to make every day a little more special by offering a “golden edge to everyday life” and providing an exclusive experience even in a quick food ordering setting online.</p>
          </div>
          <div className="mt-10 md:mt-24 md:max-w-4xl ">
            <img src={UserJourneyMap}></img>
            <p>Figure: User journey map</p>
          </div>
        </div>   
        <div className="flex flex-col lg:flex-row justify-center gap-5 mt-48 my-10 ">
          <div className="text-white flex flex-col justify-center items-center px-12 mb-24 lg:mb-48 ">
          <div className="text-[30px] md:text-[36px] lg:text-[42px] font-['Tomorrow'] text-whitesmoke mb-5 p-4 border border-lime-300" >Ideate</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left max-w-[80%] lg:max-w-[40%]">
            <p>To deepen our insights gathered from market and user research, our design team held a series of engaging workshops and brainstorming sessions.</p>
            <p>Throughout these workshops, we utilized various creative exercises, including mindset activities, Crazy 8, and behavior stations, while collectively voting on strategies to enhance our offerings. I was responsible for the mindset activities and helping my team members think outside the box. </p>
            <p>Our aim with these ideation sessions was to make informed decisions based on our user and market research, generating ideas that would help us create a more unique, flexible, and exclusive dining experience for the personas identified in the “empathy” phase of our design process: the conscious one, the pleasure seeker, and the flashy one.</p>
            <p>As a result, we revisited our user road map (Who, Why and How) and the user journey map, and identified key features to prioritize, including monthly themes, a signature menu, partnerships with local businesses and renowned chefs, as well as innovations such as drone delivery and detailed nutritional content through icons. These key features, derived from our requirement analysis and user research, would form our minimum viable product (MVP).</p>
          </div>
           </div>

           <div className="max-w-xl mt-8 lg:mt-24 justify-center  mx-auto lg:justify-end">
            <img src={IdeationImg} alt="Ideation board"></img>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-5 mb-24 lg:mb-48 ">
          <div className="text-white flex flex-col items-center justify-center w-11/12 mx-auto ">
          <div className="text-[24px] md:text-[28px] lg:text-[35px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border-b border-lime-300" >Minimum Viable Product</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left max-w-[80%] lg:max-w-[40%]">
            <p>To deepen our insights gathered from market and user research, our design team held a series of engaging workshops and brainstorming sessions.</p>
            <p>Throughout these workshops, we utilized various creative exercises, including mindset activities, Crazy 8, and behavior stations, while collectively voting on strategies to enhance our offerings. I was responsible for the mindset activities and helping my team members think outside the box. </p>
            <p>Our aim with these ideation sessions was to make informed decisions based on our user and market research, generating ideas that would help us create a more unique, flexible, and exclusive dining experience for the personas identified in the “empathy” phase of our design process: the conscious one, the pleasure seeker, and the flashy one.</p>
            <p>As a result, we revisited our user road map (Who, Why and How) and the user journey map, and identified key features to prioritize, including monthly themes, a signature menu, partnerships with local businesses and renowned chefs, as well as innovations such as drone delivery and detailed nutritional content through icons. These key features, derived from our requirement analysis and user research, would form our minimum viable product (MVP).</p>
          </div>
           </div>

           <div className="max-w-xl mt-8 lg:mt-24 justify-center mx-auto lg:justify-end">
            <img src={Mvp} alt="Minimum viable product visualisation"></img>
           </div>
        </div>

        <div className="flex flex-col justify-center gap-5 mt-48 my-10 ">
          <div className="text-white flex flex-col items-center justify-center w-11/12 mx-auto ">
              <div className="text-[24px] md:text-[28px] lg:text-[35px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border-b border-lime-300" >Prototype</div>
           </div>

           <div className="flex flex-col lg:flex-row justify-center gap-5 mt-48 my-10 ">
              <div className="text-white flex flex-col items-center justify-center w-11/12 mx-auto ">
                  <div className="text-[24px] md:text-[28px] lg:text-[35px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border-b border-lime-300" >Wireframing: Lo-Fi Design</div>
                       <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
                          <p>When we created our wireframe, we drew up a requirement specification from our previous work regarding market research, user research, workshops and mvp. Where we prioritized &#34;must haves&#34; and &#34;should haves&#34;, which laid the foundation for our result.</p>
                        </div>
           </div>

           <div className="max-w-xl mt-8 lg:mt-24 justify-center flex mx-auto lg:justify-end">
            <img src={Wireframe} alt="Desktop and mobile wireframea which showcase our low fidelity design." className=" max-h-sm"></img>
           </div>
           </div>

           <div className="flex flex-col lg:flex-row justify-center gap-5 mt-48 my-10 ">
           <div className="max-w-xl mt-8 lg:mt-24 justify-center flex mx-auto lg:justify-end">
                      <img src={MockUp} alt="Desktop and mobile mock-up which showcase our high fidelity design." className=" max-h-sm"></img>
                  </div>
              <div className="text-white flex flex-col items-center justify-center w-11/12 mx-auto ">
                  <div className="text-[24px] md:text-[28px] lg:text-[35px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border-b border-lime-300" >Mock-up: High-Fi Design</div>
                       <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
                          <p>When it was time to create a mockup, we followed our wireframes and adhered to the WCAG standards for elements such as size and contrast.</p>
                          <p>We aimed to design with an airy, luxurious, and modern feel, using color choices that convey this aesthetic. At this stage, we established our visual identity and selected our brand color, gold, to represent the premium quality we deliver.</p>
                        </div>
           </div>


           </div>

           <div className="flex flex-col lg:flex-row justify-center gap-5 mt-48 my-10 ">
              <div className="text-white flex flex-col items-center justify-center w-11/12 mx-auto ">
                  <div className="text-[24px] md:text-[28px] lg:text-[35px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border-b border-lime-300" >Prototyping</div>
                       <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
                          <p>In the final stage of prototyping phase, which is to implement the flow and connect the elements and pages with each other in a clickable format. Our prototype was designed to allow users to make a purchase as a guest (without logging in).</p>
                          <p>We implemented the prototype to evaluate whether our website was clear, flexible, and easy for users to navigate and complete a purchase/order throughout the entire flow.</p>
                        </div>
           </div>

           <div className="max-w-xl mt-8 lg:mt-24 justify-center flex mx-auto lg:justify-end">
            <img src={Prototyping} alt="Prototyped mockup of the Desktop and mobile design." className=" max-h-sm"></img>
           </div>
           </div>

           <div className="flex flex-col justify-center gap-5 mt-48 my-10 ">
              <div className="text-white flex flex-col items-center justify-center w-11/12 mx-auto ">
                  <div className="text-[24px] md:text-[28px] lg:text-[35px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border-b border-lime-300" >Design System</div>
                       <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
                          <p>Based on our visual identity, semantic identity, and SEO and WCAG principles, we developed our design system. This system includes typography and scale, a color system and scale, and buttons and other UI elements as components.</p>
                        </div>
              </div>
              <div className="max-w-xl mt-8 lg:mt-8 justify-center flex flex-col lg:flex-row mx-auto lg:justify-center gap-4">
                      <img src={ColorScheme} alt="Color scheme within the design system" className=" max-h-md"></img>
                      <img src={Typescale} alt="Typescale within the design system" className=" max-h-md"></img>
                  </div>


           </div>




        </div>

        <div className="flex flex-col justify-center gap-5mb-24 lg:mb-48">
          <div className="text-[30px] md:text-[36px] lg:text-[42px] font-['Tomorrow'] text-whitesmoke mb-5 mt-5 p-4 border border-lime-300" >Testing</div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left max-w-[80%] lg:max-w-[40%]">
            <p>We conducted usability testing to evaluate the intuitiveness and appeal of our web shop. Here are the key findings and their contributions to solving our core user needs:  </p>
            <ul className="flex flex-col gap-8">
              <li className="list-disc marker:text-lime-300">
                <span className="text-lime-300">Positive Feedback: </span>
                Test participants understood the app&qrso;s purpose and appreciated the luxurious design, which reinforced the brand&wrso;s exclusive feel. They also found the checkout process to be straightforward, which checked out our goal of simplicity.
              </li>
              <li className="list-disc marker:text-lime-300">
                <span className="text-lime-300">Areas for Improvement: </span>
                Users noted difficulty in recognizing that the menu continued beyond the first displayed items, which we understood as a need for better navigation cues. Additionally, they found the text unclear and suggested improving readability, particularly around payment details.
              </li>
              <li className="list-disc marker:text-lime-300">
                <span className="text-lime-300">Solutions Implemented: </span>
                Based on this feedback, we adjusted the interface to make the menu navigation more intuitive, implemented a clearer font hierarchy, and increased the font size for critical details like prices. These changes enhanced usability, and helped the app meet its goal of offering a refined, user-friendly experience.              </li>
            </ul>
          </div>
        </div>


        <div className="flex flex-col justify-center gap-5 mb-24 lg:mt-48 my-10">
        <div className="text-white  font-normal font-['Tomorrow'] text-center text-3xl md:text-5xl p-8 mb-12 mt-5 ">Conclusion</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left max-w-[80%] lg:max-w-[40%]">
          <p>The usability testing outcomes and subsequent design adjustments directly addressed our users&qrso; needs for a smooth, accessible luxury experience. By refining the app&qrso;s navigational flow and readability, we created a web shop that aligns with our brand&qrso;s premium position while simplifying the customer journey. This case study demonstrates how our design process, from research to testing, led to a unique product in the luxury food delivery space, with a view to bring convenience and an elevated dining experience together.</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-4">
            <div className="p-8">
              <a href="#" onClick={(e) => {
                          e.preventDefault();
                          if (window.history.length > 1) {
                            window.history.back();
                          } else {
                            window.location.href = "/"; // Fallback URL, e.g., home page
                          }
                        }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </a>

            </div>

            <div className="p-8">
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </a>
        </div>

        </div>

        <div className="flex flex-col">
          <div className="p-8">
            <a href="/KappnsCatch">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </a>

          </div>

        </div>





      </div>  
        
    </div>
  );
};

export default LuxeBite;
