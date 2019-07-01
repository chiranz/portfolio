import React from "react";
import MyImage from "../../images/myimg.png";
import { person, personContact } from "../../data/constants";

export default function Header() {
  return (
    <div className="cv-section cv-header">
      <div className="cv-header-avatar">
        <img src={MyImage} alt="Person Avatar" />
      </div>
      <div className="cv-header-text">
        <h1 className="cv-header-name">{person.name}</h1>
        <h2 className="cv-header-subname">{person.profession}</h2>
        <br />
        <div className="cv-header-lead">
          {person.headline}
          <br />
          <br />
          <strong>{person.lookingFor}</strong>
          <br />
          {person.workType}
        </div>
      </div>
      <div className="cv-header-contact">
        <div className="contact">
          <div className="contact-email">
            <a href={"mail-to:" + personContact.email}>{personContact.email}</a>
          </div>
          <div className="contact-phone">{personContact.phone}</div>
          <div className="contact-website">
            <a
              href={personContact.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {personContact.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
