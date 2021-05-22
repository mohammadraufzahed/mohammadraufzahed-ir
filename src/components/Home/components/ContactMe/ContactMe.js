import React from "react";

const ContactMe = () => {
  return (
    <div className="w-50 m-auto p-3 mt-5 border border-gray shadow">
      <form action="#">
        <div class="text-center h2">Contact Me</div>
        <div className="m-auto">
          <div className="input-group mt-3 mb-3">
            <span className="input-group-text">
              <span className="fas fa-user"></span>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
        </div>
        <div className="m-auto">
          <div className="input-group mt-3 mb-3 col-4">
            <span className="input-group-text">
              <span class="fas fa-envelope"></span>
            </span>
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
        </div>
        <div className="input-group">
          <span className="input-group-text">
            <span className="fas fa-inbox"></span>
          </span>
          <textarea
            class="form-control"
            placeholder="Your message"
            name="message"
          ></textarea>
        </div>
        <button class="btn btn-primary mt-3" name="send">
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
