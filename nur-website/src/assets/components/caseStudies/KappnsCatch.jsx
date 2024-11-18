
import KappnsCatchMob from '../../media/kappns-catch/mockup-mobile.gif';
import KappnsCatchDT from '../../media/kappns-catch/mockup-desktop.gif';
import KappnsCatchDev from '../../media/kappns-catch/codeLove.png';
import '../../../App.css';
import AnimationDark from "../AnimationDark";
import 'tailwindcss/tailwind.css';

const KappnsCatch = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AnimationDark/>
      

        <div className="flex flex-col lg:flex-row justify-center mx-auto w-4/5 mt-5">

        <div className="flex gap-[15px] items-baseline mt-40 mr-auto lg:mr-10 max-w-fit object-scale-down mx-auto">
          <img src={KappnsCatchDT} className=" rounded-lg md:block max-w-sm md:max-w-lg sm:max-w-sm  data-twe-lazy-load-init"  />
          <img src={KappnsCatchMob} className="rounded-lg hidden lg:block max-w-xs lg:max-w-md  data-twe-lazy-load-init" />
        </div>

        <div className="text-white flex flex-col justify-center items-left lg:items-left mt-10 md:mt-10 lg:mt-48 mr-auto lg:mr-10 mx-auto max-w-fit gap-4">
          <div className=" font-['Tomorrow'] text-[18px] sm:text-[18px] sm:leading-[22px] md:text-[24px] md:leading-[28px] lg:text-[32px] lg:leading-[36px]">Case Study 3: </div>
          <div className=" font-['Tomorrow'] text-[42px] sm:text-[42px] sm:leading-[48px] md:text-[60px] md:leading-[64px] lg:text-[78px] lg:leading-[80px] ">Kapp&rsquo;n&rsquo;s Catch</div>
            <div className="flex gap-4">
              <a href="https://kappns-catch.netlify.app/" target="_blank"className="primary-button max-w-60 text-black py-2 mt-10 mr-4 ">See the Website 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              </a>

              <a href="https://kappns-catch.netlify.app/" target="_blank"className="secondary-button max-w-60 text-black py-2 mt-10 mr-4 flex gap-2">See on Github 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              </a>
            </div>
        </div>
        </div>

      <div className="flex flex-col justify-center items-center mx-auto ">
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mx-auto md:w-4/5 mt-24 px-3 md:px-4">
            <div className="flex flex-col items-left gap-[10px]">
            <div className="flex items-center gap-2">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">My role</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            Lead Frontend Developer
            </div>
            </div>

            <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-2">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke ">Scope</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
                June 2024 (One week) - School project
            </div>
            </div>

            <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-2">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">Team</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            Nur Gültekin, Rasmus Mattsson, Matilda Danielsson, Rebecca Reimers, Kenny Gustafsson
            </div>
            </div>

            <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-2">
                <div className="w-[21.04px] h-[21.04px] bg-transparent border-[4px] border-lime-300 rounded-full" />
                <div className="text-[20px] md:text-[24px] md:leading-[31.2px] font-tomorrow text-whitesmoke">Frameworks</div>
            </div>
            <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] max-w-[400px] mt-[4px] text-left">
            React.js, Figma, Tailwind CSS, Scrum
            </div>
            </div>
        </div>
      </div>


      <div className="text-white flex flex-col items-center mx-auto mt-48">
        <div className="text-white  font-normal font-['Tomorrow'] text-center text-3xl md:text-5xl p-8 mb-12 mt-5 border-b border-lime-300 ">Project Overview</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px]">
          <p>As part of a school project, my team and I created <span className="italic">Kapp&rsquo;n&rsquo;s</span>, a whimsical web shop offering an imaginary selection of living fish products. This playful project combined dynamic content, a smooth checkout process, and an interface styled with Tailwind CSS. The challenge lay in developing a functional and engaging web shop within a one-week timeline, while managing a collaborative workflow to ensure smooth integration of our code.</p>
        </div>
      </div>

      <div className="text-white flex flex-col items-center justify-center mx-auto mt-48 mb-24 my-10">
        <div className="text-[30px] md:text-[36px] lg:text-[42px] font-['Tomorrow'] text-whitesmoke mb-12 mt-5 p-8 border-b border-lime-300">Problem and Solution</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
          <p>Our key challenge was the tight deadline: we had only one week to take Kapp&qrsqo;n&qrsqo;s Catch from concept to completion. As one of the two developers, my role was to manage our codebase and ensure efficient collaboration. Rasmus and I focused on clean, reusable code, utilizing Tailwind CSS to streamline our styling process and speed up interface development with pre-built components. By dynamically fetching product data, we built a website that could adapt to content changes without manual updates, providing a functional shopping experience with dynamic content.</p>
        </div>
      </div>


     

        <div className="text-white flex flex-col items-center justify-center mx-auto mt-48 my-10">
          <div className="text-[30px] md:text-[36px] lg:text-5xl font-['Tomorrow'] text-whitesmoke mb-12 mt-5 p-8 border-b border-lime-300" >Development Process</div>
            <div className="max-w-xl justify-center mx-auto lg:justify-end mb-12">
                <img src={KappnsCatchDev} alt="Kapp'n's Catch Development Process visualization showing integration of API calls and dynamic web building"></img>
            </div>
          <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px] ">
            <ul className="flex flex-col gap-8">
              <li className="list-disc marker:text-lime-300">
                <span className="text-lime-300">Collaborative Code Management: </span>
                Using GitHub, I took responsibility for managing our branches and merging processes. We adopted a cautious, step-by-step approach to merging, ensuring each update was functional and bug-free before moving changes to the main branch.</li>
              <li className="list-disc marker:text-lime-300">
                <span className="text-lime-300">Dynamic Content: </span>
                We created a dataset of fictional fish products and used it to populate the site dynamically, which allowed for an evolving product selection. </li>
              <li className="list-disc marker:text-lime-300">
                <span className="text-lime-300">Time Optimization: </span>
                Tailwind&qrsqo;s utility-first framework helped us quickly style the interface. By leveraging pre-built components, we saved time without compromising on design quality. This resulted in a visually engaging and cohesive experience.</li>
                <li className="list-disc marker:text-lime-300">
                <span className="text-lime-300">Tools & Frameworks: </span>
                We used React for building the dynamic elements of the web shop, Tailwind CSS for styling, and Figma for initial design and collaboration with our UX/UI designers. This combination allowed us to work efficiently and achieve a polished product in a short timeframe.
                </li>
                </ul>
          </div>
        </div>

        <div className="text-white flex flex-col items-center justify-center mx-auto mt-48 my-10">
          <div className="text-[30px] md:text-[36px] lg:text-[42px] font-['Tomorrow'] text-whitesmoke mb-12 mt-5 p-8 border-b border-lime-300 text-center">
            What to Improve?
          </div>

          <ul className="flex flex-col gap-8 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[100px] lg:max-w-[650px]">
            <li className="list-disc">
              Start with the layout, work later on logic and debugging to use the tight deadline even more efficiently,
            </li>
            <li className="list-disc">
                Implement a clearer code structure within the project file,
                </li>

            <li className="list-disc">
                Allocate more time to UX and UI,
            </li>

            <li className="list-disc">
                 Refine Tailwind components for efficiency.
            </li>
          </ul>
        </div>



        <div className="text-white flex flex-col justify-center items-center mx-auto mt-48 mb-48">
        <div className="text-white  font-normal font-['Tomorrow'] text-center text-3xl md:text-5xl p-8 mb-5 mt-5 border-b border-lime-300 ">Conclusion</div>
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left mx-[100px] md:mx-[200px] lg:max-w-[700px]">
          <p><span className="italic">Kapp&rsquo;n&rsquo;s</span> Catch was a valuable exercise in time management, teamwork, and technical efficiency. Despite the short timeline, our team&rsquo;s commitment to clean code, dynamic functionality, and effective collaboration enabled us to create a functional and delightful product. This experience reinforced the importance of structure and code organization in collaborative projects, and ensured that each member&rsquo;s contributions fit suently into the whole.</p>
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

        <div className="flex flex-col items-center gap-2 p-8">
  <p className="font-['Roboto'] text-white text-[14px] m-0">Next Case Study:</p>
  <a href="https://www.academia.edu/125364534/Digital_Transformation_och_Delaktighet_En_granskande_fallstudie_av_Kalmar_Bibliotek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
    <p className="font-['Roboto'] text-white text-[18px] m-0">Kalmar City Library</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  </a>
</div>







      </div>  
        
    </div>
  );
};

export default KappnsCatch;
