import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiPython, DiCss3 } from "react-icons/di";
import {
  SiAngularjs,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiDjango,
  SiTypescript,
  SiApachekafka,
  SiCsharp,
  SiDotnet,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>

      {/* Frameworks/Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngularjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>
    </Row>
  );
}

export default Techstack;
