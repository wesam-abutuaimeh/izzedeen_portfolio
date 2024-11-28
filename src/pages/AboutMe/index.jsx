import React, { useState } from "react";
import "./style.css";
import MY_PICTURE from "./Izz_pic.jpg";
import SectionTitle from "../../components/SectionTitle";
import { NavLink } from "react-router-dom";

import Education from "../../components/Education";
import Intership from "../../components/Intership";
import Projects from "../../components/Projects";
import CustomLink from "../../components/CustomLink";

const AboutMe = () => {
  const [education, setEducation] = useState(true);
  const [internship, setInternship] = useState(false);
  const [projects, setProjects] = useState(false);

  const handleTabClick = (tab) => {
    setEducation(tab === "education");
    setInternship(tab === "internship");
    setProjects(tab === "projects");
  };

  return (
    <section className="about-section sec-padding" id="about">
      <div className="container">
        <SectionTitle title={"About me"} />
        <div className="about__container">
          <div className="about-img">
            <div className="img-box">
              <img src={MY_PICTURE} alt="about img" />
            </div>
          </div>

          <div className="about-text">
            <p>
              I am Izzedeen Alfarra, a dedicated JavaScript and TypeScript
              developer with a fervent enthusiasm for backend development. Over
              the past two years, I've honed my skills in Node.js and Nest.js,
              crafting robust and scalable solutions. I'm deeply passionate
              about leveraging the power of these technologies to create
              innovative and efficient software solutions.
            </p>
            <h3>Skills</h3>
            <div className="skills">
              {[
                "JavaScript",
                "NodeJS",
                "ExpressJs",
                "NestJS",
                "PHP",
                "Laravel",
                "MySQL",
                "MongoDB",
                "typeORM",
                "Prisma",
                "Docker",
                "Github Projects",
                "HTML",
                "CSS",
                "REACTJS",
              ].map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>

            <div className="about-tabs">
              <NavLink
                to="#education"
                className={({ isActive }) =>
                  `tab-item ${isActive && education ? "active" : ""}`
                }
                onClick={() => handleTabClick("education")}
              >
                Education
              </NavLink>
              <NavLink
                to="#internship"
                className={({ isActive }) =>
                  `tab-item ${isActive && internship ? "active" : ""}`
                }
                onClick={() => handleTabClick("internship")}
              >
                Internship
              </NavLink>
              <NavLink
                to="#projects"
                className={({ isActive }) =>
                  `tab-item ${isActive && projects ? "active" : ""}`
                }
                onClick={() => handleTabClick("projects")}
              >
                Projects
              </NavLink>
            </div>

            <div className="content__container">
              {education && (
                <div className="tab-content active" id="education">
                  <Education />
                </div>
              )}
              {internship && (
                <div className="tab-content active" id="internship">
                  <Intership />
                </div>
              )}
              {projects && (
                <div className="tab-content active" id="projects">
                  <Projects />
                </div>
              )}
            </div>

            <div className="btns">
              <CustomLink
                target="https://drive.google.com/file/d/1pqJjCnwkSoZQ4yvW9vdNOB0Bzrf7Nu7I/view"
                text="See my CV"
              />
              <CustomLink target="/contact" text="Contact me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
