// src/components/Links.js
import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <br />
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;
