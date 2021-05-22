import React from "react";

const SkillBox = ({ skillObj }) => {
  let stars = [];
  let rate = skillObj.rate;
  for (var i = 1; i <= 5; i++) {
    if (rate >= i) {
      stars.push(
        <span
          className="fa fa-star checked"
          style={{ color: "yellow" }}
          key={i}
        ></span>
      );
      continue;
    } else {
      stars.push(
        <span className="fa fa-star" key={i} style={{ color: "grey" }}></span>
      );
    }
  }
  return (
    <div className="col-lg-4 p-3">
      <div className="card">
        <div className="card-image-top pt-3">
          <i
            style={{ color: skillObj.color }}
            className={skillObj.fontAwesomeIcon + " fa-5x"}
          ></i>
        </div>
        <hr />
        <h3 className="h3 fw-bold card-title">{skillObj.title}</h3>
        <div className="stars fs-5">{stars}</div>
        <div className="card-text fw-normal pb-4 pt-3">
          {skillObj.description}
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
