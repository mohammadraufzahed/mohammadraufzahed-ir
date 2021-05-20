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
    console.log(`${skillObj.title} reminded rate: ${rate}`);
  }
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image pt-3">
          <figure className="image">
            <i className={skillObj.fontAwesomeIcon + " fa-5x"}></i>
          </figure>
        </div>
        <hr />
        <h3 className=" has-text-centered is-size-4 is-bold">
          {skillObj.title}
        </h3>
        <div className="stars pt-2">{stars}</div>
        <div className="card-content pb-4">
          <div className="content">{skillObj.description}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
