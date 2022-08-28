import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import '../../App.css';


export function Banner() {
  const [ loopNum, setLoopNum ] = useState(0)
  const [ isDeleting, setDeleting] = useState(false)
  const toRotate =  [ 'Desenvolvedor Front-End', 'Guilherme', 'Web'];
  const [ text, setText] = useState('');
  const [ delta, setDelta] = useState( 300 - Math.random() * 100)
  const period = 2000;

useEffect(() => {
  const ticker = setInterval( () => {
    tick();
  }, delta )

  return () => { clearInterval(ticker)}
}, [text])

const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i]
  let updatedText = isDeleting ? fullText.substring(0, text.length -1 ) ? fullText.substring(0, text.length + 1);

  setText(updatedText)

  if(isDeleting){
    setDelta(prevDelta => prevDelta /2)
  }

  if (!isDeleting && updatedText === fullText){ 
    isDeleting(true)
    setDelta(period)
  } else if ( isDeleting && updatedText === ''){
    isDeleting(false)
    setLoopNum(loopNum + 1)
    setDelta(500)
  }
}


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

