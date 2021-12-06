import React, { Component, useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
import Skills from "./Skills";
import Projects from "./Projects";
import Resume from "./Resume";
import "../styles/style.css";

function App() {
  return (
    <React.Fragment>
      <Container className="portfolio">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h1 className="header-text">Profile</h1>
            </Accordion.Header>
            <Accordion.Body>
              <Container className="accordion-body">
                <Profile />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h1 className="header-text">Skills</h1>
            </Accordion.Header>
            <Accordion.Body>
              <Container>
                <Skills />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h1 className="header-text">Projects</h1>
            </Accordion.Header>
            <Accordion.Body>
              <Container>
                <Projects />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h1 className="header-text">Resume</h1>
            </Accordion.Header>
            <Accordion.Body>
              <Container>
                <Resume />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </React.Fragment>
  );
}

export default App;
