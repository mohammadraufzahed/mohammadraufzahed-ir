import { React, useState } from "react";
import SliderBox from "./components/SliderBox/SliderBox";
import SkillsBox from "./components/SkillsBox/SkillsBox";
import PortfoliosBox from "./components/PortfoliosBox/PortfoliosBox";
import AboutMe from "./components/AboutMe/AboutMe";

const Home = () => {
  const [skillsObj] = useState([
    {
      title: "Python",
      description: "I can write a beutifull apps with python",
      rate: "5",
      fontAwesomeIcon: "fab fa-python",
    },
    {
      title: "PHP",
      description: "I can write a beutifull web apps with php",
      rate: "2",
      fontAwesomeIcon: "fab fa-php",
    },
    {
      title: "Linux",
      description: "I'm in love with Gnu/Linux",
      rate: "3",
      fontAwesomeIcon: "fab fa-linux",
    },
  ]);
  const [portfoliosObj] = useState([
    {
      title: "PHP Blog",
      description: "a simple blog writed in php to test my skills",
      langs: ["PHP", "CSS"],
      githubUrl: "https://github.com/mohammadraufzahed/php-blog",
      websiteUrl: "#",
    },
    {
      title: "react-random-user-generator",
      description: "A simple user generator that is written with React",
      langs: ["HTML", "JAVASCRIPT", "CSS"],
      githubUrl:
        "https://github.com/mohammadraufzahed/react-random-user-generator",
      websiteUrl: "#",
    },
    {
      title: "password_generator_py",
      description: "A Simple password generator is written with python",
      langs: ["PYTHON"],
      githubUrl:
        "https://github.com/mohammadraufzahed/react-random-user-generator",
      websiteUrl: "#",
    },
  ]);
  return (
    //   Home component
    <div>
      {/* SliderBox */}
      <div className="columns is-centered">
        <div className="column is-7">
          <SliderBox
            name="Mohammad Raufzahed"
            about="a junior Backend programmer"
          />
          <SkillsBox SkillsObject={skillsObj} />
          <PortfoliosBox PortfoliosObj={portfoliosObj} />
          <AboutMe />
        </div>
      </div>
    </div>
  );
};

export default Home;
