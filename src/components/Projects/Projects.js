import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mosaicpay from "../../Assets/Projects/mosaicpay.png";
import illuminatingAi from "../../Assets/Projects/gradcam_face_1.jpg";
import movieRatingApp from "../../Assets/Projects/movie_rating_app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={illuminatingAi}
              isBlog={false}
              title="Illuminating AI: Explaining Image Classification Decisions with XAI"
              description="I developed an explainable artificial intelligence model for image classification using a popular dataset (CIFAR-10 for classifying images into 10 categories). "
              ghLink="https://github.com/HarisKordic/final-thesis"
            />
          </Col>
              <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieRatingApp}
              isBlog={false}
              title="Movie rating app"
              description="This is a simple project, where I used plain React JavaScript and TMDB’s API to create a responsive and interactive movie rating/info website."
              ghLink="https://github.com/HarisKordic/Movie-rating-app"
              demoLink="https://gallant-hopper-49bc11.netlify.app/"
            />
          </Col>
           
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mosaicpay}
              isBlog={false}
              title="MosaicPay"
              description="Bringing together different elements of fintech, such as accounts, transactions, and documents, to provide comprehensive payment solutions."
              ghLink="https://github.com/HarisKordic/MosaicPay-backend"
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
