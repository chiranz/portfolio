import React from "react";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#ddd",
  maxWidth: "55rem",
  width: "100%",
  height: "100%"
};

export default function UnderConstruction(props) {
  return (
    <div style={styles}>
      <h1>{props.pageName}</h1>
      <h2>Page under Construction</h2>
    </div>
  );
}
