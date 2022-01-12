import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import {
  Cpp,
  CLang,
  Javascript,
  Java,
  Python,
  Html,
  Css,
  Bootstrap,
  Jquery,
  Sass,
  Mui,
  Node,
  Express,
  Mongo,
  ReactLogo,
  Npm,
  Heroku,
} from "./styles";
import "../styles/skills.css";

class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="skill-row">
          <h2>Languages</h2>
          <Cpp />
          <CLang />
          <Javascript />
          <Java />
          <Python />
        </Row>
        <Row className="skill-row">
          <h2>Development</h2>
          <Html />
          <Css />
          <Bootstrap />
          <Jquery />
          <Sass />
          <Mui />
          <Node />
          <Express />
          <Mongo />
          <ReactLogo />
          <Npm />
          <Heroku />
        </Row>
      </React.Fragment>
    );
  }
}

export default Skills;
