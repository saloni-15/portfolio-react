import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { SiGmail, SiInstagram } from "react-icons/si";
import "../styles/profile.css";


class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="profile-row">
          <Col>
            <h2>Saloni Subedi</h2>
            <p className="subheading">Aspiring Software Developer</p>
            <p className="description">
              I'm a prefinal year Computer Science Engineering student pursuing
              my Btech degree from Chandigarh University. I have keen interest
              in Full Stack Web Development and I'm most passionate about giving
              back to the community, and my goal is to pursue this passion
              within the field of software engineering.
            </p>
            <div className="social-icons">
              <a
                className="linkedin icon"
                href="https://www.linkedin.com/in/saloni-subedi-6939911b5/"
              >
                {" "}
                <BsLinkedin />
              </a>
              <a className="github icon" href="https://github.com/saloni-15">
                {" "}
                <BsGithub />
              </a>
              <a className="mail icon" href="">
                {" "}
                <SiGmail />
              </a>
              <a className="insta icon" href="https://instagram.com">
                {" "}
                <SiInstagram />
              </a>
              <a className="twitter icon" href="https://twitter.com">
                {" "}
                <BsTwitter />
              </a>
              <button class="button-34" role="button">
                <a
                  href="https://docs.google.com/document/d/1nk-km5BhjsNz9NlVhqxrOsGLdLcHG4feEB0yrrPWIcE/edit?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </button>
            </div>
          </Col>
          <Col className="profile-col">
            <div className="profile-photo"></div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Profile;
