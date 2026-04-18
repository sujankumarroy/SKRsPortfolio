import "../styles/About.css";
import abctaLogo from "../assets/images/abcta-logo.jpg";
import gcuLogo from "../assets/images/gcu-logo.jpg";
import lpuLogo from "../assets/images/lpu-logo.jpg";
import masssLogo from "../assets/images/masss-logo.jpg";

function About() {
  return (
    <section id="about" className="section fade-in">
      <h2>About Me</h2>
      <p className="content-text">
        I’m Sujan Kumar Roy, a BCA student who builds practical web applications
        focused on solving real-world problems.
      </p>
      <p className="content-text">
        I’ve developed projects like Knowlet (an educational platform), Land
        Calculator (a high-precision land area tool), and Rongpur Daily Needs (a
        modern e-commerce interface). I work with JavaScript, SQL, and modern
        web technologies to build clean, efficient, and user-focused solutions.
      </p>

      <h3>Education</h3>
      <div className="timeline">
        <div className="timeline-item">
          <img
            src={lpuLogo}
            alt="LPU Logo"
            className="edu-logo"
            loading="lazy"
          />
          <div className="edu-text">
            <h3>Lovely Professional University</h3>
            <p>Bachelor of Computer Application (BCA)</p>
          </div>
        </div>
        <div className="timeline-item">
          <img
            src={gcuLogo}
            alt="Gurucharan University Logo"
            className="edu-logo"
            loading="lazy"
          />
          <div className="edu-text">
            <h3>Gurucharan University</h3>
            <p>B.Sc Mathematics</p>
          </div>
        </div>
        <div className="timeline-item">
          <img
            src={masssLogo}
            alt="M.A. Junior College Logo"
            className="edu-logo"
            loading="lazy"
          />
          <div className="edu-text">
            <h3>M.A. Senior Secondary School</h3>
            <p>Class XI–XII (PCM)</p>
          </div>
        </div>
        <div className="timeline-item">
          <img
            src={abctaLogo}
            alt="A.B.C Talent Academy Logo"
            className="edu-logo"
            loading="lazy"
          />
          <div className="edu-text">
            <h3>A.B.C Talent Academy</h3>
            <p>Class II–X</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
