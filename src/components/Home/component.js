import { React, useState } from "react";
import SliderBox from "./components/SliderBox/SliderBox";
import SkillsBox from "./components/SkillsBox/SkillsBox";

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
        </div>
      </div>
    </div>
  );
};

export default Home;
