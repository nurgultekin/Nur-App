import NurImage from "../media/images/nurPortre.jpg";
import 'tailwindcss/tailwind.css';
import Animation from './Animation';
import '../styling/about.css';
import '../../App.css';
import chasHalloween from '../media/about-me/chas-halloween.png';
import chasHalloween2 from '../media/about-me/chas-halloween_2.png';
import chasElevator from '../media/about-me/chas-elevator.png';
import diceEvent from '../media/about-me/dice_matilda.png';


const AboutPage = () => {
  return (
    <div> {/* Wrapping the content in a single root element */}
      <Animation />
      <div></div>

      <section className="about-container bg-gradient-to-b from-[#d3e75b] via-[#d3e75b] to-[#b894d0] rounded mt-24">
        <div className="AboutMeDiv w-[79.625rem] h-[50.5rem] pr-[4.438rem] pb-[2.313rem] justify-start items-end gap-[3.5rem] inline-flex">
          <img 
            src={NurImage} 
            style={{ maxHeight: '70vh', width: 'auto', marginLeft: "9.375rem" }} 
            alt="About Image" 
          />
          <div className="about-text-container">
            <div className="Frame95 w-[35.375rem] h-[36.25rem] flex-col justify-start items-center gap-[1.25rem] inline-flex ">
              {/* Center-aligned About Title */}
              <div className="About w-[7.75rem] h-[3.65rem] text-black text-[2.3125rem] font-normal font-['Titan_One'] leading-[3rem] text-center mx-auto">About</div>
              
              {/* Left-aligned text content */}
              <div className="TextAboutMe w-[35.375rem] h-[30.125rem] text-black text-xl font-normal font-['Roboto'] leading-[1.875rem] text-left">
                I am a Stockholm-based front-end software developer and UX/UI designer originally from Istanbul.
                <br/><br/>
                Before transitioning to the tech sector, I worked as a project manager at a media outlet in Istanbul, a research assistant at BI Norwegian Business School, and a business analyst at a logistics company in Istanbul.
                <br/><br/>
                Since September 2023, I&rsquo;ve been attending the vocational education program for UX design and front-end development at Chas Academy.
                <br/><br/>
                Currently, I&rsquo;m a Web Developer intern at Furhat Robotics in Stockholm where I have designed and crafted a new website for the world&rsquo;s coolest conversational robots!
                <br/><br/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Chas-pics">
        <div className="flex w-[90vw] h-[90vh] justify-center mt-48">
          <div><img src={chasHalloween}  style={{ Height: '80vh', width: 'auto', marginLeft: "9.375rem" }} alt="Halloween Image" className="rounded" /></div>
        
        <div className="flex-column gap-1">
          <div><img src={chasHalloween2} style={{ Height: '45vh', width: 'auto', marginLeft: "9.375rem" }}  alt="Chas Halloween Fest 2" className="rounded" /></div>
          <div><img src={chasElevator} style={{ Height: '45vh', width: 'auto', marginLeft: "9.375rem" }}  alt="Chas Academy Elevator" className="rounded" /></div>
        </div>
        <div><img src= {diceEvent} alt="Nur and her friend Matilda at Dice pink programming event" className="rounded" /></div>
        </div>
      </section>

      {/* Section 1: Music Enthusiast */}
      <section className="bg-dark text-white font-['Roboto'] text-l p-6 rounded-lg my-8">
          <div className="flex gap-4">
          <img src="/path/to/image1.jpg" alt="Metal image" className="rounded" />
          <img src="/path/to/image2.jpg" alt="Rock image" className="rounded" />
        </div>
        <div>
        <h3 className="text-2xl font-bold mb-4">Music Enthusiast</h3>
        <p>I am undeniably passionate about music; you could say it is a big part of who I am. I dabble in singing and make time for guitar practice.</p>
        </div>
      
      </section>

      {/* Section 2: Metalhead & Rock 'N' Roller */}
      <section className="bg-dark text-light p-6 rounded-lg my-8">
        <h3 className="text-2xl font-bold mb-4">A metalhead & rock &lsquo;n&rsquo; roller who never wants to miss a gig</h3>
        <p>
          My heart beats for heavy metal, classical & blues rock, and classical jazz. 
          Metallica, Black Sabbath, Rory Gallagher, Blue Öyster Cult, Led Zeppelin, Pink Floyd, and Queen are just a few of my favorites.
        </p>
        {/* You can add images below */}
        <div className="flex gap-4">
          <img src="/path/to/image1.jpg" alt="Metal image" className="rounded" />
          <img src="/path/to/image2.jpg" alt="Rock image" className="rounded" />
        </div>
      </section>

      {/* Section 3: Jazz Lover */}
      <section className="bg-dark text-light p-6 rounded-lg my-8">
        <h3 className="text-2xl font-bold mb-4">Jazz lover who likes swing dancing</h3>
        <p>
          I groove to classical jazz, particularly bebop, and take joy in getting out that energy through the moves of Lindy hop and Charleston.
        </p>
        {/* You can add more images or videos here */}
        <div className="flex gap-4">
          <img src="/path/to/image1.jpg" alt="Jazz image" className="rounded" />
          <img src="/path/to/image2.jpg" alt="Swing image" className="rounded" />
        </div>
      </section>

      {/* Section 4: Personal Image */}
      <section className="bg-dark text-light p-6 rounded-lg my-8">
        <h3 className="text-2xl font-bold mb-4">Personal Life</h3>
        <p>And when I am not doing any of these, I love spending time with my cat!</p>
        <div className="flex gap-4">
          <img src="/path/to/your-cat-image.jpg" alt="Cat image" className="rounded" />
        </div>
      </section>
    </div>  
  );
};

export default AboutPage;
