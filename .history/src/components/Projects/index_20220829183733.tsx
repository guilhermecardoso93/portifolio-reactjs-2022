import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { projects } from "./projects";

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
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
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
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <p>{project.title}</p>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>Guilherme</Tab.Pane>
                <Tab.Pane eventKey='third'>Cardoso</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
