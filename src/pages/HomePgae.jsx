import NavBar from "../components/NavBar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
// import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "../styles/Section.css";

const HomePgae = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default HomePgae;
