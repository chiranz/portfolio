import React from "react";
import { socialLinks } from "../../social_links";

export default function Links() {
  return (
    <div className="social-links">
      {socialLinks.map(socialLink => (
        <a
          key={socialLink.name}
          className={
            (socialLink.name === "twitter" ? "" : "ml-1") + " text-light"
          }
          href={socialLink.url}
          targer="blank"
        >
          <i className={socialLink.iconClass + " large"} />
        </a>
      ))}
    </div>
  );
}
