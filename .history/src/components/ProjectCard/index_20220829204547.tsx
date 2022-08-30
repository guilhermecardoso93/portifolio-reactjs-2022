import { Col, Nav } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCardInter {
  title: string;
  url: string;
  img: string;
  repo: string;
}

export function ProjectCard({ title, url, img, repo }: ProjectCardInter) {
  console.log(url);
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={img} />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <Nav.Link href={url} target="_blank">
            <p>
              Site do projeto
              <FontAwesomeIcon icon={faGithub} />
            </p>
          </Nav.Link>
          <Nav.Link href={repo} target="_blank">
            Site do repositório
          </Nav.Link>
        </div>
      </div>
    </Col>
  );
}
