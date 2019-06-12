import React from "react";
import { socialLinks } from "../../social_links";

export default function Links() {
  return (
    <div className="social-links">
      {socialLinks.map((socialLink, index) => (
        <a
          key={socialLink.name}
          className={(index === 0 ? "" : "ml-1") + " text-light"}
          href={socialLink.url}
          target="blank"
        >
          <i className={socialLink.iconClass + " large"} />
        </a>
      ))}
    </div>
  );
}
