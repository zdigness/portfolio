import React from "react";
import "../css/projects.css"

export default function BasicBox({ number, name, description, image, link }) {
    return (
        <div className="projects-container">
            <div className="project-layout">
                <div className="leftside">
                    <div className="number">
                        <h2>{number}</h2>
                    </div>
                    <div className="name">
                        <h1>{name}</h1>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="rightside">
                    <a href={link} target="_blank" rel="noreferrer">
                    <img src={image} alt="Icon"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}