import React, { Component } from "react";
//import { Row, Col, Card, Button } from "react-bootstrap";
import "../styles/project.css";
class Projects extends Component {
  render() {
    return (
      <>
        <div className="row1-container">
          <div className="box box-down cyan">
            <h2>Stalgia</h2>
            <button class="button-34" role="button">
              <a href="https://github.com/saloni-15/Stalgia" target="_blank">
                Code
              </a>
            </button>
            <button class="button-34" role="button">
              <a href="stalgia.netlify.app/" target="_blank">
                Live
              </a>
            </button>
            <p>
              A Full-stack MERN application with basic CRUD operations. A simple
              social media app to share interesting events from your lives in
              the form of posts.
            </p>
            <div className="tech-stack">
              <img src="https://img.shields.io/badge/-MongoDB-333333?style=plastic&logo=mongodb" />
              <img src="https://img.shields.io/badge/-ExpressJS-333333?style=plastic&logo=express" />
              <img src="https://img.shields.io/badge/-React-333333?style=plastic&logo=react" />
              <img src="https://img.shields.io/badge/-Node.js-333333?style=plastic&logo=node.js" />
              <img src="https://img.shields.io/badge/-MaterialUI-333333?style=plastic&logo=mui" />
              <img src="https://img.shields.io/badge/-Netlify-333333?style=plastic&logo=netlify" />
            </div>
          </div>

          <div className="box red">
            <h2>POST-O-BLOG</h2>
            <button class="button-34" role="button">
              <a
                href="https://github.com/saloni-15/POST-O-BLOG"
                target="_blank"
              >
                Code
              </a>
            </button>
            <button class="button-34" role="button">
              <a href="post-o-blog.herokuapp.com/" target="_blank">
                Live
              </a>
            </button>
            <p>
              A blogging website with google authentication support, dynamic
              rendering of content along with Markdown Support.
            </p>
            <div className="tech-stack">
              <img src="https://img.shields.io/badge/-Node.js-333333?style=plastic&logo=node.js" />
              <img src="https://img.shields.io/badge/-ExpressJS-333333?style=plastic&logo=express" />
              <img src="https://img.shields.io/badge/-CSS-333333?style=plastic&logo=CSS3&logoColor=1572B6" />
              <img src="https://img.shields.io/badge/-MongoDB-333333?style=plastic&logo=mongodb" />
              <img src="https://img.shields.io/badge/-Embedded%20JS-333333?style=plastic&logo=ejs" />
              <img src="https://img.shields.io/badge/-Heroku-333333?style=plastic&logo=heroku&logoColor=6567a5" />
            </div>
          </div>

          <div className="box box-down blue">
            <h2>Plan-CLI</h2>
            <button class="button-34" role="button">
              <a href="https://github.com/saloni-15/plan-CLI" target="_blank">
                Code
              </a>
            </button>
            <button class="button-34" role="button">
              <a href="#" target="_blank">
                Live
              </a>
            </button>
            <p>A command-line (CLI) program that lets you manage your tasks</p>
            <div className="tech-stack">
              <img src="https://img.shields.io/badge/C++-333333?style=plastic&logo=c%2B%2B&logoColor=00599C" />
              <img src="https://img.shields.io/badge/-Bash-333333?style=plastic&logo=gnu-bash&logoColor=white" />
             
            </div>
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange">
            <h2>Travel Bee</h2>
            <button class="button-34" role="button">
              <a href="https://github.com/" target="_blank">
                Code
              </a>
            </button>
            <button class="button-34" role="button">
              <a href="#" target="_blank">
                Live
              </a>
            </button>
            <p>Lorem ipsum, bla bla bla</p>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
