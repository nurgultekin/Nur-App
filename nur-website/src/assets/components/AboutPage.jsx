import NurImage from "../media/images/nurPortre.jpg";
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

      <section className="bg-gradient-to-b from-[#d3e75b] via-[#d3e75b] to-[#b894d0] rounded mt-24 relative">
        <div className="pt-24 pb-24 px-6 lg:px-12 justify-center items-center gap-12 lg:gap-24 flex flex-col lg:flex-row">
          <img 
            src={NurImage} 
            className="max-h-[70vh] w-auto" 
            alt="About Image" 
          />
          <div className="flex flex-col items-center text-center lg:text-left gap-6 lg:max-w-prose">
            <h1 className="text-black text-4xl lg:text-6xl font-normal font-['Titan_One'] leading-tight">About</h1>
            <p className="text-black text-lg lg:text-xl font-normal font-['Roboto'] leading-relaxed">
              I am a Stockholm-based front-end software developer and UX/UI designer originally from Istanbul.
              <br/><br/>
              Before transitioning to the tech sector, I worked as a project manager at a media outlet in Istanbul, a research assistant at BI Norwegian Business School, and a business analyst at a logistics company in Istanbul.
              <br/><br/>
              Since September 2023, I&rsquo;ve been attending the vocational education program for UX design and front-end development at Chas Academy.
              <br/><br/>
              Currently, I&rsquo;m a Web Developer intern at Furhat Robotics in Stockholm where I have designed and crafted a new website for the world&rsquo;s coolest conversational robots!
            </p>
          </div>
        </div>
      </section>

      <section className="Chas-pics hidden lg:flex justify-center mt-12 lg:mt-48 gap-4">
        <img src={chasHalloween} className="rounded max-h-[80vh] w-auto" alt="Halloween Image" />
        <div className="flex flex-col gap-4">
          <img src={chasHalloween2} className="rounded max-h-[45vh] w-auto" alt="Chas Halloween Fest 2" />
          <img src={chasElevator} className="rounded max-h-[45vh] w-auto" alt="Chas Academy Elevator" />
        </div>
        <img src={diceEvent} className="rounded max-h-[70vh] w-auto" alt="Dice Event" />
      </section>

      { /* Other sections */ }
      <section className="bg-dark text-white p-6 rounded-lg flex flex-col justify-center lg:flex-row gap-24 lg:gap-48 mt-12">
        <div className="flex gap-4 justify-center lg:justify-start">
          <img src={metalMusicMeme} className="rounded max-h-[45vh] w-auto" alt="Metal meme" />
          <img src={metalMusicGif} className="rounded max-h-[45vh] w-auto mt-4 lg:mt-12" alt="Metal GIF" />
        </div>
        <div className="flex flex-col mt-6 lg:mt-24 lg:ml-12 text-left lg:text-left gap-8">
          <h3 className="text-3xl lg:text-5xl font-normal font-['Titan_One']">Music Enthusiast</h3>
          <p className="text-lg lg:text-xl font-['Roboto'] max-w-[50%]">I am undeniably passionate about music; you could say it is a big part of who I am. I dabble in singing and make time for guitar practice.</p>
        </div>
      </section>

      <section className="bg-dark text-white p-6 rounded-lg flex flex-col lg:flex-row gap-6 lg:gap-12 mt-12">
        <div className="flex flex-col lg:w-1/2 gap-6 text-center lg:text-left">
          <h3 className="text-3xl lg:text-5xl font-bold font-['Titan_One']">A metalhead & rock &qrsqo;n&qrsqo; roller who never wants to miss a gig</h3>
          <p className="text-lg lg:text-xl font-['Roboto']">My heart beats for heavy metal, classical & blues rock, and classical jazz. Metallica, Black Sabbath, Rory Gallagher, Blue Öyster Cult, Led Zeppelin, Pink Floyd, and Queen are just a few of my favorites.</p>
        </div>
        <img src={Concerts} className="rounded max-h-[70vh] w-auto" alt="Concerts" />
      </section>

      { /* Additional sections for Jazz Lover, Personal Life, and Photography */ }
      <section className="bg-dark text-light p-6 rounded-lg flex flex-col lg:flex-row gap-6 lg:gap-12 mt-12">
        <img src={JazzVisuals} className="rounded max-h-[70vh] w-auto ml-0 lg:ml-12" alt="Jazz Visuals" />
        <div className="flex flex-col mt-6 lg:mt-24 lg:ml-12 text-center lg:text-left">
          <h3 className="text-3xl lg:text-5xl font-bold font-['Titan_One']">Jazz Nerd</h3>
          <p className="text-lg lg:text-xl font-['Roboto']">I groove to classical jazz, particularly bebop, and take joy in getting out that energy through the moves of Lindy hop and Charleston.</p>
        </div>
      </section>

      <section className="bg-dark text-white p-6 rounded-lg flex flex-col lg:flex-row gap-6 lg:gap-12 mt-12">
        <div className="flex flex-col lg:w-1/2 text-center lg:text-left">
          <h3 className="text-3xl lg:text-5xl font-bold font-['Titan_One']">Social creature, party lover, gamer, roller-skater and a friend of animals</h3>
          <p className="text-lg lg:text-xl font-['Roboto']">
            Apart from music and dance, I find joy in gaming, going to concerts, hanging out with friends, watching movies, hosting events, and making new connections. Roller-skating is one of my favorite activities, and I hope to reach the level where I can roll to and from work!
            <br/><br/>
            Animals hold a special place in my heart, and I try to dedicate part of my life to animal welfare.
          </p>
        </div>
        <img src={personalLife} className="rounded max-h-[70vh] w-auto" alt="Personal Life" />
      </section>

      <section className="bg-dark text-light p-6 rounded-lg flex flex-col gap-6 items-center mt-12 mb-48">
        <h3 className="text-3xl lg:text-5xl font-bold font-['Titan_One'] text-center">Photography Lover</h3>
        <p className="text-lg lg:text-xl font-
        ['Roboto'] text-center">Capturing the beauty and quirks of life is my way of exploring the world.</p>
        <img src={nurPhotography} className="rounded max-h-[70vh] w-auto" alt="Photography" />
      </section>
    </div>  
  );
};

export default AboutPage;
