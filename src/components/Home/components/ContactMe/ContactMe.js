import React from "react";

const ContactMe = () => {
  return (
    <div className="container mt-6">
      <form action="#" method="POST">
        <div class="title is-2">Contact Me</div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  name="name"
                />
                <div className="icon is-small is-left">
                  <span className="fas fa-user"></span>
                </div>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <div className="icon is-small is-left">
                  <span class="fas fa-envelope"></span>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea
                  class="textarea"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button is-primary" name="send">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
