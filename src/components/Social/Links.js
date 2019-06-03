import React, { Fragment } from "react";
import { socialLinks } from "../../social_links";

export default function Links() {
  return (
    <Fragment>
      {socialLinks.map(socialLink => (
        <a key={socialLink.name}>
          <i className={socialLink.iconClass} />
        </a>
      ))}
    </Fragment>
  );
}
