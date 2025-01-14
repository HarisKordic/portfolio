import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Haris Kordic </span>
            from <span className="purple"> Sarajevo, Bosnia and Hercegovina.</span>
            <br />
            I am currently employed as a software developer at <a href="https://pickleball.com/" target="_blank" rel="noreferrer" style={{ color: "#c084f5" }}
>Pickleball.com</a>.
            <br />
            I am a bachelour of Software Engineering at FIT (Faculty of Information Technologies, Mostar, BiH).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing businesses
            </li>
            <li className="about-activity">
              <ImPointRight /> Skiing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
             <li className="about-activity">
              <ImPointRight /> Playing tennis
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make it work, make it right, make it fast."{" "}
          </p>
          <footer className="blockquote-footer">Kent Beck</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
