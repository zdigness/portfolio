import React from "react";

import "./ProjectBox.css"

import icon from '../img/353-project.png'
import github from '../img/github.png'
import live from '../img/live.png'

export default function BasicBox() {
    return (
        <div className="projectmain">
            <div className="projectbox">
            <a>
            <img className="project-icon" src={icon} alt="Icon"></img>
            </a>
            </div>
            <div className="projectdisc">
            <a href="https://github.com/yungzol/cmpt-353-project"><h1 className="disc">Code <img className="project-link" src={github} alt="Icon"></img></h1></a>
            <h1 className="disc">Live <img className="project-link" src={live} alt="Icon"></img></h1>
            </div>
        </div>
    )
}