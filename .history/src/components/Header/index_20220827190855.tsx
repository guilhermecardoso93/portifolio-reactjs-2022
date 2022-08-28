import { useEffect, useState } from "react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../assets/logo2.png";

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onUpdateActiveLink(value: string) {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ color: "#fff" }}>
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link>
              <button
                className="buttonContact"
                onClick={() => console.log("Hello")}
              >
                <span>Contato</span>
              </button>
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/guicardoso93/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faInst"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:guilherme_cardosogui@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faEmail"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="fa" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5522999047309&text=Oi%20Esta%20falando%20com%20o%20Guilherme!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faWthat"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="fa" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/guilherme-cardoso-35710b103/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faLink"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="fa" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.github.com/guilhermecardoso93"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="faGit"
                  >
                    <FontAwesomeIcon icon={faGithub} className="fa" />
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
function onUpdateActiveLink(arg0: string): void {
  throw new Error("Function not implemented.");
}
