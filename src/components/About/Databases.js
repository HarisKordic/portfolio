import React from "react";
import { Col, Row } from "react-bootstrap";
import {

  SiPostgresql,
  SiMicrosoftsqlserver,
  SiOracle,
  SiFirebase,
} from "react-icons/si";

function Databases() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Databases;
