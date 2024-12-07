
import fantasyChass from '../../media/fantasyChass.png';
import fantasyChassFlow from '../../media/fantasyChass-flow.png';
import fantasyChassFlowLG from '../../media/fantasyChass-flow-desktop.png';
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
  paragraph: "This project is a text-based RPG inspired by Dungeons and Dragons, where an AI played the role of the Dungeon Master, dynamically creating stories and gameplay for users. It was developed as part of an innovation competition and involved a multidisciplinary team, including frontend developers, fullstack developers, .NET developers, and DevOps engineers. My role as a frontend developer and UX designer was to design the user interface and implement the game flow, ensuring an engaging and intuitive experience for players. ",
  content:null,
  isList:false,

};

const problemAndSolution = {
  title: "Problem & Solution",
  paragraph: "Traditional tabletop RPGs like Dungeons and Dragons are popular for their storytelling and collaborative gameplay. However, they often require a skilled Dungeon Master to craft immersive narratives and manage gameplay, making it challenging for casual players to enjoy the experience without extensive preparation or expertise. Also, we think that the existing digital RPG platforms lack the creativity and adaptability of human DMs, which can turn into a repetitive or predictable experiences. This gap highlights the need for an innovative approach to delivering personalized, AI-driven RPG experiences that are accessible and engaging for players of all skill levels. So to address that shortcoming, we wanted to create a dynamic and accessible role-playing game experience for users without the need for a human Dungeon Master, while maintaining the creativity and unpredictability that make RPGs engaging.",
  isList: false,
};

const designAndDevelopmentProcess = {
  title: "Design and Development Process",

  content: [
    {
      title: "User-Centered Design Approach",
      description: "I took responsibility for creating an engaging interface with a smooth, understandable, and usable flow while ensuring it appealed to the gamer community. To achieve this, I conducted user research through interviews with 8 individuals and a survey answered by 29 gamers highly engaged in RPGs. The insights revealed a strong preference for a clearer, less cluttered character info, background, and stats window, greater customizability, and appreciation for AI integration. Additionally, new players to Dungeons and Dragons-like games struggled with understanding the mechanics and how to get started. These findings heavily informed our design choices."
    },
    {
      title: "Wireframing and Prototyping",
      description: "In the initial wireframing phase, I focused on addressing user pain points by creating a clear starting point and flow. The prototype began with an introduction to the Dungeon Master, followed by character creation. Users could choose from three options: creating a character manually, generating one using an integrated AI model, or selecting an existing character. If the AI option was chosen, users could specify character preferences and optionally provide a backstory prompt. Once character creation was completed, the game transitioned to text-based gameplay through an AI-powered chatbot. The AI Dungeon Master narrated the story, guided actions, and presented choices, while the chatbot stored the story for saving and resuming the game later."
    },
    {
      title: "AI Integration and Testing",
      description: "In collaboration with .NET developers, DevOps, and full-stack developers, we successfully integrated AI into our system. The AI powered the Dungeon Master's storytelling and gameplay mechanics, offering a dynamic and immersive experience. Following integration, we conducted extensive testing to ensure functionality and user satisfaction."
    },
    {
      title: "Tools & Frameworks",
      description: "We used a combination of Figma for wireframing, React.js for the frontend, Node.js for backend development, and Agile methodology to coordinate our large team of 12. GitHub was essential for code management, while Notion and Discord facilitated project organization and communication."
    },
    {
      title: "Outcome",
      description: "This project was part of an innovation competition at Chas Academy, where we secured third place out of 16 participating teams. The accomplishment highlighted the team's creativity, collaboration, and ability to deliver a functional, user-focused product."
    }
  ],

  isList: true,
};


const futureImprovements = {
  title: "What Could We Improve?",

  content: [
    {
      title: "Enhanced User Research",
      description: "While our user research provided valuable insights, conducting additional rounds of testing with a broader audience could help refine the game mechanics and ensure they cater to diverse player needs."
    },
    {
      title: "Streamlined Onboarding",
      description: "Though we addressed the onboarding challenges for first-time players, a more robust tutorial or guided walkthrough could further reduce confusion and enhance the player experience."
    },
    {
      title: "Expanded AI Features",
      description: "The AI integration was well-received, but expanding its capabilities to include more dynamic responses and branching storylines could make the gameplay even more immersive and replayable."
    },
    {
      title: "Visual Enhancements",
      description: "Given more time, we could invest in improving the visual design and UI elements to align better with modern RPG aesthetics and gamer expectations."
    }
  ],

  isList: true,
};

const conclusion = {
  title: "Conclusion",
  paragraph: "This text-based RPG project was an incredible opportunity to explore the intersection of design, development, and AI innovation. Our team's collaborative efforts and commitment to user-centered design resulted in a functional and engaging game. Placing third in Chas Academy's innovation competition validated our approach and highlighted areas for growth. Moving forward, this project serves as a foundation for further exploration into dynamic AI-driven narratives and enhanced user experiences.",
  content: null,
  isList: false,
};


  
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AnimationDark/>
      

        <div className="flex flex-col lg:flex-row justify-center mx-auto mt-5">

        <div className="flex gap-[0.5rem] items-center lg:items-baseline justify-center mt-40  lg:max-w-[40vw] max-w-full object-scale-down mx-auto">
          <img src={fantasyChass} className=" rounded-lg md:block max-w-[50vw] lg:max-w-[70%] data-twe-lazy-load-init"  />
        </div>

        <div className="text-white flex flex-col justify-center items-left lg:items-left mt-10 md:mt-10 lg:mt-48 max-w-[70vw] lg:max-w-[40vw] gap-4 mx-auto">
          <div className=" font-titan text-[18px] sm:text-[18px] leading-[150%] md:text-[24px] lg:text-[32px] lg:leading-[36px]">Case Study 4: </div>
          <div className=" font-titan text-[42px] sm:text-[42px] leading-[150%] md:text-[60px]  lg:text-[78px] lg:leading-[80px] ">Fantasy Chass</div>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
{/*               <a href="https://kappns-catch.netlify.app/" target="_blank"className="primary-button text-black text-sm py-2 md:mt-10 mr-4 scale-90 md:scale-100 whitespace-nowrap ">See the Website 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              </a> */}
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
    <div className="flex flex-col justify-center items-center text-white">
      <img src={fantasyChassFlow} loading="lazy" alt="Visual sequence depicting the start menu and gameplay process of the Stayin Alive game." className="rounded-md lg:hidden max-h-[70vh]"/>
      <img src={fantasyChassFlowLG} loading="lazy" className="rounded-md hidden lg:block max-h-[60vh]"/>
      <p>Figure: Stayin Alive game start and play flow</p>
      <Section title={designAndDevelopmentProcess.title} paragraph={designAndDevelopmentProcess.paragraph} content={designAndDevelopmentProcess.content} isList={designAndDevelopmentProcess.isList} />

    </div>
    

     
     {/* Improvements Section */}
    <Section title={futureImprovements.title} paragraph={futureImprovements.paragraph} content={futureImprovements.content} isList={futureImprovements.isList} />
     

    {/* Summary  */}
    <Section title={conclusion.title} paragraph={conclusion.paragraph}/>
      

      <div className="flex justify-between items-end">
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

{/*             <div className="p-8">
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </a>
            </div> */}

        </div>

        <div className="flex flex-col items-center gap-2 p-8 mb-24">
          <Link 
            to="https://www.academia.edu/125364534/Digital_Transformation_och_Delaktighet_En_granskande_fallstudie_av_Kalmar_Bibliotek" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col gap-2 w-full items-end"
          >
            <div className="flex flex-col items-end">
              <p className="font-titan text-white text-[14px] m-0">Next:</p>
              <p className="font-titan text-white text-[18px] m-0">Kalmar City Library</p>
            </div>

            <div className="flex justify-end w-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 

                stroke="white" 
                className="size-8"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="m13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" 
                />
              </svg>
            </div>
          </Link>
        </div>



      </div>  
        
    </div>
  );
};

export default FantasyChass;
