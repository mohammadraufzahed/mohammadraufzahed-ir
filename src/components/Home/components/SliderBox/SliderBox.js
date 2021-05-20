import React from "react";
import "./SliderBox.css";
const SliderBox = ({ name, about }) => {
  return (
    <div
      id="SliderBox"
      className=" columns is-vcentered box has-text-centered mt-5"
    >
      <div className="column is-12">
        {/* title */}
        <h1 className="title is-size-1 has-text-white">{name}</h1>
        {/* Subtitle */}
        <h2 className="subtitle is-size-4 has-text-white">{about}</h2>
      </div>
    </div>
  );
};

export default SliderBox;
