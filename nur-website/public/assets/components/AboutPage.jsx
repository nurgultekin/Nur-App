import NurImage from "../media/about-me/3.png";
import 'tailwindcss/tailwind.css';
import AnimationDark from "./AnimationDark";
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
    <div className="min-h-full">
      <AnimationDark />

      <section className="bg-gradient-to-b from-[#d3e75b] via-[#d3e75b] to-[#b894d0] flex flex-col justify-center lg:flex-row lg:justify-center items-center gap-12 lg:gap-24 rounded mt-24 relative h-full pb-8 pt-8 ">
        <div className="w-96 min-h-fit">
          <img 
            src={NurImage} 
            className="object-cover" 
            alt="About Image" 

          />
        </div>
          
          <div className="flex flex-col items-center justify-center text-center lg:text-left gap-6 lg:max-w-prose h-auto pb-24 pt-24 px-8">
            <h1 className="text-black text-4xl lg:text-6xl font-normal font-['Titan_One'] leading-tight text-center">About</h1>
            <p className="text-black text-lg lg:text-xl font-normal font-['Roboto'] leading-loose text-left">
              I am a Stockholm-based front-end software developer and UX/UI designer originally from Istanbul.
              <br/><br/>
              Some of my previous work experiences include accessibility analysis at Linnaeus University & Kalmar City Library, project managmenent at a media outlet in Istanbul, research at BI Norwegian Business School, and a business analysis at a logistics company in Istanbul.
              <br/><br/>
              {/* Since September 2023, I&rsquo;ve been enrolled in the vocational education program for front-end development and UX design at Chas Academy, and I am now approaching the end of this phase.  */}
              <br/><br/>
              Currently, I&rsquo;m a Front-end Developer at Furhat Robotics in Stockholm where I have designed and built a new website for the world&rsquo;s coolest conversational robots! Oh, and I&rsquo;ve been adding skills to Furhat robots every now and then just for fun. 
              <span role="img" aria-label="smiley" className="text-2xl lg:text-[2rem]">😊</span>
            </p>
          </div>

      </section>

      <section className="Chas-pics hidden justify-center mt-12 lg:mt-48 gap-4">
        <img src={chasHalloween} className="rounded max-h-[80vh] w-auto" alt="Halloween Image" loading="lazy"/>
        <div className="flex flex-col gap-4">
          <img src={chasHalloween2} className="rounded max-h-[45vh] w-auto" alt="Chas Halloween Fest 2" loading="lazy" />
          <img src={chasElevator} className="rounded max-h-[45vh] w-auto" alt="Chas Academy Elevator" loading="lazy" />
        </div>
        <img src={diceEvent} className="rounded max-h-[70vh] w-auto" alt="Dice Event" loading="lazy" />
      </section>

      { /* ABOUT MUSIC INTEREST */ }
      <section className=" text-white pt-24 pb-24 px-8 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24 mt-48 ">
        <div className="flex gap-4 justify-center lg:ml-48">
          <img src={metalMusicMeme} className="rounded h-auto w-96" alt="Metal meme" loading="lazy" />
          <img src={metalMusicGif} className="rounded h-auto w-96 mt-4 lg:mt-12" alt="Metal GIF" loading="lazy" />
        </div>
        <div className="flex flex-col justify-between items-left mt-6 lg:mt-24 lg:mr-48 text-left gap-8">
          <h3 className="text-3xl lg:text-5xl font-normal font-['Titan_One']">Music Enthusiast</h3>
          <p className="text-lg lg:text-xl font-['Roboto'] max-w-sm">I am undeniably passionate about music; you could say it is a big part of who I am. I dabble in singing and make time for guitar practice.</p>
        </div>
      </section>

      <section className="bg-dark text-white px-8 rounded-lg flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-12 mt-48">
        <div className="flex flex-col justify-center items-left lg:w-1/2 gap-6 lg:text-left mx:auto lg:ml-48">
          <h3 className="text-3xl lg:text-5xl font-bold font-['Titan_One'] lg:max-w-lg text-left max-w-md">A metalhead & rock&rsquo;n&rsquo; roller who never wants to miss a gig</h3>
          <p className="text-lg lg:text-xl text-left font-['Roboto'] max-w-md">My heart beats for heavy metal, classical & blues rock, and classical jazz. Metallica, Black Sabbath, Rory Gallagher, Blue Öyster Cult, Led Zeppelin, Pink Floyd, and Queen are just a few of my favorites.</p>
        </div>
        <img src={Concerts} className="rounded max-h-[70vh] w-auto lg:mr-48" alt="Concerts" loading="lazy"/>
      </section>

      { /* Additional sections for Jazz Lover, Personal Life, and Photography */ }
      <section className="text-white pt-24 pb-24 px-8 lg:px-12 flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-12 lg:gap-24 mt-48">
        <img src={JazzVisuals} className="rounded max-h-[70vh] w-auto ml-0 lg:ml-48" alt="Jazz Visuals" loading="lazy" />
        <div className="flex flex-col justify-center items-left lg:max-w-md gap-6 lg:text-left mx:auto lg:mr-48">
          <h3 className="text-3xl lg:text-5xl font-bold font-['Titan_One']">Jazz Nerd</h3>
          <p className="text-lg lg:text-xl font-['Roboto']">I groove to classical jazz, particularly bebop, and take joy in getting out that energy through the moves of Lindy hop and Charleston.</p>
        </div>
      </section>

      <section className="bg-dark text-white p-8 rounded-lg flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-6 lg:gap-12 mt-48">
        <div className="flex flex-col justify-center items-left lg:w-1/2 gap-12 lg:text-left mx:auto lg:ml-48">
          <h3 className="text-3xl lg:text-5xl max-w-lg font-bold font-['Titan_One']">Social creature, party lover, gamer, roller-skater and a friend of animals</h3>
          <p className="text-lg lg:text-xl font-['Roboto'] max-w-md">
            Apart from music and dance, I find joy in gaming, going to concerts, hanging out with friends, watching movies, hosting events, and making new connections. Roller-skating is one of my favorite activities, and I hope to reach the level where I can roll to and from work!
            <br/><br/>
            Animals hold a special place in my heart, and I try to dedicate part of my life to animal welfare.
          </p>
        </div>
        <img src={personalLife} className="rounded max-h-[70vh] w-auto" alt="Personal Life" loading="lazy"/>
      </section>

      <section className="bg-dark text-light p-6 rounded-lg flex flex-col gap-6 items-center mt-48 mb-48">
        <div className="flex flex-col justify-left gap-12" >

        <h3 className="text-3xl lg:text-5xl font-bold font-['Titan_One'] text-left">Photography Lover</h3>
        <p className=" text-white text-lg lg:text-xl font-['Roboto'] max-w-md ">Capturing the beauty and quirks of life is my way of exploring the world.</p>

        </div>
        
        <img src={nurPhotography} className="rounded max-h-[70vh] w-auto" alt="Photography" loading="lazy" />
      </section>
    </div>  
  );
};

export default AboutPage;
