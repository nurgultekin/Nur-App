
import KappnsCatchMob from '../../media/kappns-catch/mockup-mobile.gif';
import KappnsCatchDT from '../../media/kappns-catch/mockup-desktop.gif';
import KappnsCatchDev from '../../media/kappns-catch/codeLove.png';
import '../../../App.css';
import Section from "../SectionsLayout";
import AnimationDark from "../AnimationDark";
import 'tailwindcss/tailwind.css';
import {Link} from "react-router-dom"

const FantasyChass = () => {

  /* const overView = [
    {
      title: "My role",
      description: "Lead Frontend Developer",
    },
    {
      title: "Scope",
      description: "June 2024 (One week) - School project",
    },
    {
      title: "Team",
      description: "Nur Gültekin, Rasmus Mattsson, Matilda Danielsson, Rebecca Reimers, Kenny Gustafsson",
    },
    {
      title: "Frameworks",
      description: "React.js, Figma, Tailwind CSS, Scrum",
    },
  ]; */

  // Data for other sections

const summary = {
  title: "Project Overview",
  paragraph: " As part of a school project, my team and I created Kapp’n’s Catch, a whimsical web shop offering an imaginary selection of living fish products. This playful project combined dynamic content, a smooth checkout process, and an interface styled with Tailwind CSS. The challenge lay in developing a functional and engaging web shop within a one-week timeline, while managing a collaborative workflow to ensure smooth integration of our code. ",
  content:null,
  isList:false,

};

const problemAndSolution = {
  title: "Problem & Solution",
  paragraph: "Our key challenge was the tight deadline: we had only one week to take Kapp’n’s Catch from concept to completion. As one of the two developers, my role was to manage our codebase and ensure efficient collaboration. Rasmus and I focused on clean, reusable code, utilizing Tailwind CSS to streamline our styling process and speed up interface development with pre-built components. By dynamically fetching product data, we built a website that could adapt to content changes without manual updates, providing a functional shopping experience with dynamic content.",
  isList: false,
};

const designAndDevelopmentProcess = {
  title: "Development Process",

  content: [
    {
      title: "Collaborative Code Management",
      description: "Using GitHub, I took responsibility for managing our branches and merging processes. We adopted a cautious, step-by-step approach to merging, ensuring each update was functional and bug-free before moving changes to the main branch.",
    },
    {
      title: "Dynamic Content",
      description: "We created a dataset of fictional fish products and used it to populate the site dynamically, which allowed for an evolving product selection. ",
    },
    {
      title: "Time Optimization",
      description: "Tailwind's utility-first framework helped us quickly style the interface. By leveraging pre-built components, we saved time without compromising on design quality. This resulted in a visually engaging and cohesive experience.",
    },
    {
      title: "Tools & Frameworks",
      description: "We used React for building the dynamic elements of the web shop, Tailwind CSS for styling, and Figma for initial design and collaboration with our UX/UI designers. This combination allowed us to work efficiently and achieve a polished product in a short timeframe.",
    },
  ],
  isList: true,
};

const futureImprovements = {
  title: "What Could We Improve?",

  content: [
    {
      title: "Layout First",
      description: "Start with the layout, work later on logic and debugging to use the tight deadline even more efficiently.",
    },
    {
      title: "Code Structure",
      description: "Improve the organization and clarity of the project's code by ensuring a logical structure for component mapping, minimizing code redundancy, and establishing a clean, well-organized file structure.",
    },
    {
      title: "UX & UI",
      description: "Due to the one-week timeframe, we had limited opportunity to focus on the UX/UI aspects of the project. As a result, we relied on pre-existing styles from the Tailwind library rather than developing a custom user journey map or dedicating time to refining the visual interface. Therefore, the project remains rather simple in terms of design. With more time, we could have placed greater emphasis on enhancing the user experience and visual aesthetics.",
    },
  ],
  isList: true,
};

const conclusion = {
  title: "Conclusion",
  paragraph: "Kapp'n's Catch was a valuable exercise in time management, teamwork, and technical efficiency. Despite the short timeline, our team's commitment to clean code, dynamic functionality, and effective collaboration enabled us to create a functional and delightful product. This experience reinforced the importance of structure and code organization in collaborative projects, and ensured that each member's contributions fit suently into the whole.",
  content:null,
  isList:false,

};



  
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AnimationDark/>
      

        <div className="flex flex-col lg:flex-row justify-center mx-auto mt-5">

        <div className="flex gap-[0.5rem] items-center lg:items-baseline justify-center mt-40  lg:max-w-[40vw] max-w-full object-scale-down mx-auto">
          <img src={KappnsCatchDT} className=" rounded-lg md:block max-w-[50vw] lg:max-w-[70%] data-twe-lazy-load-init"  />
          <img src={KappnsCatchMob} className="rounded-lg block lg:block max-w-[30vw] lg:max-w-[40%] data-twe-lazy-load-init" />
        </div>

        <div className="text-white flex flex-col justify-center items-left lg:items-left mt-10 md:mt-10 lg:mt-48 max-w-[70vw] lg:max-w-[40vw] gap-4 mx-auto">
          <div className=" font-titan text-[18px] sm:text-[18px] sm:leading-[22px] md:text-[24px] md:leading-[28px] lg:text-[32px] lg:leading-[36px]">Case Study 4: </div>
          <div className=" font-titan text-[42px] sm:text-[42px] sm:leading-[48px] md:text-[60px] md:leading-[64px] lg:text-[78px] lg:leading-[80px] ">Fantasy Chass</div>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <a href="https://kappns-catch.netlify.app/" target="_blank"className="primary-button text-black text-sm py-2 md:mt-10 mr-4 scale-90 md:scale-100 whitespace-nowrap ">See the Website 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              </a>

              <a href="https://kappns-catch.netlify.app/" target="_blank"className="secondary-button text-black text-sm py-2 md:mt-10 mr-4 flex gap-2 scale-90 md:scale-100 whitespace-nowrap">See on Github 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              </a>
            </div>
        </div>
        </div>

      <div className="flex flex-col justify-center items-center mx-auto mt-24 max-w-[70vw] md:max-w-4/5">
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mx-auto mt-24 px-3 md:px-4">
            <div className="flex flex-col items-left gap-[10px]">
            <div className="flex items-center gap-2">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-titan text-whitesmoke">My role</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            Lead Frontend Developer
            </div>
            </div>

            <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-2">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-titan text-whitesmoke ">Scope</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
                June 2024 (One week) - School project
            </div>
            </div>

            <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-2">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-titan text-whitesmoke">Team</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            Nur Gültekin, Rasmus Mattsson, Matilda Danielsson, Rebecca Reimers, Kenny Gustafsson
            </div>
            </div>

            <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-2">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-titan text-whitesmoke">Frameworks</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            React.js, Figma, Tailwind CSS, Scrum
            </div>
            </div>
        </div>
      </div>


    {/* Summary  */}
    <Section title={summary.title} paragraph={summary.paragraph}/>

    {/* Problem and Solution Section */}
    <Section title={problemAndSolution.title} paragraph={problemAndSolution.paragraph} content={problemAndSolution.content} isList={problemAndSolution.isList} />

    {/* Design and Development Process Section */}
    <div className="flex flex-col justify-center items-center">
      <img src={KappnsCatchDev} className="rounded-md md:block max-w-50vw lg:max-w-[50%] data-twe-lazy-load-init"/>
      <Section title={designAndDevelopmentProcess.title} paragraph={designAndDevelopmentProcess.paragraph} content={designAndDevelopmentProcess.content} isList={designAndDevelopmentProcess.isList} />

    </div>
    

     
     {/* Improvements Section */}
    <Section title={futureImprovements.title} paragraph={futureImprovements.paragraph} content={futureImprovements.content} isList={futureImprovements.isList} />
     

    {/* Summary  */}
    <Section title={conclusion.title} paragraph={conclusion.paragraph}/>
      

      <div className="flex justify-between items-center">
        <div className="flex items-baseline lg:gap-4">
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

        <div className="flex flex-col items-center gap-2 p-8">
          <p className="font-titan text-white text-[14px] m-0">Next Case Study:</p>
          <Link to="https://www.academia.edu/125364534/Digital_Transformation_och_Delaktighet_En_granskande_fallstudie_av_Kalmar_Bibliotek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <p className="font-titan text-white text-[18px] m-0">Kalmar City Library</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </Link>
        </div>




      </div>  
        
    </div>
  );
};

export default FantasyChass;
