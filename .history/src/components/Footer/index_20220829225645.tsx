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
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}
