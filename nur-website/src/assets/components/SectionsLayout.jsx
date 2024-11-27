import PropTypes from "prop-types";

const Section = ({ title, paragraph, content, isList }) => {
  return (
    <div className="text-white flex flex-col items-center justify-center mx-auto mt-24">
      <div className="text-[30px] md:text-[36px] lg:text-5xl font-titan text-whitesmoke mb-12 mt-5 p-8 border-b border-lime-300">
        {title}
      </div>
      {/* Render the paragraph if available */}
      {paragraph && (
        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-roboto text-whitesmoke leading-[30px] text-left max-w-[80%] lg:max-w-[40%] px-12">
          <p>{paragraph}</p>
        </div>
      )}
      {/* Render list content if isList is true, otherwise just display paragraph text */}
      <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] justify-center lg:justify-end mb-12 mx-auto max-w-[80%] lg:max-w-[40%] px-12">
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
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  content: PropTypes.array.isRequired,
  isList: PropTypes.bool.isRequired,
};

export default Section;
