import React from "react";
import github from '../img/github.svg'
import linkedin from '../img/linkedin.svg'

import "./AboutPage.css"

// why is this one an arrow function?
export default function AboutPage() {
  return (
    <div class="about">
      <div class="description">
        <h1>Hello! I'm Zoli, a full stack developer. 👋</h1>
      </div>
      <div class="links">
        <img class="link-icon" src={github} alt="Icon"></img>
        <img class="link-icon" src={linkedin} alt="Icon"></img>
      </div>
      </div>
  );
};