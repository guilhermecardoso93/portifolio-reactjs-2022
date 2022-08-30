import { Col, Container, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';

export function Projects() {
  return (
    <section className="projects" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, quo obcaecati fugiat blanditiis ratione, dolor esse
              sint eligendi, amet nesciunt vitae. Ea vero corrupti debitis nam
              placeat nostrum dolorum nisi.
            </span>
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" disabled>
                  Tab 3
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
