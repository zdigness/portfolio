import React from "react";

import "./ProjectBox.css"

import icon from '../img/background-2.png'

export default function BasicBox() {
    return (
        <div className="projectbox">
            <img className="project-icon" src={icon} alt="Icon"></img>
        </div>
    )
}