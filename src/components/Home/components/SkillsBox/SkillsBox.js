import { React } from "react";
import SkillBox from "./components/SkillBox/SkillBox";
const SkillsBox = ({ SkillsObject }) => {
  return (
    <div className="container-fluid text-center mt-5 mb-5">
      <h2 className="h1 fw-bold">Skills</h2>
      <span className="h5">some of my skills</span>
      <div className="pt-2 row">
        {SkillsObject.map((skill, key) => {
          return <SkillBox skillObj={skill} key={key} />;
        })}
      </div>
    </div>
  );
};

export default SkillsBox;
