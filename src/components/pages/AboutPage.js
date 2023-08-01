import React from "react";
import github from '../img/github.svg'
import linkedin from '../img/linkedin.svg'

import "./AboutPage.css"

// why is this one an arrow function?
export default function AboutPage() {
  return (
    <div class="about">
      <li><div className="intro">
        <h2>Hello! I'm Zoli, a full stack developer. 👋</h2>
      </div></li>
      <li><div className="about-s">
        <h3>About</h3>
        <p>I became passionate about coding in 2019 and have completed my 4 year Computer Science B.Sc. 
        at The University of Saskatchewan.
        My focus is now on creating responsive, optimized, and complete software.
        </p>
        <div className="links">
        <a href="https://github.com/yungzol"><img class="link-icon" src={github} alt="Icon"></img></a>
        <a href="https://www.linkedin.com/in/zoli-digness-326256248/"><img class="link-icon" src={linkedin} alt="Icon"></img></a>
        </div>
      </div></li>
    </div>
  );
};