import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";


function Home() {
    return (
      <div className="home">
        <div className="about">
          <h2> Hi, My Name is Reggie</h2>
          <div className="prompt">
            <p>I’m a full stack web developer with a specialization in the MERN stack.</p>
            <LinkedInIcon />
            <EmailIcon />
            <GithubIcon />
          </div>
        </div>
        <div className="skills">
          <h1> Skills</h1>
          <ol className="list">
            <li className="item">
              <h2> Front-End</h2>
              <span>
                ReactJS,HTML, CSS, React Native, NPM, BootStrap, MaterialUI, jQuery, StyledComponents
              </span>
            </li>
            <li className="item">
              <h2>Back-End</h2>
              <span>
                NodeJS, ExpressJS, GraphQL, ApolloServer,
                MySQL, MongoDB, SQL, REST, APIs
              </span>
            </li>
            <li className="item">
              <h2>Languages</h2>
              <span>JavaScript/TypeScript</span>
            </li>
          </ol>
        </div>
      </div>
    );
  }
  
  export default Home;