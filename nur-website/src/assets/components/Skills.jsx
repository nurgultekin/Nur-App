import { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

const SkillsCredentials = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target;
            progressBar.classList.remove("animate-progress");
            void progressBar.offsetWidth; // Trigger a reflow to restart the animation
            progressBar.classList.add("animate-progress");
          } else {
            entry.target.classList.remove("animate-progress");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const { current } = skillsRef;
    if (current) {
      const progressBars = current.querySelectorAll(".progress");
      progressBars.forEach((progressBar) => observer.observe(progressBar));
    }

    return () => {
      if (current) {
        const progressBars = current.querySelectorAll(".progress");
        progressBars.forEach((progressBar) => observer.unobserve(progressBar));
      }
    };
  }, []);

  return (
    <section
      id="skills-credentials"
      ref={skillsRef}
      className="bg-purple-300 py-16 px-8 flex flex-col items-center"
    >
      <h2 className="text-black text-2xl font-bold mb-10">
        Skills <span className="px-2">&</span> Credentials
      </h2>

      <div className="flex flex-col lg:flex-row lg:gap-20 w-full max-w-5xl">
        {/* Skills Section */}
        <div className="skills flex-1">
          <ul className="space-y-4">
            {[
              { name: "Figma", width: "92%" },
              { name: "React", width: "75%" },
              { name: "JavaScript", width: "70%" },
              { name: "Python", width: "60%" },
              { name: "Google Analytics", width: "70%" },
              { name: "Power BI", width: "30%" },
              { name: "Tableau", width: "35%" },
              { name: "Atomic Design", width: "96%" },
              { name: "Design Patterns", width: "67%" },
            ].map((skill) => (
              <li key={skill.name} className="flex items-center">
                <span className="mr-4 font-medium text-lg w-36">{skill.name}</span>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: skill.width }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Credentials Section */}
        <div className="credentials flex-1 mt-10 lg:mt-0">
          <ul className="space-y-6">
            {[
              {
                text: "Technical Vocational education in UX/UI design and front-end web development (ongoing)",
                span: "Chas Academy, Stockholm",
              },
              {
                text: "Masters degree in Digital Humanities",
                span: "Linnaeus University, Växjö",
              },
              {
                text: "Integrated bachelors and masters degree in Philology and educational sciences in Turkish",
                span: "Yeditepe University, Istanbul",
              },
            ].map((credential, index) => (
              <li
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
              >
                <p className="text-black font-semibold">{credential.text}</p>
                <span className="text-gray-600 italic">{credential.span}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsCredentials;
