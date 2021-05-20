import React from "react";
import SliderBox from "./components/SliderBox/SliderBox";

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
        </div>
      </div>
    </div>
  );
};

export default Home;
