import { useEffect, useState } from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section, header");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        SKR
      </a>

      <ul>
        <li>
          <a href="#home" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" className={active === "about" ? "active" : ""}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" className={active === "skills" ? "active" : ""}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className={active === "projects" ? "active" : ""}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
