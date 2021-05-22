import React from "react";
import "./SliderBox.css";
const SliderBox = ({ name, about }) => {
  return (
    <div
      id="SliderBox"
      className="text-center text-white shadow bg-dark rounded mt-3"
    >
      {/* title */}
      <h1 className="fs-1 title pt-4">{name}</h1>
      {/* Subtitle */}
      <h2 className="fs-5 pb-3">{about}</h2>
    </div>
  );
};

export default SliderBox;
