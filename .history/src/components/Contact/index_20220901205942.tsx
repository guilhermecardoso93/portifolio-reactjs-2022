import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImgContact from "../../assets/contact.svg";

import "./style.css";

export function Contact() {
  const formInitialDetails = {
    firstName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  function onFormUpdate(category: string, value: string) {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(formDetails);
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col className=" flex-1 ">
            <h3 className="contacth2">Entre Contato Comigo!</h3>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={12} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Nome"
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
                <Col size={12} className="px-1">
                  <textarea
                    rows={6}
                    cols={30}
                    value={formDetails.message}
                    placeholder="Mensagem"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit" className="buttonContact">
                    <span>Enviar</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col md={6} className="contactImg">
            <img src={ImgContact} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
