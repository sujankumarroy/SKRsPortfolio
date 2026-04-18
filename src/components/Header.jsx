import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header id="home" className="fade-in">
      <img src="https://github.com/sujankumarroy.png" alt="Sujan Kumar Roy" loading="lazy" />
      <h1><span id="typing-text"></span></h1>
      <p>Data Enthusiast • Tech Explorer • BCA Student</p>
      <a href="#projects" className="btn">View Projects</a>
      <a href="#contact" className="btn">Contact Me</a>
    </header>
  );
}

export default Header;