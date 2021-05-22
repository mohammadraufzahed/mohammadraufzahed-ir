import React from "react";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="w-75 m-auto p-3">
      <div className="card">
        <div className="text-center pb-3 pt-3">
          <h2 className="h2 fw-bold">About me</h2>
        </div>
        <figure className="text-center">
          <img
            src={process.env.PUBLIC_URL + "images/profile.jpg"}
            alt="profile"
            className="rounded-2 image-fluid"
          />
        </figure>
        <h4 className="card-title h2 fw-bold text-center mt-3">
          Mohammad Raufzahed
        </h4>
        <div className="card-body">
          <div className="card-text fw-normal fs-5 w-75 m-auto pb-3">
            I'm mohammad, a self-taught developer that lives in Iran. I have
            been working as Back-end and front-End Developer and I have the
            experience to write a program with Python, PHP, React.
          </div>
        </div>
        <div className="card-footer">
          <div className="row text-center">
            <div className="col-4">
              <a
                className="link-danger"
                href="https://www.instagram.com/mohammadraufzahed/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="fab fa-instagram fa-2x"></span>
              </a>
            </div>
            <div className="col-4">
              <a
                className="link-dark"
                href="https://github.com/mohammadraufzahed"
                target="_blank"
                rel="noreferrer"
              >
                <span className="fab fa-github fa-2x"></span>
              </a>
            </div>
            <div className="col-4">
              <a
                href="https://twitter.com/Mamadraufzahed"
                target="_blank"
                rel="noreferrer"
              >
                <span className="fab fa-twitter fa-2x"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
