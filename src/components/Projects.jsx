import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="section fade-in projects-container">
      <h2>Web Projects</h2>
      <div className="project-grid">
        <div className="browser-window">
          <div className="browser-header">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="preview-viewport">
            <iframe src="https://knowlet.in/" tabIndex="-1"></iframe>
          </div>
          <div className="project-meta">
            <h3>Knowlet</h3>
            <p>Educational web app for students.</p>
            <a href="https://knowlet.in/" target="_blank" className="view-btn">
              Launch Site →
            </a>
          </div>
        </div>

        <div className="browser-window">
          <div className="browser-header">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="preview-viewport">
            <iframe
              src="https://landcalculatorlite.netlify.app/"
              tabIndex="-1"
            ></iframe>
          </div>
          <div className="project-meta">
            <h3>Land Calculator</h3>
            <p>High-precision land area calculation tool.</p>
            <a
              href="https://landcalculatorlite.netlify.app/"
              target="_blank"
              className="view-btn"
            >
              Launch Site →
            </a>
          </div>
        </div>

        <div className="browser-window">
          <div className="browser-header">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="preview-viewport">
            <iframe
              src="https://digitalrdn.netlify.app/"
              tabIndex="-1"
            ></iframe>
          </div>
          <div className="project-meta">
            <h3>DigitalRDN</h3>
            <p>Modern E-commerce interface project.</p>
            <a
              href="https://digitalrdn.netlify.app/"
              target="_blank"
              className="view-btn"
            >
              Launch Site →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
