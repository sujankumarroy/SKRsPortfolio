import netlifyImg from "../assets/icons/netlify.png";
import renderImg from "../assets/icons/render.png";

import "devicon/devicon.min.css";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="section fade-in">
      <h2>Technical Skills</h2>

      {/* <!-- Languages --> */}
      <h3 className="skill-title">Languages</h3>
      <div className="skill-grid">
        <div className="skill-card">
          <i className="devicon-c-plain colored"></i>
          <span>C</span>
        </div>

        <div className="skill-card">
          <i className="devicon-cplusplus-plain colored"></i>
          <span>C++</span>
        </div>

        <div className="skill-card">
          <i className="devicon-typescript-plain colored"></i>
          <span>TypeScript</span>
        </div>

        <div className="skill-card">
          <i className="devicon-javascript-plain colored"></i>
          <span>JavaScript</span>
        </div>

        <div className="skill-card">
          <i className="devicon-html5-plain colored"></i>
          <span>HTML</span>
        </div>

        <div className="skill-card">
          <i className="devicon-css3-plain colored"></i>
          <span>CSS</span>
        </div>

        <div className="skill-card">
          <i className="devicon-mysql-plain colored"></i>
          <span>SQL</span>
        </div>
      </div>

      {/* <!-- Tools & Platforms --> */}
      <h3 className="skill-title">Tools & Platforms</h3>
      <div className="skill-grid">
        <div className="skill-card">
          <i className="devicon-firebase-plain colored"></i>
          <span>Firebase</span>
        </div>

        <div className="skill-card">
          <i className="devicon-supabase-plain colored"></i>
          <span>Supabase</span>
        </div>

        <div className="skill-card">
          <i className="devicon-git-plain colored"></i>
          <span>Git</span>
        </div>

        <div className="skill-card">
          <i className="devicon-github-original colored"></i>
          <span>GitHub</span>
        </div>

        {/* <!-- Fallback (no devicon available) --> */}
        <div className="skill-card">
          <img src={netlifyImg} alt="Netlify" />
          <span>Netlify</span>
        </div>

        <div className="skill-card">
          <img src={renderImg} alt="Render" />
          <span>Render</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
