import PropTypes from "prop-types";

const Section = ({ title, paragraph, content, isList, leftImage, rightImage, leftVideo, rightVideo }) => {
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <div className="text-[1.875rem] md:text-[2.25rem] lg:text-5xl font-titan text-whitesmoke mb-12 mt-5 p-8 border-b border-lime-300 max-w-[70%] md:max-w-auto leading-[130%]">
        {title}
      </div>
      
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-[90%] lg:max-w-[70%] px-12 gap-8">
        {/* Render media on the left */}
        {(leftImage || leftVideo) && (
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {leftImage && <img src={leftImage} alt={`${title} Left`} className="w-full h-auto object-cover rounded" />}
            {leftVideo && (
              <video controls className="w-full h-auto rounded">
                <source src={leftVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}

        {/* Render text content */}
        <div className={`text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] font-roboto text-whitesmoke ${leftImage || leftVideo || rightImage || rightVideo ? 'lg:w-1/2' : 'w-full'} text-left`}>
          {paragraph && <p className="mb-4">{paragraph}</p>}
          {isList ? (
            <ul className="flex flex-col gap-8">
              {content.map((item, index) => (
                <li key={index} className="list-disc marker:text-lime-300">
                  <span className="text-lime-300">{item.title}: </span>
                  {item.description}
                </li>
              ))}
            </ul>
          ) : content && content.length > 0 ? (
            content.map((item, index) => (
              <p key={index} className="text-white">{item.text}</p>
            ))
          ) : content && content.length === 0 && !isList ? (
            <p className="text-whitesmoke mt-4">No content available</p>
          ) : null}
        </div>

        {/* Render media on the right */}
        {(rightImage || rightVideo) && (
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {rightImage && <img src={rightImage} alt={`${title} Right`} className="w-full h-auto object-cover rounded" />}
            {rightVideo && (
              <video controls className="w-full h-auto rounded">
                <source src={rightVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  content: PropTypes.array.isRequired,
  isList: PropTypes.bool.isRequired,
  leftImage: PropTypes.string,
  rightImage: PropTypes.string,
  leftVideo: PropTypes.string,
  rightVideo: PropTypes.string,
};

export default Section;
