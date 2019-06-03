import React from "react";
import myimg from "../../images/myimg.png";

export default function Avatar() {
  return (
    <div>
      <img
        src={myimg}
        alt="Avatar Chiranjibi"
        style={{ height: "152px", width: "152px", borderRadius: "50%" }}
      />
    </div>
  );
}
