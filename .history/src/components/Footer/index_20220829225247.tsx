import { Col, Container, Row } from "react-bootstrap";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon footer-icon">
              <ul>
                <li className="faInst">
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}
