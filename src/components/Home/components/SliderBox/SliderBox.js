import React from "react";
import "./SliderBox.css";
const SliderBox = ({ name, about }) => {
  return (
    <div
      id="SliderBox"
      className=" columns is-vcentered box has-text-centered has-text-white mt-5"
    >
      <div className="column is-12">
        <div className="mt-5">
          <span className="is-size-5">{name}</span>
        </div>
        <div className="mb-5">
          <span className="is-size-1">{about}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderBox;
