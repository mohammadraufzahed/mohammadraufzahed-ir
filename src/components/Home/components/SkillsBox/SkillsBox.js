import { React } from "react";
import SkillBox from "./components/SkillBox/SkillBox";
const SkillsBox = () => {
  let skillsObj = [
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
  ];

  return (
    <div className="container is-fullhd has-text-centered mt-5">
      <h2 className="title is-size-2">Skills</h2>
      <span className="subtitle">some of my skills</span>
      <div className="columns is-multiline pt-5">
        {skillsObj.map((skill, key) => {
          return <SkillBox skillObj={skill} key={key} />;
        })}
      </div>
    </div>
  );
};

export default SkillsBox;
