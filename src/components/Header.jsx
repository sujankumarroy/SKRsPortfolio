import { useEffect, useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const text = "Sujan Kumar Roy";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <header id="home" className="fade-in">
      <img
        src="https://github.com/sujankumarroy.png"
        alt="Sujan Kumar Roy"
        loading="lazy"
      />

      <h1>{typedText}</h1>

      <p>Data Enthusiast • Tech Explorer • BCA Student</p>

      <a href="#projects" className="btn">
        View Projects
      </a>

      <a href="#contact" className="btn">
        Contact Me
      </a>
    </header>
  );
};

export default Header;
