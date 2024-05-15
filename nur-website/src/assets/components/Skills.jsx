import React, { useEffect, useRef } from 'react';
import '../styling/home.css';
import 'tailwindcss/tailwind.css';
import '../../App.css';

const SkillsCredentials = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target;
            progressBar.classList.remove('animate-progress');
            void progressBar.offsetWidth; // Trigger a reflow to restart the animation
            progressBar.classList.add('animate-progress');
          } else {
            entry.target.classList.remove('animate-progress');
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value based on when you want to trigger the animation
      }
    );

    const { current } = skillsRef;
    if (current) {
      const progressBars = current.querySelectorAll('.progress');
      progressBars.forEach((progressBar) => observer.observe(progressBar));
    }

    return () => {
      if (current) {
        const progressBars = current.querySelectorAll('.progress');
        progressBars.forEach((progressBar) => observer.unobserve(progressBar));
      }
    };
  }, []);

  return (
    <section className="skills-credentials-container" id="custom-height" ref={skillsRef}>
      <div>
        <h2>Skills <span style={{ padding: '20px' }}>&</span> Credentials</h2>
      </div>
      <div className="skills-credentials">
        <div className="skills">
          <ul>
            <li>
              <span className="skill-name">Figma</span>
              <div className="progress-bar">
                <div className="progress" data-progress-width="92%"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">React</span>
              <div className="progress-bar">
                <div className="progress" data-progress-width="75%"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">JavaScript</span>
              <div className="progress-bar">
                <div className="progress" data-progress-width="70%"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Python</span>
              <div className="progress-bar">
                <div className="progress" data-progress-width="60%"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Google Analytics</span>
              <div className="progress-bar">
                <div className="progress" data-progress-width="70%"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Power BI</span>
              <div className="progress-bar">
                <div className="progress" data-progress-width="30%"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Tableau</span>
              <div className="progress-bar">
                <div className="progress" data-progress-width="35%"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Atomic Design</span>
              <div className="progress-bar">
                <div className="progress" data-progress-width="96%"></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Design Patterns</span>
              <div className="progress-bar">
                <div className="progress" data-progress-width="67%"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="credentials">
          <ul>
            <li>Technical Vocational education in UX/UI design and front-end web development (ongoing), <span> Chas Academy, Stockholm </span></li>
            <li>Master's degree in Digital Humanities, <span> Linnaeus University, Växjö </span></li>
            <li>Integrated bachelor's and master's degree in Philology and educational sciences in Turkish, <span> Yeditepe University, Istanbul </span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsCredentials;
