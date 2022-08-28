import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  InstagramLogo,
  Envelope,
  WhatsappLogo,
  LinkedinLogo,
} from "phosphor-react";
import Logo from "../../assets/logo.png";

import "./style.css";

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
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} variant="light">
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
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.instagram.com/guicardoso93/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo size={32} />
              </a>
              <a
                href="mailto:guilherme_cardosogui@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Envelope size={32} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5522999047309&text=Oi%20Esta%20falando%20com%20o%20Guilherme!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogo size={32} color="#d3d3df"/>
              </a>
              <a
                href="https://www.linkedin.com/in/guilherme-cardoso-35710b103/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo size={32} />
              </a>
            </div>
            <button
              className="buttonContact"
              onClick={() => console.log("Hello")}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
function onUpdateActiveLink(arg0: string): void {
  throw new Error("Function not implemented.");
}
