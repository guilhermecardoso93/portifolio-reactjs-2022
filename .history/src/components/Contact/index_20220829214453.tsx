import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImgContact from "../../assets/contact.svg";

export function Contact() {
  const formInicialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInicialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  function onFormUpdate(category: string, value: string) {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h2>Entre Contato Comigo!</h2>
            <form>
              <Row>
                <Col sm={6} className="px-1"></Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Primeiro Nome"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="E-mail"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Telefone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
              </Row>
            </form>
          </Col>
          <Col md={6}>
            <img src={ImgContact} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
