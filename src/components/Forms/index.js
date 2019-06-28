import React from "react";

export default function index() {
  return (
    <div className="contact-form">
      <h1>Get in touch</h1>
      <form
        className="form"
        name="contact"
        method="POST"
        action="/success"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <div class="form-group hidden">
          <label>
            Don’t fill this out if you're human:{" "}
            <input type="text" name="bot-field" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Name:{" "}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              autoFocus
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email Address:{" "}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Subject:{" "}
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Message:{" "}
            <textarea name="message" id="message" placeholder="Your message!" />
          </label>
        </div>
        <div className="form-group" data-netlify-recaptcha="true" />
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Send <i className="fa fa-send" />
          </button>
        </div>
      </form>
    </div>
  );
}
