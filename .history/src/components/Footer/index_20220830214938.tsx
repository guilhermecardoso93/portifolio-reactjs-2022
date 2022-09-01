import { Container, Row, Col } from "react-bootstrap";
/*import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";*/

import Logo from "../../assets/logo2.png";
import "./style.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" size={12} sm={6}>
          <p>Guilherme Cardoso - Desenvolvedor Front-End</p>
        </Row>
      </Container>
    </footer>
  )
}