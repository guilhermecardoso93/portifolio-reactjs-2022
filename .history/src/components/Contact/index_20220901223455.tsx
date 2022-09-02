import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import ImgContact from "../../assets/contact.svg";
import emailjs from '@emailjs/browser';

import "./style.css";

export function Contact() {
  const formInitialDetails = {
    firstName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  function onFormUpdate(category: string, value: string) {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  }

  const form:any = useRef();

   const sendEmail = async (e: any) => {
    
    e.preventDefault();

    emailjs.sendForm('service_k101ils', 'template_7xv6tru', form.current, 'RSSU760IHaANuHBew')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.value.reset()
      //setFormDetails.target.reset()
    
  };


  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col className=" flex-1 ">
            <h3 className="contacth2">Entre Contato Comigo!</h3>
            <form ref={form} onSubmit={sendEmail}>
              <Toaster position="top-center" />
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


/*

 if (
      !formDetails.firstName ||
      !formDetails.email ||
      !formDetails.phone ||
      !formDetails.message
    ) {
      toast("Por favor, preencher todos os campos!");
      return;
    } else {
      /*emailjs.sendForm('service_k101ils', 'template_7xv6tru', form.current, 'RSSU760IHaANuHBew')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });*/
    //  toast("Muito Obrigado!");
    //  return;
  //
  
  //    */