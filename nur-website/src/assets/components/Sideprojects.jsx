import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import "tailwindcss/tailwind.css";
import pipelineImage from '../media/images/pipeline.jpg';
import masterWorkflowImage from '../media/images/masterWorkflow.png';
import redditImage from '../media/images/reddit.jpg';


const projectData = [
  {
    image: pipelineImage,
    title: 'Sentiment Analysis and Topic Modelling on Twitter Activity of Elon Musk',
    date: 'May 2022',
    tags: ['Python', 'NLTK', 'Topic modelling', 'API calls', 'Data analysis', 'Orange'],
    link: "https://www.academia.edu/104149506/Sentiment_Analysis_and_Topic_Modelling_on_Twitter_Activity_of_Elon_Musk",
  },
  {
    image: masterWorkflowImage,
    title: 'Bridging the Digital Disparities in Sweden: A Discursive Analysis of Swedish Policy Reports on Digital Inclusion',
    date: 'Masters Thesis | Published: August 2023',
    tags: ['Qualitative research', 'Discourse analysis', 'Thematic Analysis(Python)', 'Quantitative research', 'Academic writing', 'Text vectorization'],
    link: "https://lnu.diva-portal.org/smash/record.jsf?aq2=%5B%5B%5D%5D&c=6&af=%5B%5D&searchType=LIST_LATEST&sortOrder2=title_sort_asc&query=&language=sv&pid=diva2%3A1801426&aq=%5B%5B%5D%5D&sf=all&aqe=%5B%5D&sortOrder=author_sort_asc&onlyFullText=false&noOfRows=50&dswid=-2182",
  },
  {
    image: redditImage,
    title: 'Data-analysis on Reddit discussion patterns around the Russo-Ukrainian War',
    date: 'November 2022',
    tags: ['Python', 'API calls', 'Data mining', 'Quantitative research', 'Social network analysis', 'Data modelling'],
    link: "https://www.academia.edu/84093473/Smart_Museum_App_Prototype",
  },
];

const SideProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="bg-bgLight mt-16 pb-12 flex flex-col justify-center max-h-full">
      <h2 className="text-black text-2xl md:text-3xl max-w-[80%] text-center mx-auto pt-14 mb-8">Featured projects outside of work</h2>
      <Slider {...settings} className="relative">
        {projectData.map((project, index) => (
          <div key={index} className="flex ">
            <div className="flex flex-col justify-center items-center bg-transparent hover:shadow-2xl hover:shadow-accentPrimary rounded-lg shadow-lg p-5 w-full">
              <div className="flex flex-1 justify-center items-center mr-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[50dvh] lg:h-[70dvh] object-cover rounded-lg max-w-[100%]"
                />
              </div>
              <div className="flex flex-2 flex-col justify-center px-24 py-8 max-w-3/4 ">
                <h4 className="text-lg font-bold mb-2 text-black">{project.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{project.date}</p>
                <div className="flex flex-wrap mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-sm text-gray-800 rounded-md px-2 py-1 mr-2 mb-2"
                    >
                      {tag}
                     </span>
                  ))}
                </div>
                <div className="flex justify-center items-center ">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="secondary-button whitespace-nowrap">
                    <span className="flex items-center gap-2 text-black">
                    View Project
                
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1.5rem" height="1.5rem" viewBox="0 0 100 100">
                      <path d="M 89.023438 9.4023438 A 2.0002 2.0002 0 0 0 88.580078 9.46875 L 66.96875 15.263672 A 2.0002 2.0002 0 0 0 66.730469 19.046875 L 72.119141 21.248047 C 71.753189 21.6113 71.432966 21.915616 71.074219 22.269531 A 2.0009326 2.0009326 0 0 0 70.328125 22.169922 C 55.461774 22.970252 41.811398 20.182985 26.919922 20.173828 A 2.0002 2.0002 0 0 0 26.894531 20.173828 C 24.727084 20.199028 22.656572 21.09238 21.150391 22.654297 C 19.645239 24.214465 18.825833 26.314392 18.878906 28.482422 C 19.0709 43.733161 17.414295 59.507614 18.220703 74.638672 A 2.0002 2.0002 0 0 0 18.222656 74.667969 C 18.520957 79.059831 22.073769 82.569802 26.46875 82.816406 C 43.196204 83.748552 58.886312 83.91317 73.089844 82.970703 A 2.0002 2.0002 0 0 0 73.105469 82.96875 C 77.664901 82.632613 81.133525 78.628813 80.816406 74.068359 L 80.816406 74.064453 C 79.537962 55.050384 80.376676 74.976145 79.769531 32.128906 A 2.0002005 2.0002005 0 0 0 79.765625 32.072266 C 80.609015 30.944373 81.437492 29.849761 82.316406 28.646484 L 85.65625 32.894531 A 2.0002 2.0002 0 0 0 89.21875 31.841797 L 91.089844 11.583984 A 2.0002 2.0002 0 0 0 89.023438 9.4023438 z M 86.84375 14.076172 L 85.697266 26.474609 L 83.851562 24.126953 A 2.0002 2.0002 0 0 0 80.65625 24.195312 C 70.207521 38.706916 62.521855 47.415631 56.236328 53.267578 C 55.854054 51.034647 54.991613 49.168491 53.492188 47.878906 C 52.50119 47.026597 51.319975 46.504305 50.050781 46.138672 C 56.30784 41.725808 64.691643 34.459041 77.121094 21.962891 A 2.0002 2.0002 0 0 0 76.458984 18.701172 L 73.738281 17.589844 L 86.84375 14.076172 z M 26.9375 24.173828 C 40.19241 24.184571 52.921505 26.5715 66.958984 26.291016 C 55.441675 37.358853 48.054925 43.091479 43.039062 45.912109 A 2.0002 2.0002 0 0 0 44.191406 49.648438 C 47.451447 49.36622 49.682358 49.876023 50.884766 50.910156 C 52.087173 51.94429 52.812404 53.764547 52.404297 57.464844 A 2.0002 2.0002 0 0 0 55.681641 59.212891 C 61.142078 54.611907 67.621312 47.768646 75.833984 37.230469 C 76.290507 72.61 75.611817 56.274728 76.826172 74.337891 A 2.0002 2.0002 0 0 0 76.826172 74.34375 C 76.89986 75.392531 76.589577 76.359473 76.035156 77.146484 L 74.685547 74.695312 A 1.0001 1.0001 0 0 0 73.785156 74.164062 A 1.0001 1.0001 0 0 0 72.933594 75.660156 L 74.5 78.505859 C 73.993221 78.766248 73.425828 78.932723 72.816406 78.978516 C 72.538316 78.996958 72.250026 79.007805 71.970703 79.025391 L 69.681641 75.097656 A 1.0001 1.0001 0 0 0 68.767578 74.589844 A 1.0001 1.0001 0 0 0 67.953125 76.105469 L 69.728516 79.150391 C 61.457246 79.59944 52.675203 79.694981 43.464844 79.486328 L 44.113281 78.841797 A 1.0001 1.0001 0 0 0 43.392578 77.123047 A 1.0001 1.0001 0 0 0 42.705078 77.423828 L 40.701172 79.414062 C 39.399527 79.37663 38.089012 79.331896 36.771484 79.283203 L 38.361328 77.703125 A 1.0001 1.0001 0 0 0 37.640625 75.984375 A 1.0001 1.0001 0 0 0 36.953125 76.285156 L 34.041016 79.177734 C 32.840144 79.126872 31.629159 79.069373 30.416016 79.009766 L 32.705078 77.177734 A 1.0001 1.0001 0 0 0 32.072266 75.386719 A 1.0001 1.0001 0 0 0 31.457031 75.615234 L 27.402344 78.857422 C 27.164513 78.844462 26.931633 78.835543 26.693359 78.822266 L 26.691406 78.822266 C 25.412868 78.750015 24.287316 78.179453 23.478516 77.308594 L 27.261719 75.603516 A 1.0001 1.0001 0 0 0 26.796875 73.6875 A 1.0001 1.0001 0 0 0 26.441406 73.779297 L 22.460938 75.572266 C 22.338195 75.199428 22.243195 74.813855 22.214844 74.404297 C 22.156396 73.304275 22.115114 72.197194 22.082031 71.085938 L 27.046875 70.101562 A 1.0001 1.0001 0 0 0 26.826172 68.117188 A 1.0001 1.0001 0 0 0 26.65625 68.138672 L 22.033203 69.058594 C 22.012882 67.890232 22.020454 66.708123 22.021484 65.529297 L 26.132812 64.837891 A 1.0001 1.0001 0 0 0 25.970703 62.847656 A 1.0001 1.0001 0 0 0 25.800781 62.865234 L 22.017578 63.501953 C 22.027988 62.42429 22.055211 61.336807 22.078125 60.251953 L 24.166016 60.132812 A 1.0002522 1.0002522 0 0 0 24.121094 58.132812 A 1.0001 1.0001 0 0 0 24.050781 58.134766 L 22.117188 58.246094 C 22.141839 57.323326 22.170947 56.395712 22.201172 55.46875 L 24.001953 55.367188 A 1.0002522 1.0002522 0 0 0 23.957031 53.367188 A 1.0001 1.0001 0 0 0 23.886719 53.369141 L 22.269531 53.462891 C 22.563983 45.187294 22.983332 36.776347 22.876953 28.408203 A 2.0002 2.0002 0 0 0 22.876953 28.384766 C 22.850043 27.285354 23.265191 26.223349 24.029297 25.431641 A 2.0002 2.0002 0 0 0 24.029297 25.429688 C 24.792213 24.63854 25.838373 24.187645 26.9375 24.173828 z M 26.601562 30.177734 A 1 1 0 0 0 26.601562 32.177734 A 1 1 0 0 0 26.601562 30.177734 z M 34.792969 30.177734 A 1 1 0 0 0 34.792969 32.177734 A 1 1 0 0 0 34.792969 30.177734 z M 31.601562 34.580078 A 1 1 0 0 0 31.601562 36.580078 A 1 1 0 0 0 31.601562 34.580078 z"></path>
                      </svg>
                  </span>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer bg-purple-300 bg-gray-300 rounded-full p-2 z-10"
      onClick={onClick}
    >
      &#10094;
    </div>
  );
};

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer bg-purple-300 rounded-full p-2 z-10"
      onClick={onClick}
    >
      &#10095;
    </div>
  );
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SideProjects;
