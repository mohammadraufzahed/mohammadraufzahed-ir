import React from "react";
import SliderBox from "./components/SliderBox/SliderBox";
import SkillsBox from "./components/SkillsBox/SkillsBox";

const Home = () => {
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
          <SkillsBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
