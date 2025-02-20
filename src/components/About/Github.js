import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "70px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
         <strong className="purple">Days</strong> I code
      </h1>
      <GitHubCalendar
        username="HarisKordic"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
