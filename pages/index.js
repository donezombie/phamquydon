import React from "react";
import useScrollProgressBar from "../hooks/useScrollProgressBar";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { SiCodesandbox } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiReact, SiTypescript } from "react-icons/si";

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
    name: "NodeJS",
    img: <FaNodeJs style={{ color: "#679e63" }} />,
  },
];

const projectList = [
  {
    logo: "",
    name: "Textback.AI",
    description: "Intelligent SMS Service That Helps You to Grow Your Business",
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
    link: "https://wisr.com.au",
  },

  {
    logo: "",
    name: "Arcaden",
    description: "Play game and earn the money",
    link: "https://arcaden.my.id",
  },
];

export default function Index() {
  useScrollProgressBar();

  return (
    <div className="main">
      <div className="card wow fadeIn">
        <div className="card-image wow swing" data-wow-delay="0.2s">
          <img src="/static/assets/ava.jpeg" alt="avatar" />
        </div>

        <div className="card-title">
          <TypeAnimation
            sequence={[
              "Hello guys!",
              1000, // Waits 1s
              "Hello guys! I'm Don.",
              0,
              "Hello guys! I'm Don. A Front-end developer.",
              1000,
              "Hello guys! I'm Don. A Front-end developer. Nice to meet you! 👋",
            ]}
            wrapper="h5"
            cursor={true}
            repeat={0}
            style={{ fontSize: "22px" }}
          />
        </div>

        <div className="card-contacts">
          {listSocial.map((el, index) => (
            <a
              key={el.link}
              href={el.link}
              target="_blank"
              alt="link"
              className="wow fadeIn"
              data-wow-delay={`0.${index}s`}
            >
              <el.icon />
            </a>
          ))}
        </div>

        <div className="card-projects">
          <div className="card-projects__skills">
            <p>Skills</p>
            {listTech.map((el, index) => {
              return (
                <div
                  key={el.name}
                  className="skill wow fadeIn"
                  data-wow-delay={`0.${index}s`}
                >
                  {el.img}
                </div>
              );
            })}
          </div>
          <div className="card-projects__projects">
            <p>Projects</p>
            {projectList.map((el, index) => (
              <a
                key={el.name}
                className="project wow fadeIn"
                data-wow-delay={`${0.1 * (index + 1)}s`}
                href={el.link}
                target="_blank"
              >
                {el.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <video autoPlay muted loop id="myVideo">
        <source src="/static/assets/videos/bg.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}
