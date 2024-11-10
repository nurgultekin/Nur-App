
import FurhatMockUp from '../../media/furhat-mockup.png';
import '../../../App.css';
import AnimationDark from "../AnimationDark";
import 'tailwindcss/tailwind.css';

const Furhat = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AnimationDark/>
      

        <div className="flex flex-col lg:flex-row justify-center mx-auto w-4/5 mt-5">

        <div className="flex gap-[15px] items-baseline mt-40 mr-auto lg:mr-10 max-w-fit object-scale-down mx-auto">
          <img src={FurhatMockUp} className=" rounded-lg md:block max-w-sm md:max-w-lg sm:max-w-sm"  />
        </div>

        <div className="text-white flex flex-col justify-center items-left lg:items-left mt-10 md:mt-10 lg:mt-48 mr-auto lg:mr-10 mx-auto max-w-fit gap-4">
          <div className=" font-['Tomorrow'] text-[18px] sm:text-[18px] sm:leading-[22px] md:text-[24px] md:leading-[28px] lg:text-[32px] lg:leading-[36px]">Case Study 1: </div>
          <div className=" font-['Tomorrow'] text-[42px] sm:text-[42px] sm:leading-[48px] md:text-[60px] md:leading-[64px] lg:text-[78px] lg:leading-[80px] ">Furhat Robotics</div>
            {/* <a href="https://kappns-catch.netlify.app/" target="_blank"className="primary-button max-w-60 text-black py-2 mt-10 mr-4 ">See the Website 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </a> */}
        </div>
        </div>

      <div className="flex flex-col justify-center items-center mx-auto ">
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mx-auto md:w-4/5 mt-24 px-3 md:px-4">
            <div className="flex flex-col items-left gap-[10px]">
            <div className="flex items-center gap-2">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lim-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">My role</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            Frontend Developer
            </div>
            </div>

            <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-2">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke ">Scope</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
                July 2024 - January 2025 - Internship
            </div>
            </div>

            <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-2">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">Created By</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            Nur Gültekin
            </div>
            </div>

            <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-2">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">Frameworks</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            React.js, Webflow, Vanilla.js, Figma, HTML & CSS, Freemarker, Kotlin, Wordpress
            </div>
            </div>
        </div>
      </div>


      <div className="text-white flex flex-col items-center mx-auto mt-48">
        <div className="text-white  font-normal font-['Tomorrow'] text-center text-3xl md:text-5xl p-8 mb-12 mt-5 border-b border-lime-300 ">Project Overview</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px]">
          <p>During my internship at Furhat Robotics, I&qrsqo;ve undertaken the challenge of designing and building a completely new website tailored to the company&qrsqo;s evolved brand and new target audience. The previous site, built for an earlier phase in Furhat&qrsqo;s journey, no longer aligned with their expanded product line, broader audience, or brand identity. My task was to create a website that not only addressed accessibility and user experience shortcomings but also redefined Furhat&qrsqo;s online presence with a fresh, engaging, and adaptable design. </p>
        </div>
      </div>




      <div className="text-white flex flex-col items-center justify-center mx-auto mt-48 my-10">
          <div className="text-[30px] md:text-[36px] lg:text-5xl font-['Tomorrow'] text-whitesmoke mb-12 mt-5 p-8 border-b border-lime-300" >Problem and Solution</div>
            <div className="max-w-xl justify-center mx-auto lg:justify-end mb-12">
                <p>As Furhat Robotics has grown, so has their audience. While the old website suited a different era of the company, it now fell short in key areas:</p>
            </div>
            
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
            <ul className="flex flex-col gap-8">
                <li className="list-disc marker:text-lime-300">
                    <span className="text-lime-300">Accessibility: </span>
                    The website needed updates to meet accessibility standards, ensuring usability for all visitors.</li>
                <li className="list-disc marker:text-lime-300">
                    <span className="text-lime-300">Visual Design & User Experience: </span>
                    The prior design lacked a cohesive structure and didn&qrsqo;t effectively engage or inform Furhat&qrsqo;s new audience. </li>
                <li className="list-disc marker:text-lime-300">
                    <span className="text-lime-300">Brand Consistency: </span>
                    The evolving company profile and new target demographic demanded a rebranded approach to showcase Furhat&qrsqo;s value propositions.</li>
            </ul>
            <p>To address these needs, I set out to design and build a website from scratch that would communicate Furhat&qrsqo;s refined brand voice, in line with modern UX/UI principles, and appeal to their new audience. I aimed to deliver a visually engaging experience that was intuitive to navigate and developed with clean, reusable code.</p>
          </div>
        </div>



     

        <div className="text-white flex flex-col items-center justify-center mx-auto mt-48 my-10">
          <div className="text-[30px] md:text-[36px] lg:text-5xl font-['Tomorrow'] text-whitesmoke mb-12 mt-5 p-8 border-b border-lime-300" >Design and Development Process</div>
            <div className="max-w-xl justify-center mx-auto lg:justify-end mb-12">
                <p>Since this was a real-world project and with work-confidentiality in mind, I am limited in the information I can share, but I&qrsqo;d be glad to provide a link to the live site once it&qrsqo;s available.</p>
                <p>Throughout the design process, I focused on three core principles:</p>
            </div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
            <ul className="flex flex-col gap-8">
                <li className="list-disc marker:text-lime-300">
                    <span className="text-lime-300">Accessibility: </span>
                    Ensuring a website that could be easily navigated and understood by diverse users was paramount. I carefully created a design system with typography & typescale, color contrasts, and layout structures to enhance readability and meet accessibility guidelines. 
                    </li>
                <li className="list-disc marker:text-lime-300">
                    <span className="text-lime-300">Visual Cohesion & Branding: </span>
                    I established a design language that expressed Furhat&qrsqo;s identity—professional yet friendly, innovative yet approachable. This involved choosing a color scheme, typography, and page flow that aligned with their brand values.
                </li>
                <li className="list-disc marker:text-lime-300">
                    <span className="text-lime-300">Efficient Codebase </span>
                        Building with scalability in mind, I used clean and modular code, which optimized performance and future maintenance. This approach allowed for reusable components across pages and ensured a seamless experience regardless of user device or screen size.
                </li>
            </ul>
            <p>In addition to the website, I had the opportunity to work with Furhat&qrsqo;s graphical user interface  for robot skill development. Developers use this GUI to add and adjust skills for Furhat&qrsqo;s robots. My role involved rebuilding parts of this interface using Freemarker, which also included solving some backend issues with Kotlin & Java that arose as the new interface took shape. This experience allowed me to contribute to both frontend and backend areas to ensure the overall functionality and ease of use of the interface.</p>
          </div>
        </div>



      

      <div className="flex justify-between items-baseline pr-4">
        <div className="flex gap-0">
            <div className="p-8">
            <div className="flex flex-col">
              <p className="font-['Roboto'] text-white text-[14px] m-0">  </p>
              <p className="font-['Roboto'] text-white text-[18px] m-0">Go Back</p>
            </div>
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
        </div>

      <div className="flex flex-col items-left gap-2 p-8">
        <div>
          <p className="font-['Roboto'] text-white text-[14px] m-0">Next Case Study:</p>
          <p className="font-['Roboto'] text-white text-[18px] m-0">LuxeBite</p>
        </div>
  
  
        <a href="/LuxebiteCaseStudy" className="ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </a>
      </div>



      </div>  
        
    </div>
  );
};

export default Furhat;
