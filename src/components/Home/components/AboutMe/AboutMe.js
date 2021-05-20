import React from "react";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="container mt-6">
      <div className="card">
        <div className="has-text-centered pb-3 pt-3">
          <h2 className="title is-2">About me</h2>
        </div>
        <figure className="image is-128x128">
          <img
            src={process.env.PUBLIC_URL + "images/profile.jpg"}
            alt="profile"
            className="is-rounded"
          />
        </figure>

        <div className="content">
          <h4 className="title is-size-4 has-text-centered mt-3">
            Mohammad Raufzahed
          </h4>
          <div className="has-text-justified pl-6 pr-6 regular">
            I'm mohammad, a self-taught developer that lives in Iran. I have
            been working as Back-end and front-End Developer and I have the
            experience to write a program with Python, PHP, React.
          </div>
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            <a
              className="has-text-link has-text-danger"
              href="https://www.instagram.com/mohammadraufzahed/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="fab fa-instagram fa-2x"></span>
            </a>
          </div>
          <div className="card-footer-item">
            <a
              className="has-text-black"
              href="https://github.com/mohammadraufzahed"
              target="_blank"
              rel="noreferrer"
            >
              <span className="fab fa-github fa-2x"></span>
            </a>
          </div>
          <div className="card-footer-item">
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
  );
};

export default AboutMe;
