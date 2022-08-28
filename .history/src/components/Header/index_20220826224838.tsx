import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  InstagramLogo,
  Envelope,
  WhatsappLogo,
  LinkedinLogo,
} from "phosphor-react";

export function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Guilherme Cardoso</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
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
                <WhatsappLogo size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/guilherme-cardoso-35710b103/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo size={32} />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
