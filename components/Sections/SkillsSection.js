import React from "react";
import Title from "../Title";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiPython, SiReact, SiTypescript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

const propTypes = {};

const SkillsSection = (props) => {
  //! State

  //! Function
  const listTech = [
    {
      name: "HTML",
      img: <AiFillHtml5 style={{ color: "#e34f26" }} />,
    },
    {
      name: "CSS",
      img: <FaCss3Alt style={{ color: "#1572b6" }} />,
    },
    {
      name: "Javascript",
      img: <SiJavascript style={{ color: "#f7df1e" }} />,
    },
    {
      name: "Typescript",
      img: <SiTypescript style={{ color: "#1572b6" }} />,
    },

    {
      name: "React",
      img: <SiReact style={{ color: "#1572b6" }} />,
    },
    {
      name: "Bootstrap",
      img: <BsBootstrapFill style={{ color: "#543b79" }} />,
    },
    {
      name: "NodeJS",
      img: <FaNodeJs style={{ color: "#679e63" }} />,
    },
  ];

  //! Render
  return (
    <div id="skills-section" className="wow fadeIn">
      <Title title="Skills" />
      <div className="content">
        <div className="left">
          <img src="/static/assets/html_css.svg" alt="img-skills" />
        </div>
        <div className="right">
          <ul className="tech">
            {listTech.map((el) => (
              <li key={el.name}>{el.img}</li>
            ))}
          </ul>

          <ul className="can-i-do">
            <li className="sub-text">
              💪🏻 Building fully responsive website using HTML, CSS, Bootstrap
              (Mui, Antd), Javascript & MERN.
            </li>
            <li className="sub-text">
              💪🏻 I have a good knowledge of full-stack (MERN) but in near future
              I will add more features to myself and excited to explore Python,
              VueJS and many more.
            </li>
            <li className="sub-text">
              💪🏻 I have also used External Libraries (Material UI, Antd,
              Bootstrap, etc) and Figma to design User interface of websites .
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

SkillsSection.propTypes = propTypes;
export default SkillsSection;
