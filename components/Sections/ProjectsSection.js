import React from "react";
import Title from "../Title";

const propTypes = {};

const ProjectsSection = (props) => {
  //! State

  //! Function
  const projectList = [
    {
      logo: "",
      name: "Textback",
      description: "TextbackTextbackTextbackTextbackTextbackTextbackTextback",
    },
    {
      logo: "",
      name: "Textback1",
      description: "TextbackTextbackTextbackTextbackTextbackTextbackTextback",
    },
    {
      logo: "",
      name: "Textback2",
      description: "TextbackTextbackTextbackTextbackTextbackTextbackTextback",
    },
    {
      logo: "",
      name: "Textback3",
      description: "TextbackTextbackTextbackTextbackTextbackTextbackTextback",
    },
  ];

  //! Render
  return (
    <div id="projects" className="wow fadeIn">
      <Title title="Projects" />
      <div className="content">
        <div className="left">
          <ul className="projects">
            {projectList.map((el, index) => (
              <li
                key={el.name}
                className="project wow fadeIn"
                data-wow-delay={`${0.1 * (index + 1)}s`}
              >
                <h4>{el.name}</h4>
                <span className="sub-text">{el.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <img src="/static/assets/project.svg" alt="project" />
        </div>
      </div>
    </div>
  );
};

ProjectsSection.propTypes = propTypes;
export default ProjectsSection;
