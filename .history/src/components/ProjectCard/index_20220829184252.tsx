import { Col } from "react-bootstrap";

interface ProjectCardInter {
  title: string;
  url: string;
  img: string;
  repo: string;
}

export function ProjectCard({ title, url, img, repo}: ProjectCardInter) {
  return (
    <Col sm={6} mf={4}>
      <img src={img} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>url</span>
        <span>{repo}</span>
      </div>
    </Col>
  );
}
