import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import '../../App.css';


export function Banner() {
  const [ loopNum, setLoopNum ] = useState(0)
  const [ isDeleting, setDeleting] = useState(false)
  const toRotate =  [ 'Desenvolvedor Front-End'];
  const [ text, setText] = useState('');
  const [ delta, setDelta] = useState( 300 - Math.random() * 100)
  const period = 2000;

useEffect(() => {
  const ticker = setInterval( () => {

  }, )
})




  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Olá! Bem vindo ao meu Portfólio</span>
            <h1>{`Oi estou codando`} <span className='wrap'>Desenvolvedor Front-End</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nostrum eum nihil atque ducimus voluptatem animi mollitia dicta alias reiciendis, voluptatibus repudiandae laudantium ullam aspernatur, dolore similique eius deserunt fugiat.</p>
            <button
                className="buttonContact"
                onClick={() => console.log("Hello")}
              >
                <span>Contato</span>
              </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src='' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}