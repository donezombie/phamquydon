import React from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";

const propTypes = {};

const AboutMeSection = (props) => {
  //! State

  //! Function
  const listSocial = [
    {
      link: "https://fb.com/donezombiee",
      icon: FaFacebookF,
    },
    {
      link: "https://instagram.com/donezombie",
      icon: FaInstagram,
    },
    {
      link: "https://github.com/donezombie",
      icon: FaGithub,
    },
    {
      link: "https://codesandbox.io/u/donezombie",
      icon: SiCodesandbox,
    },
  ];

  //! Render
  return (
    <div id="about-me">
      <div className="content wow fadeIn">
        <div className="left">
          <h2>
            Hello guys! I'm Don (Donezombie) <span className="wave">👋🏻</span>
          </h2>
          <h5 className="sub-text">
            A passionate Developer having more 3 years experience in Web
            Development.
          </h5>

          <ul className="social">
            {listSocial.map((el) => (
              <li key={el.link}>
                <a href={el.link} target="_blank" alt="link">
                  <el.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <img alt="boy-img" src="/static/assets/boy.gif" />
        </div>
      </div>
    </div>
  );
};

AboutMeSection.propTypes = propTypes;
export default AboutMeSection;
