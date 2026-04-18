import { useEffect } from "react";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/Section.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
