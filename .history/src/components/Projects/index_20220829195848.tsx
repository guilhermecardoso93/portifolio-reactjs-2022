import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "../ProjectCard";
import { projects } from "./projects";
import TrackVisibility from "react-on-screen";
//import 'animate.css';

import "./style.css";

export function Projects() {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>

                  <Row
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...projects}
                          repo={project.repo}
                          img={project.img}
                          title={project.img}
                          url={project.url}
                        />
                      );
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
