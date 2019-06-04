import React, { Fragment } from "react";
import { socialLinks } from "../../social_links";

export default function Links() {
  return (
    <Fragment>
      {socialLinks.map(socialLink => (
        <a
          key={socialLink.name}
          className={
            (socialLink.name === "twitter" ? "" : "ml-1") + " text-light"
          }
        >
          <i className={socialLink.iconClass + " large"} />
        </a>
      ))}
    </Fragment>
  );
}
