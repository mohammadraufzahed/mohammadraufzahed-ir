import { React } from "react";
import SkillBox from "./components/SkillBox/SkillBox";
const SkillsBox = ({ SkillsObject }) => {
  return (
    <div className="container is-fullhd has-text-centered mt-5">
      <h2 className="title is-size-2">Skills</h2>
      <span className="subtitle">some of my skills</span>
      <div className="columns is-multiline pt-5">
        {SkillsObject.map((skill, key) => {
          return <SkillBox skillObj={skill} key={key} />;
        })}
      </div>
    </div>
  );
};

export default SkillsBox;
