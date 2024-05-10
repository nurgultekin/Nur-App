import React from 'react';
import '../styling/home.css';

const SkillsCredentials = () => {
  return (
    <section className="skills-credentials-container" id="custom-height">
      <div>
        <h2>Skills <span style={{ padding: '20px' }}>&</span> Credentials</h2>
      </div>
      <div className="skills-credentials">
        <div className="skills">
          <ul>
            <li>
              <span className="skill-name">Figma</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">React</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '40%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">JavaScript</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '50%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Python</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Google Analytics</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Power BI</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '30%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Tableau</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '35%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Atomic Design</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '96%' }}></div>
              </div>
            </li>
            <li>
              <span className="skill-name">Design Patterns</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '67%' }}></div>
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
