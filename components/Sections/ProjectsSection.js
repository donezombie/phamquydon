import React from "react";
import Title from "../Title";

const propTypes = {};

const ProjectsSection = (props) => {
  //! State

  //! Function
  const projectList = [
    {
      logo: "",
      name: "Textback.AI",
      description:
        "Intelligent SMS Service That Helps You to Grow Your Business",
      link: "https://textback.ai",
    },
    {
      logo: "",
      name: "Winmart",
      description: "Winmart supermarket system",
      link: "https://dicho.winmart.vn",
    },
    {
      logo: "",
      name: "FAQ MindX",
      description: "A list of answers relate to programming industry",
      link: "https://faq.mindx.edu.vn/",
    },
    {
      logo: "",
      name: "True Hope",
      description: "A injection system of hospital",
      link: "https://tiemchungdev.truehope.vn/dashboard",
    },
    {
      logo: "",
      name: "Dexxxshot",
      description:
        "Buy and sell NFTs across your favorite NFT projects. (18+ content)",
      link: "https://app.dexxxshot.com/",
    },
    {
      logo: "",
      name: "Wisr",
      description:
        "When it comes to important financial stuff, Wisr makes good decisions easy. We can help with personal loans, credit scores and more.",
      link: "https://app.dexxxshot.com/",
    },
  ];

  //! Render
  return (
    <div id="projects" className="wow fadeIn">
      <Title title="Projects" />
      <div className="content">
        <div className="left">
          <div className="projects-list">
            {projectList.slice(0, 4).map((el, index) => (
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

      <div className="other-project">
        {projectList.slice(4).map((el, index) => (
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
  );
};

ProjectsSection.propTypes = propTypes;
export default ProjectsSection;
