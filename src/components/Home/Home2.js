import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BIG <span className="purple"> HELLO </span> FROM ME!
            </h1>
            <p className="home-about-body">
              Welcome to my digital corner of the internet! 🎉<br />
              I'm a passionate <span className="purple">IT enthusiast</span> who thrives on building cool things with code.
              With a solid foundation in languages like{" "}
              <i>
                <b className="purple">C#, JavaScript, and TypeScript</b>
              </i>
              , I love diving deep into <span className="purple">Full-Stack development</span>, creating seamless user experiences, and exploring the limitless possibilities of technology. 
              <br />
              <br />
              I’m also a fan of <b className="purple">problem-solving</b> and thrive in fast-paced, innovative environments where I can bring my attention to detail and creative mindset to the table.
              <br />
              <br />
              If I’m not coding, you’ll find me learning about the latest trends in{" "}
              <b className="purple">software engineering</b> or planning my next community project. 🌟
              <br />
              <br />
              Don't forget to check out my{" "}
              <b className="purple">GitHub portfolio</b> to explore my projects and journey in tech!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Let’s create something <span className="purple">amazing </span> together! 🚀
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HarisKordic"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/haris-kordic-638566196/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
