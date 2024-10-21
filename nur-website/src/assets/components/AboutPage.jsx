import NurImage from "../media/images/nurPortre.jpg";
import 'tailwindcss/tailwind.css';
import Animation from './Animation';
import '../styling/about.css';
import '../../App.css';
import chasHalloween from '../media/about-me/chas-halloween.png';
import chasHalloween2 from '../media/about-me/chas-halloween_2.png';
import chasElevator from '../media/about-me/chas-elevator.png';
import diceEvent from '../media/about-me/dice_matilda.png';
import metalMusicMeme from '../media/about-me/meta-meme.png';
import metalMusicGif from '../media/about-me/metal_gif.png';
import Concerts from '../media/about-me/nur-nils_concerts.png';
import JazzVisuals from '../media/about-me/Jazz-visuals.png';
import nurPhotography from '../media/about-me/nur-photography.png';
import personalLife from '../media/about-me/personal-life.png';



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
              <div className="About w-[7.75rem] h-[3.65rem] text-black text-6xl font-normal font-['Titan_One'] leading-[3rem] text-center mx-auto">About</div>
              
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

      <section className="Chas-pics hidden">
        <div className="flex w-[90vw] h-[90vh] justify-center mt-48 gap-4"> {/* Added gap-4 for spacing */}
          
          {/* First image */}
          <div>
            <img 
              src={chasHalloween} 
              style={{ height: '80vh', width: 'auto' }} 
              alt="Halloween Image" 
              className="rounded" 
            />
          </div>
          
          {/* Column of two smaller images */}
          <div className="flex flex-col gap-4"> {/* Changed flex-column to flex-col */}
            <div>
              <img 
                src={chasHalloween2} 
                style={{ height: '45vh', width: 'auto' }} 
                alt="Chas Halloween Fest 2" 
                className="rounded" 
              />
            </div>
            <div>
              <img 
                src={chasElevator} 
                style={{ height: '45vh', width: 'auto' }} 
                alt="Chas Academy Elevator" 
                className="rounded" 
              />
            </div>
          </div>

          {/* Third image */}
          <div>
            <img 
              src={diceEvent} 
              alt="Nur and her friend Matilda at Dice pink programming event" 
              className="rounded" 
            />
          </div>
        </div>
      </section>

      {/* Section 1: Music Enthusiast */}
      <section className="bg-dark text-white font-['Roboto'] text-l p-48 rounded-lg flex gap-4">
        <div className="flex gap-4 mr-24 ml-12">
          <img src={metalMusicMeme} style={{ height: '45vh', width: 'auto' }} alt="Metal meme" className="rounded" />
          <img src={metalMusicGif} style={{ height: '45vh', width: 'auto'}} alt="Metal meme" className="rounded mt-12" />
        </div>
        <div className="mt-24 w-[50%] ml-24 flex-col flex gap-8">
          <h3 className="text-5xl font-normal mb-4 font-['Titan_One']">Music Enthusiast</h3>
          <p className="text-xl font-['Roboto'] w-[50%]">I am undeniably passionate about music; you could say it is a big part of who I am. I dabble in singing and make time for guitar practice.</p>
        </div>
      </section>

      {/* Section 2: Metalhead & Rock 'N' Roller */}
      <section className="bg-dark text-white font-['Roboto'] text-l pl-6 pr-48 rounded-lg flex gap-4">
        <div className="flex-col mt-12 w-[50%] ml-24 flex gap-8"><h3 className="text-5xl font-bold font-['Titan_One'] mt-24 max-w-2xl">A metalhead & rock &lsquo;n&rsquo; roller who never wants to miss a gig</h3>
        <p className="text-xl font-['Roboto'] w-[50%]">
          My heart beats for heavy metal, classical & blues rock, and classical jazz. 
          Metallica, Black Sabbath, Rory Gallagher, Blue Öyster Cult, Led Zeppelin, Pink Floyd, and Queen are just a few of my favorites.
        </p></div>
        
        {/* You can add images below */}
        <div className="flex gap-4">
          <img src={Concerts} alt="Concert image" className="rounded h-[70vh]" />
        </div>
      </section>

      {/* Section 3: Jazz Lover */}
      <section className="bg-dark text-light p-6 rounded-lg my-8 flex gap-48">
                <div className="flex gap-4">
          <img src={JazzVisuals} style={{ height: '80vh', width: 'auto' }} alt="Jazz image" className="rounded ml-24" />
        </div>
        
        <div className="flex-col mt-12 w-[50%] ml-24 flex gap-8">
          <h3 className="text-5xl font-bold font-['Titan_One'] mt-48 max-w-2xl">Jazz nerd</h3>
          <p className="text-xl text-white font-['Roboto'] w-[50%]">
            I groove to classical jazz, particularly bebop, and take joy in getting out that energy through the moves of Lindy hop and Charleston.
          </p>
        </div>
      </section>

      {/* Section 4: Personal life */}
      <section className="bg-dark text-white font-['Roboto'] text-l pl-6 pr-48 rounded-lg flex gap-4">
        <div className="flex-col mt-12 w-[50%] ml-24 flex gap-4"><h3 className="text-5xl font-bold font-['Titan_One'] mt-4 max-w-2xl">Social creature, party lover, gamer, roller-skater and a friend of animals</h3>
        <p className="text-xl font-['Roboto'] w-[50%]">
        <br/><br/>
        Apart from music and dance, I find joy in gaming, going to concerts, hanging out with friends, watching movies, hosting small events and making connections with new people. 
        <br/><br/>
        Roller-skating is one of my favorite free-time activities, and I hope to get to the level where I can roll to and from work! 
        <br/><br/>
        Animals hold a special place in my heart, and I try to dedicate part of my life to animal welfare. 
        </p></div>
        
        {/* You can add images below */}
        <div className="flex gap-4">
          <img src={personalLife} alt="Concert image" className="rounded h-[90vh] w-[auto]" />
        </div>
      </section>

            {/* Section 5: Photography */}
            <section className="bg-dark text-light p-6 rounded-lg my-8 flex-col flex gap-8 items-center mb-48">
                <div className="flex-col mt-12 w-[50%] ml-24 flex gap-8">
                  <h3 className="text-5xl font-bold font-['Titan_One'] mt-24 max-w-2xl">Has a thing for photographing the beauty and the weirdness 
                  that unfolds in the vast expanse of time and space.
                  </h3>
                </div>
        
                <div className="flex gap-4">
                  <img src={nurPhotography} style={{ height: '80vh', width: 'auto' }} alt="Jazz image" className="rounded ml-24" />
                </div>
            </section>
    </div>  
  );
};

export default AboutPage;
