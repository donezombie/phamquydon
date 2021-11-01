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
      link: "",
    },
    {
      logo: "",
      name: "Textback1",
      description: "TextbackTextbackTextbackTextbackTextbackTextbackTextback",
      link: "",
    },
    {
      logo: "",
      name: "Textback2",
      description: "TextbackTextbackTextbackTextbackTextbackTextbackTextback",
      link: "",
    },
    {
      logo: "",
      name: "Textback3",
      description: "TextbackTextbackTextbackTextbackTextbackTextbackTextback",
      link: "",
    },
  ];

  //! Render
  return (
    <div id="projects" className="wow fadeIn">
      <Title title="Projects" />
      <div className="content">
        <div className="left">
          <div className="projects-list">
            {projectList.map((el, index) => (
              <a
                key={el.name}
                className="project wow fadeIn"
                data-wow-delay={`${0.1 * (index + 1)}s`}
                href={el.link}
                target="_blank"
              >
                <h4>{el.name}</h4>
                <h6 className="sub-text">{el.description}</h6>
              </a>
            ))}
          </div>
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
