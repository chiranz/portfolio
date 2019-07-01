import React, { Fragment } from "react";
import { socialLinks } from "../social_links";

export default function ContactCard() {
  return (
    <div className="contact-card">
      <h1 className="uppercase">contact me</h1>
      <br />
      <div className="vcard">
        <dl>
          {socialLinks.map((link, index) => {
            return (
              <Fragment key={index}>
                <dt>{link.name}:</dt>
                <dd>
                  <a href={link.url}>
                    <i className={link.iconClass} />
                    &#160;{link.value}
                  </a>
                </dd>
                <br />
              </Fragment>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
