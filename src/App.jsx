import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/Section.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </>
  );
};

export default App;
