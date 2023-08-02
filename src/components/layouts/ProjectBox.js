import React from "react";

import "./ProjectBox.css"

import icon from '../img/353-project.png'

export default function BasicBox() {
    return (
        <div className="projectbox">
            <a href="https://github.com/yungzol/cmpt-353-project">
            <img className="project-icon" src={icon} alt="Icon"></img>
            </a>
        </div>
    )
}