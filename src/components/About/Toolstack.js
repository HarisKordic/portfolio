import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiAzuredevops,
  SiVisualstudio,
  SiGithub,
  SiDocker,
  SiTrello,
  SiLinear,
  SiNginx,
  SiTurborepo,
  SiJira,
  SiConfluence,
  SiMicrosoftteams,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Development Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* Collaboration and Project Management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftteams />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinear />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiConfluence />
      </Col>

      {/* Hosting and Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTurborepo />
      </Col>

      {/* Operating Systems */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>

      {/* DevOps and Infrastructure */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Toolstack;
