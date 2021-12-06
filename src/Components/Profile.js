import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/profile.css";

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="profile-row">
          <Col>
            <h2>Saloni Subedi</h2>
            <p>Aspiring Software Developer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Senectus et netus et malesuada fames ac. Nibh ipsum consequat nisl
              vel pretium lectus quam id. Proin libero nunc consequat interdum
              varius sit amet mattis. Tortor pretium viverra suspendisse potenti
              nullam ac tortor. Consequat ac felis donec et odio pellentesque. 
            </p>
          </Col>
          <Col>
            <div className="profile-photo"></div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Profile;
