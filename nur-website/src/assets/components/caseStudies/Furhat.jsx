
import FurhatMockUp from "../../media/furhat-mockup.svg";
import '../../../App.css';
import AnimationDark from "../AnimationDark";
import Section from "../SectionsLayout";
import 'tailwindcss/tailwind.css';

const Furhat = () => {

  const overView = [
    {
      title: "My role",
      description: "Frontend Developer",
    },
    {
      title: "Scope",
      description: "July 8, 2024 -  January 8, 2025 - Internship",
    },
    {
      title: "Created By",
      description: "Nur Gültekin",
    },
    {
      title: "Frameworks",
      description: "React.js, Webflow, Figma, Vanilla js, HTML & CSS, Freemarker, Kotlin and Java.",
    },
  ];

// Data for other sections

const summary = {
  title: "Project Overview",
  paragraph: "During my internship at Furhat Robotics, I’ve undertaken the challenge of designing and building a completely new website tailored to the company’s evolved brand and new target audience. The previous site, built for an earlier phase in Furhat’s journey, no longer aligned with their expanded product line, broader audience, or brand identity. My task was to create a website that not only addressed accessibility and user experience shortcomings but also redefined Furhat’s online presence with a fresh, engaging, and adaptable design. ",
  content:null,
  isList:false,

};

const problemAndSolution = {
  title: "Problem and Solution",
  paragraph: "As Furhat Robotics has grown, so has their audience. While the old website suited a different era of the company, it now fell short in key areas:",
  content: [
    {
      title: "Accessibility",
      description: "The website needed updates to meet accessibility standards in order to ensure usability for all visitors.",
    },
    {
      title: "Visual Design & User Experience",
      description: "The prior design lacked a cohesive structure and visual hierarchy, thereby entailed the risk of not effectively engaging or informing Furhat's new audience.",
    },
    {
      title: "Brand Consistency",
      description: "The evolving company profile and new target demographic demanded a rebranded approach to showcase Furhat's value propositions.",
    },
  ],
  isList: true,
};

const designAndDevelopmentProcess = {
  title: "Design and Development Process",
  paragraph: [
    "Since this was a real-world project and with work-confidentiality in mind, I am limited in the information I can share, but I’d be glad to provide a link to the live site once it’s available.",
    "Throughout the design process, I focused on three core principles:"
  ],
  

  content: [
    {
      title: "Accessibility",
      description: "Ensuring a website that could be easily navigated and understood by diverse users was paramount. I carefully created a design system with typography & typescale, color contrasts, and layout structures to enhance readability and meet accessibility guidelines.",
    },
    {
      title: "Visual Cohesion & Branding",
      description: "I established a design language that expressed Furhat's identity—professional yet friendly, innovative yet approachable. This involved choosing a color scheme, typography, and page flow that aligned with their brand values.",
    },
    {
      title: "Efficient Codebase",
      description: "Building with scalability in mind, I used clean and modular code, which optimized performance and future maintenance. This approach allowed for reusable components across pages and ensured a seamless experience regardless of user device or screen size.",
    },
  ],
  isList: true,
};



  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AnimationDark/>
      

        <div className="flex flex-col lg:flex-row justify-center mx-auto w-4/5 mt-5">

        <div className="flex gap-[15px] items-baseline mt-40 mr-auto lg:mr-10 max-w-fit object-scale-down mx-auto">
          <img src={FurhatMockUp} className=" rounded-lg md:block max-w-sm md:max-w-lg sm:max-w-sm  data-twe-lazy-load-init"  />
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



        {/* Details  Overview using mapping method so that I am optimizing layout and creating reusable components even in script*/}
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-md lg:max-w-4xl items-start justify-center mx-auto mt-24 mb-48 px-12 md:px-4">
          {overView.map((section, index) => (
            <div key={index} className="flex flex-col items-start gap-[10px]">
              <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-['Roboto'] text-whitesmoke leading-[30px] lg:max-w-[25rem] mt-[4px] text-left">
                {section.paragraph}
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-['Tomorrow'] text-whitesmoke">
                  {section.title}
                </div>
              </div>
              <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-['Roboto'] text-whitesmoke leading-[30px] lg:max-w-[25rem] mt-[4px] text-left">
                {section.description}
              </div>
            </div>
          ))}
        </div>


           {/* Summary  */}
    <Section title={summary.title} paragraph={summary.paragraph}/>

    {/* Problem and Solution Section */}
    <Section title={problemAndSolution.title} paragraph={problemAndSolution.paragraph} content={problemAndSolution.content} isList={problemAndSolution.isList} />

    {/* Design and Development Process Section */}
    <Section title={designAndDevelopmentProcess.title} paragraph={designAndDevelopmentProcess.paragraph} content={designAndDevelopmentProcess.content} isList={designAndDevelopmentProcess.isList} />


      

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
